document.addEventListener('DOMContentLoaded', function() {
    // --- General Site-wide Scripts ---

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
            }
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        const emailInput = document.getElementById('newsletter-email');
        const feedbackEl = document.getElementById('newsletter-feedback');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            feedbackEl.textContent = `Thank you! ${emailInput.value} has been subscribed.`;
            feedbackEl.classList.add('text-white');
            emailInput.value = '';
            setTimeout(() => {
                feedbackEl.textContent = '';
            }, 5000);
        });
    }

    // --- Homepage Specific Scripts ---
    if (document.getElementById('featured-recipes-grid')) {
        const featuredGrid = document.getElementById('featured-recipes-grid');
        // Get 3 random recipes to feature
        const featuredRecipes = allRecipes.sort(() => 0.5 - Math.random()).slice(0, 3);
        featuredRecipes.forEach(recipe => {
            featuredGrid.innerHTML += createRecipeCard(recipe);
        });
    }
});

// --- Reusable Functions ---

// Function to create a recipe card HTML string
function createRecipeCard(recipe) {
    // Get average rating
    const ratings = JSON.parse(localStorage.getItem('recipeRatings')) || {};
    const recipeRatings = ratings[recipe.id] || [];
    const avgRating = recipeRatings.length > 0 
        ? (recipeRatings.reduce((a, b) => a + b, 0) / recipeRatings.length).toFixed(1)
        : recipe.rating.toFixed(1);

    const ratingStars = generateStars(avgRating);

    return `
        <div class="recipe-card animate-fade-in-up">
            <a href="/recipe-detail?id=${recipe.id}" class="block">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-image">
                <div class="recipe-card-content">
                    <div class="flex justify-between items-start">
                         <h3 class="recipe-card-title">${recipe.title}</h3>
                         <span class="recipe-card-tag">${recipe.cuisine}</span>
                    </div>
                    <p class="recipe-card-description">${recipe.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center text-sm text-gray-500">
                            <i class="far fa-clock mr-2 text-orange-500"></i>
                            ${recipe.prepTime} + ${recipe.cookTime}
                        </div>
                        <div class="flex items-center">
                            <span class="text-yellow-500 mr-1">${ratingStars}</span>
                            <span class="text-sm text-gray-600 font-bold">${avgRating}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Function to generate star icons based on rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1 && i - rating > 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}
