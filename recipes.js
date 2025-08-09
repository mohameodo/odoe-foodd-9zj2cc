document.addEventListener('DOMContentLoaded', () => {
    const recipesGrid = document.getElementById('recipes-grid');
    const searchInput = document.getElementById('search-input');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const dietFilter = document.getElementById('diet-filter');
    const noResultsDiv = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');

    let currentRecipes = [...allRecipes];

    // Populate filter dropdowns
    function populateFilters() {
        const cuisines = [...new Set(allRecipes.map(r => r.cuisine))];
        cuisines.sort().forEach(c => {
            cuisineFilter.innerHTML += `<option value="${c}">${c}</option>`;
        });

        const diets = [...new Set(allRecipes.flatMap(r => r.dietaryTags))];
        const uniqueDiets = [...new Set(diets)];
        uniqueDiets.sort().forEach(d => {
            dietFilter.innerHTML += `<option value="${d}">${d}</option>`;
        });
    }

    // Render recipes to the grid
    function renderRecipes(recipes) {
        recipesGrid.innerHTML = '';
        if (recipes.length === 0) {
            noResultsDiv.classList.remove('hidden');
            recipesGrid.classList.add('hidden');
            resultsCount.textContent = '0 recipes found.';
        } else {
            noResultsDiv.classList.add('hidden');
            recipesGrid.classList.remove('hidden');
            resultsCount.textContent = `${recipes.length} recipe${recipes.length > 1 ? 's' : ''} found.`;
            recipes.forEach(recipe => {
                recipesGrid.innerHTML += createRecipeCard(recipe);
            });
        }
    }

    // Filter and search logic
    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCuisine = cuisineFilter.value;
        const selectedDiet = dietFilter.value;

        let filteredRecipes = [...allRecipes];

        // Filter by cuisine
        if (selectedCuisine !== 'all') {
            filteredRecipes = filteredRecipes.filter(r => r.cuisine === selectedCuisine);
        }

        // Filter by diet
        if (selectedDiet !== 'all') {
            filteredRecipes = filteredRecipes.filter(r => r.dietaryTags.includes(selectedDiet));
        }

        // Filter by search term
        if (searchTerm) {
            filteredRecipes = filteredRecipes.filter(r => 
                r.title.toLowerCase().includes(searchTerm) ||
                r.description.toLowerCase().includes(searchTerm) ||
                r.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
            );
        }
        
        currentRecipes = filteredRecipes;
        renderRecipes(currentRecipes);
    }

    // Check for URL parameters and apply filters
    function applyUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const cuisine = params.get('cuisine');
        const diet = params.get('diet');

        if (cuisine) {
            cuisineFilter.value = cuisine;
        }
        if (diet) {
            dietFilter.value = diet;
        }

        filterAndSearch();
    }

    // Event Listeners
    searchInput.addEventListener('input', filterAndSearch);
    cuisineFilter.addEventListener('change', filterAndSearch);
    dietFilter.addEventListener('change', filterAndSearch);

    // Initial setup
    populateFilters();
    applyUrlParams();
});
