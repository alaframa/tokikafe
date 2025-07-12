// script.js

// Menu configuration in JSON format
const menuConfig = {
    "cafeName": "TOKI Coffee Shop",
    "menu": [
        {
            "category": "Coffee",
            "description": "Crafted with care, from bean to cup.",
            "items": [
                {
                    "name": "Espressooooooooo",
                    "description": "A concentrated shot of rich, dark coffee.",
                    "basePrice": 2.50,
                    "options": [
                        {"type": "size", "choices": [{"name": "Single", "priceAdjust": 0}, {"name": "Double", "priceAdjust": 0.75}]}
                    ]
                },
                {
                    "name": "Latte",
                    "description": "Smooth espresso with steamed milk and a thin layer of foam.",
                    "basePrice": 4.00,
                    "options": [
                        {"type": "size", "choices": [{"name": "Small", "priceAdjust": -0.50}, {"name": "Medium", "priceAdjust": 0}, {"name": "Large", "priceAdjust": 0.75}]},
                        {"type": "temperature", "choices": [{"name": "Hot", "priceAdjust": 0}, {"name": "Iced", "priceAdjust": 0}]}
                    ],
                    "addons": [
                        {"type": "flavor_syrup", "name": "Flavor Syrups", "choices": [{"name": "Vanilla", "price": 0.75}, {"name": "Caramel", "price": 0.75}, {"name": "Hazelnut", "price": 0.75}]},
                        {"type": "ice_level", "name": "Ice Level", "choices": [{"name": "Regular Ice", "price": 0}, {"name": "Less Ice", "price": 0}]}
                    ]
                },
                {
                    "name": "Cappuccino",
                    "description": "Equal parts espresso, steamed milk, and foamed milk.",
                    "basePrice": 3.75,
                    "options": [
                        {"type": "size", "choices": [{"name": "Small", "priceAdjust": -0.50}, {"name": "Medium", "priceAdjust": 0}, {"name": "Large", "priceAdjust": 0.75}]},
                        {"type": "temperature", "choices": [{"name": "Hot", "priceAdjust": 0}]}
                    ]
                },
                {
                    "name": "Americano",
                    "description": "Espresso diluted with hot water, similar in strength to drip coffee.",
                    "basePrice": 3.00,
                    "options": [
                        {"type": "size", "choices": [{"name": "Small", "priceAdjust": -0.50}, {"name": "Medium", "priceAdjust": 0}, {"name": "Large", "priceAdjust": 0.75}]},
                        {"type": "temperature", "choices": [{"name": "Hot", "priceAdjust": 0}, {"name": "Iced", "priceAdjust": 0}]}
                    ],
                    "addons": [
                        {"type": "ice_level", "name": "Ice Level", "choices": [{"name": "Regular Ice", "price": 0}, {"name": "Less Ice", "price": 0}]}
                    ]
                },
                {
                    "name": "Cold Brew",
                    "description": "Smooth, low-acid coffee steeped in cold water for hours.",
                    "basePrice": 4.50,
                    "options": [
                        {"type": "size", "choices": [{"name": "Medium", "priceAdjust": 0}, {"name": "Large", "priceAdjust": 1.00}]}
                    ],
                    "addons": [
                        {"type": "ice_level", "name": "Ice Level", "choices": [{"name": "Regular Ice", "price": 0}, {"name": "Less Ice", "price": 0}]},
                        {"type": "milk_type", "name": "Milk Type", "choices": [{"name": "Splash of Milk", "price": 0.50}, {"name": "Almond Milk", "price": 1.00}, {"name": "Oat Milk", "price": 1.00}]}
                    ]
                }
            ]
        },
        {
            "category": "Non-Coffee",
            "description": "Refreshing alternatives for every taste.",
            "items": [
                {
                    "name": "Hot Chocolate",
                    "description": "Rich cocoa blended with steamed milk, topped with whipped cream.",
                    "basePrice": 3.50,
                    "options": [
                        {"type": "size", "choices": [{"name": "Small", "priceAdjust": -0.50}, {"name": "Medium", "priceAdjust": 0}, {"name": "Large", "priceAdjust": 0.75}]}
                    ],
                    "addons": [
                        {"type": "extra_topping", "name": "Extra Toppings", "choices": [{"name": "Marshmallows", "price": 0.50}, {"name": "Chocolate Drizzle", "price": 0.50}]}
                    ]
                },
                {
                    "name": "Assorted Teas",
                    "description": "Selection of premium black, green, and herbal teas.",
                    "basePrice": 3.00,
                    "options": [
                        {"type": "tea_type", "choices": [{"name": "Black", "priceAdjust": 0}, {"name": "Green", "priceAdjust": 0}, {"name": "Chamomile", "priceAdjust": 0}, {"name": "Peppermint", "priceAdjust": 0}]},
                        {"type": "temperature", "choices": [{"name": "Hot", "priceAdjust": 0}, {"name": "Iced", "priceAdjust": 0}]}
                    ],
                    "addons": [
                        {"type": "sweetener", "name": "Sweetener", "choices": [{"name": "Honey", "price": 0.25}, {"name": "Sugar", "price": 0}]}
                    ]
                }
            ]
        },
        {
            "category": "Pastries",
            "description": "Perfectly baked delights to complement your drink.",
            "items": [
                {
                    "name": "Croissant",
                    "description": "Flaky, buttery pastry, baked fresh daily.",
                    "basePrice": 2.75,
                    "options": [
                        {"type": "type", "choices": [{"name": "Plain", "priceAdjust": 0}, {"name": "Chocolate", "priceAdjust": 0.50}]}
                    ]
                },
                {
                    "name": "Blueberry Muffin",
                    "description": "Classic muffin packed with juicy blueberries.",
                    "basePrice": 3.00,
                    "addons": [
                        {"type": "topping", "name": "Toppings", "choices": [{"name": "Butter", "price": 0.25}, {"name": "Jam", "price": 0.50}]}
                    ]
                },
                {
                    "name": "Vegan Banana Bread",
                    "description": "Moist and flavorful, a guilt-free treat.",
                    "basePrice": 3.50,
                    "addons": [] // No specific addons for this item
                }
            ]
        }
    ],
    "disclaimer": "Prices are subject to change. Customizations may incur additional charges."
};

// Function to display the menu dynamically
function displayMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) {
        console.error("Menu container not found!");
        return;
    }

    menuConfig.menu.forEach(category => {
        // Create category heading
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'mb-10'; // Spacing between categories

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'text-2xl md:text-3xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-300 pb-2';
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        if (category.description) {
            const categoryDesc = document.createElement('p');
            categoryDesc.className = 'text-gray-600 mb-6 italic';
            categoryDesc.textContent = category.description;
            categoryDiv.appendChild(categoryDesc);
        }

        // Create grid for menu items within the category
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'; // Responsive grid

        category.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden';

            const cardContent = document.createElement('div');
            cardContent.className = 'p-6';

            const itemName = document.createElement('h4');
            itemName.className = 'text-xl font-bold text-gray-900 mb-2';
            itemName.textContent = item.name;
            cardContent.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.className = 'text-gray-700 text-sm mb-4';
            itemDescription.textContent = item.description;
            cardContent.appendChild(itemDescription);

            const itemPrice = document.createElement('p');
            itemPrice.className = 'text-purple-700 font-extrabold text-lg mb-3';
            itemPrice.textContent = `Starts from $${item.basePrice.toFixed(2)}`;
            cardContent.appendChild(itemPrice);

            // Display Options
            if (item.options && item.options.length > 0) {
                const optionsList = document.createElement('div');
                optionsList.className = 'mt-3 text-sm text-gray-600';
                optionsList.innerHTML = '<p class="font-semibold mb-1">Options:</p>';
                item.options.forEach(optionType => {
                    const optionChoices = optionType.choices.map(choice => {
                        let priceText = '';
                        if (choice.priceAdjust > 0) {
                            priceText = ` (+$${choice.priceAdjust.toFixed(2)})`;
                        } else if (choice.priceAdjust < 0) {
                            priceText = ` (-$${Math.abs(choice.priceAdjust).toFixed(2)})`;
                        }
                        return `${choice.name}${priceText}`;
                    }).join(', ');
                    optionsList.innerHTML += `<p>${optionType.type.charAt(0).toUpperCase() + optionType.type.slice(1).replace(/_/g, ' ')}: ${optionChoices}</p>`;
                });
                cardContent.appendChild(optionsList);
            }

            // Display Addons
            if (item.addons && item.addons.length > 0) {
                const addonsList = document.createElement('div');
                addonsList.className = 'mt-3 text-sm text-gray-600';
                addonsList.innerHTML = '<p class="font-semibold mb-1">Add-ons:</p>';
                item.addons.forEach(addonType => {
                    const addonChoices = addonType.choices.map(choice => {
                        return `${choice.name} (+$${choice.price.toFixed(2)})`;
                    }).join(', ');
                    addonsList.innerHTML += `<p>${addonType.name || addonType.type.charAt(0).toUpperCase() + addonType.type.slice(1).replace(/_/g, ' ')}: ${addonChoices}</p>`;
                });
                cardContent.appendChild(addonsList);
            }

            itemCard.appendChild(cardContent);
            itemsGrid.appendChild(itemCard);
        });
        categoryDiv.appendChild(itemsGrid);
        menuContainer.appendChild(categoryDiv);
    });

    // Add disclaimer
    const disclaimerDiv = document.createElement('div');
    disclaimerDiv.className = 'text-center text-gray-500 text-sm mt-12 mb-4';
    disclaimerDiv.textContent = menuConfig.disclaimer;
    menuContainer.appendChild(disclaimerDiv);
}

// Call the function to display the menu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayMenu);
