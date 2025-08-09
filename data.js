const allRecipes = [
    {
        id: 1,
        title: "Classic Tomato Bruschetta",
        description: "A timeless Italian appetizer featuring fresh tomatoes, garlic, basil, and a drizzle of balsamic glaze on toasted bread.",
        image: "https://images.unsplash.com/photo-1579631542720-3a8782417447?q=80&w=1945&auto=format&fit=crop",
        cuisine: "Italian",
        dietaryTags: ["Vegetarian", "Quick"],
        prepTime: "15 mins",
        cookTime: "5 mins",
        servings: "4-6 people",
        rating: 4.8,
        ingredients: [
            "1 baguette, sliced 1/2-inch thick",
            "4 ripe plum tomatoes, diced",
            "1/2 cup fresh basil, chopped",
            "2 cloves garlic, minced",
            "1/4 cup extra-virgin olive oil",
            "2 tbsp balsamic glaze",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C). Arrange baguette slices on a baking sheet and toast for 5-7 minutes, or until golden and crisp.",
            "In a medium bowl, combine diced tomatoes, chopped basil, and minced garlic.",
            "Drizzle with olive oil and gently toss to combine. Season with salt and pepper to your liking.",
            "Once the bread is toasted, top each slice with a generous spoonful of the tomato mixture.",
            "Arrange the bruschetta on a platter and drizzle with balsamic glaze just before serving."
        ]
    },
    {
        id: 2,
        title: "Creamy Vegan Avocado Pasta",
        description: "A rich and creamy pasta sauce made from avocados, basil, garlic, and lemon juice. A healthy and satisfying vegan meal.",
        image: "https://images.unsplash.com/photo-1611270418597-a6c77f7247e5?q=80&w=1974&auto=format&fit=crop",
        cuisine: "Italian",
        dietaryTags: ["Vegan", "Vegetarian", "Quick"],
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: "4 people",
        rating: 4.9,
        ingredients: [
            "1 lb (450g) spaghetti or your favorite pasta",
            "2 ripe avocados, pitted and peeled",
            "1/2 cup fresh basil leaves",
            "2 cloves garlic",
            "2 tbsp lemon juice",
            "1/3 cup olive oil",
            "Salt and black pepper to taste",
            "1/2 cup cherry tomatoes, halved (for garnish)"
        ],
        instructions: [
            "Cook pasta according to package directions. Reserve about 1/2 cup of pasta water before draining.",
            "While the pasta is cooking, combine avocados, basil, garlic, and lemon juice in a food processor or blender.",
            "With the blender running, slowly stream in the olive oil until the sauce is smooth and creamy. Season with salt and pepper.",
            "Drain the cooked pasta and return it to the pot. Add the avocado sauce and toss to coat, adding a tablespoon or two of the reserved pasta water if the sauce is too thick.",
            "Serve immediately, garnished with cherry tomatoes and extra black pepper."
        ]
    },
    {
        id: 3,
        title: "Spicy Shrimp Tacos with Cabbage Slaw",
        description: "Flavorful, spicy shrimp tacos topped with a crisp, refreshing cabbage slaw and a creamy cilantro-lime sauce.",
        image: "https://images.unsplash.com/photo-1567529854338-fc097b9621b7?q=80&w=1974&auto=format&fit=crop",
        cuisine: "Mexican",
        dietaryTags: ["Quick"],
        prepTime: "20 mins",
        cookTime: "10 mins",
        servings: "3-4 people",
        rating: 4.7,
        ingredients: [
            "1 lb large shrimp, peeled and deveined",
            "1 tbsp chili powder",
            "1 tsp cumin",
            "1/2 tsp smoked paprika",
            "2 tbsp olive oil",
            "8-10 small corn or flour tortillas",
            "For the slaw: 2 cups shredded cabbage, 1/4 cup chopped cilantro, 2 tbsp lime juice",
            "For the sauce: 1/2 cup Greek yogurt or sour cream, 1/4 cup cilantro, 1 tbsp lime juice, 1 clove garlic"
        ],
        instructions: [
            "In a bowl, toss the shrimp with chili powder, cumin, paprika, salt, and pepper.",
            "Heat olive oil in a large skillet over medium-high heat. Add shrimp and cook for 2-3 minutes per side, until pink and cooked through.",
            "While shrimp cooks, prepare the slaw by tossing shredded cabbage, cilantro, and lime juice in a bowl. Prepare the sauce by blending all sauce ingredients until smooth.",
            "Warm the tortillas in a dry skillet or microwave.",
            "Assemble the tacos: place a few shrimp in each tortilla, top with cabbage slaw, and drizzle with the cilantro-lime sauce."
        ]
    },
    {
        id: 4,
        title: "Gluten-Free Chicken Teriyaki Stir-Fry",
        description: "A quick and easy gluten-free stir-fry packed with tender chicken and colorful vegetables in a homemade teriyaki sauce.",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983d34?q=80&w=2070&auto=format&fit=crop",
        cuisine: "Asian",
        dietaryTags: ["Gluten-Free", "Quick"],
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: "4 people",
        rating: 4.6,
        ingredients: [
            "1 lb boneless, skinless chicken breast, cut into bite-sized pieces",
            "1 head of broccoli, cut into florets",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "For the sauce: 1/2 cup gluten-free tamari or soy sauce, 1/4 cup water, 2 tbsp honey or maple syrup, 1 tbsp rice vinegar, 2 cloves garlic (minced), 1 tsp grated ginger",
            "2 tbsp sesame oil",
            "Cooked rice or quinoa for serving"
        ],
        instructions: [
            "In a small bowl, whisk together all the sauce ingredients.",
            "Heat sesame oil in a large wok or skillet over medium-high heat. Add the chicken and cook until browned and cooked through. Remove from skillet.",
            "Add the broccoli, bell pepper, and carrot to the skillet. Stir-fry for 5-7 minutes, until crisp-tender.",
            "Return the chicken to the skillet. Pour the teriyaki sauce over everything and bring to a simmer. Cook for 2-3 minutes, until the sauce has thickened slightly and coats the chicken and vegetables.",
            "Serve immediately over hot rice or quinoa."
        ]
    },
    {
        id: 5,
        title: "Hearty Lentil Soup",
        description: "A comforting and nutritious vegan lentil soup, loaded with vegetables and savory herbs. Perfect for a chilly day.",
        image: "https://images.unsplash.com/photo-1598214886392-aa34a2d485f7?q=80&w=1974&auto=format&fit=crop",
        cuisine: "American",
        dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"],
        prepTime: "10 mins",
        cookTime: "40 mins",
        servings: "6 people",
        rating: 4.9,
        ingredients: [
            "2 tbsp olive oil",
            "1 large onion, chopped",
            "2 carrots, chopped",
            "2 celery stalks, chopped",
            "3 cloves garlic, minced",
            "1 cup brown or green lentils, rinsed",
            "8 cups vegetable broth",
            "1 (14.5 oz) can diced tomatoes, undrained",
            "1 tsp dried thyme",
            "1 bay leaf",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat olive oil in a large pot or Dutch oven over medium heat. Add onion, carrots, and celery and cook until softened, about 5-7 minutes.",
            "Stir in the garlic and cook for another minute until fragrant.",
            "Add the rinsed lentils, vegetable broth, diced tomatoes, thyme, and bay leaf. Stir to combine.",
            "Bring the soup to a boil, then reduce heat and let it simmer, partially covered, for 30-40 minutes, or until the lentils are tender.",
            "Remove the bay leaf before serving. Season with salt and pepper to taste. Serve hot."
        ]
    },
    {
        id: 6,
        title: "Classic Beef Lasagna",
        description: "A rich and cheesy beef lasagna with layers of pasta, hearty meat sauce, and creamy béchamel. A true comfort food classic.",
        image: "https://images.unsplash.com/photo-1619895092473-b5a29161a35f?q=80&w=1974&auto=format&fit=crop",
        cuisine: "Italian",
        dietaryTags: [],
        prepTime: "30 mins",
        cookTime: "1 hour",
        servings: "8 people",
        rating: 5.0,
        ingredients: [
            "1 lb ground beef",
            "1 large onion, chopped",
            "3 cloves garlic, minced",
            "1 (28 oz) can crushed tomatoes",
            "2 (6 oz) cans tomato paste",
            "1/2 cup red wine (optional)",
            "2 tsp dried oregano",
            "12 lasagna noodles, cooked",
            "15 oz ricotta cheese",
            "1 egg, beaten",
            "1/2 cup grated Parmesan cheese",
            "2 cups shredded mozzarella cheese"
        ],
        instructions: [
            "In a large skillet, cook ground beef and onion until meat is browned. Drain fat. Stir in garlic, crushed tomatoes, tomato paste, wine, and oregano. Simmer for 20 minutes.",
            "In a bowl, mix ricotta cheese, egg, and half of the Parmesan cheese.",
            "Preheat oven to 375°F (190°C). Spread a thin layer of meat sauce in a 9x13 inch baking dish.",
            "Layer with 4 lasagna noodles, followed by half of the ricotta mixture, and a third of the mozzarella. Repeat the layers. Top with remaining noodles, meat sauce, mozzarella, and Parmesan.",
            "Bake for 35-45 minutes, or until bubbly and golden brown. Let it rest for 10 minutes before cutting."
        ]
    }
];