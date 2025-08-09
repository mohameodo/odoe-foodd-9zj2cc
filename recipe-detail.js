document.addEventListener('DOMContentLoaded', () => {
    const loadingSpinner = document.getElementById('loading-spinner');
    const contentWrapper = document.getElementById('recipe-content-wrapper');

    // Get recipe ID from URL
    const params = new URLSearchParams(window.location.search);
    const recipeId = parseInt(params.get('id'));
    const recipe = allRecipes.find(r => r.id === recipeId);

    if (recipe) {
        // Hide spinner and show content
        loadingSpinner.style.display = 'none';
        contentWrapper.classList.remove('opacity-0');

        // Populate page with recipe data
        document.title = `${recipe.title} - Flavor Adventures`;
        document.getElementById('breadcrumb-recipe-title').textContent = recipe.title;
        document.getElementById('recipe-title').textContent = recipe.title;
        document.getElementById('recipe-description').textContent = recipe.description;
        document.getElementById('recipe-image').src = recipe.image;
        document.getElementById('recipe-image').alt = recipe.title;
        document.getElementById('prep-time').textContent = recipe.prepTime;
        document.getElementById('cook-time').textContent = recipe.cookTime;
        document.getElementById('servings').textContent = recipe.servings;

        // Populate ingredients
        const ingredientsList = document.getElementById('ingredients-list');
        recipe.ingredients.forEach(ing => {
            ingredientsList.innerHTML += `
                <li class="flex items-center">
                    <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 mr-3">
                    <span>${ing}</span>
                </li>`;
        });

        // Populate instructions
        const instructionsList = document.getElementById('instructions-list');
        recipe.instructions.forEach(step => {
            instructionsList.innerHTML += `<p>${step}</p>`;
        });

        // Rating System
        const stars = document.querySelectorAll('#rating-stars i');
        const ratingFeedback = document.getElementById('rating-feedback');
        let currentRating = 0;

        function loadRating() {
            const ratings = JSON.parse(localStorage.getItem('recipeRatings')) || {};
            if (ratings[recipe.id] && ratings[recipe.id].userRating) {
                currentRating = ratings[recipe.id].userRating;
                updateStars(currentRating);
                ratingFeedback.textContent = 'You rated this recipe!';
            }
        }

        function updateStars(rating) {
            stars.forEach(star => {
                star.classList.remove('fas', 'text-yellow-400');
                star.classList.add('fa-solid', 'text-gray-300');
                if (star.dataset.value <= rating) {
                    star.classList.add('fas', 'text-yellow-400');
                    star.classList.remove('text-gray-300');
                }
            });
        }

        stars.forEach(star => {
            star.addEventListener('mouseover', () => updateStars(star.dataset.value));
            star.addEventListener('mouseout', () => updateStars(currentRating));
            star.addEventListener('click', () => {
                currentRating = star.dataset.value;
                saveRating(currentRating);
                ratingFeedback.textContent = 'Thanks for your rating!';
                setTimeout(() => { ratingFeedback.textContent = 'You rated this recipe!' }, 3000);
            });
        });

        function saveRating(rating) {
            const ratings = JSON.parse(localStorage.getItem('recipeRatings')) || {};
            if (!ratings[recipe.id]) {
                ratings[recipe.id] = { all: [], userRating: null };
            }
            ratings[recipe.id].all.push(parseInt(rating)); // Store all ratings
            ratings[recipe.id].userRating = parseInt(rating); // Store this user's specific rating
            localStorage.setItem('recipeRatings', JSON.stringify(ratings));
        }

        // Social Sharing
        const shareLinks = document.querySelector('#social-share');
        const pageUrl = window.location.href;
        const pageTitle = encodeURIComponent(recipe.title);
        shareLinks.querySelector('.bg-blue-600').href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        shareLinks.querySelector('.bg-blue-400').href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        shareLinks.querySelector('.bg-red-600').href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${encodeURIComponent(recipe.image)}&description=${pageTitle}`;

        // Initial load
        loadRating();
    } else {
        // Handle recipe not found
        loadingSpinner.style.display = 'none';
        contentWrapper.innerHTML = `
            <div class="text-center py-16">
                <i class="fas fa-exclamation-circle fa-3x text-red-500 mb-4"></i>
                <h1 class="text-4xl font-playfair text-gray-700">Recipe Not Found</h1>
                <p class="text-gray-500 mt-2">We couldn't find the recipe you're looking for.</p>
                <a href="/recipes" class="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">Back to All Recipes</a>
            </div>`;
        contentWrapper.classList.remove('opacity-0');
    }
});
