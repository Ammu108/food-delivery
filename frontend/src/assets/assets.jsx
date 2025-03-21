import AtomLogo from "./atom-kitchen.png"
import heroImage from "./hero-img.jpg"
import About from "./about.png"
import Share from "./share.png"
import basket from "./package.png"
import Contact from "./contact.png"
import pizza from "./img_1(pizza).jpg"
import Pizza from "./menuImages/img_1(pizza).jpg"
import Pancakes from "./menuImages/img_2(pancakes).jpg"
import Paneer from './menuImages/img_12(paneer).jpg'
import Cakes from './menuImages/img_3(cake).jpg'
import Salmon from './menuImages/img_4(salmon).jpg'
import Burger from './menuImages/img_5(burger).jpg'
import Chicken_Biryani from './menuImages/img_6(chicken_biryani).jpg'
import Fish from './menuImages/img_7(fish).jpg'
import Pasta from './menuImages/img_8(pasta).jpg'
import Noodles from './menuImages/img_9(noodles).jpg'
import Rolls from './menuImages/img_10(rolls).jpg'
import Sandwich from './menuImages/img_11(sandwich).jpg'
import French_Fries from './menuImages/img_13(french_fries).jpg'
import Momos from './menuImages/img_14(momos).png'
import Mutton from './menuImages/img_15(mutton).jpg'

export const images = {
    AtomLogo,
    heroImage,
    About,
    Share,
    Contact,
    pizza,
    basket,
}

export const foodMenu = [
    {
        id: 1,
        name: 'Pizza',
        imageUrl: Pizza,
    },
    {
        id: 2,
        name: 'PanCakes',
        imageUrl: Pancakes,
    },
    {
        id: 3,
        name: 'Cake',
        imageUrl: Cakes,
    },
    {
        id: 4,
        name: 'Salmon',
        imageUrl: Salmon,
    },
    {
        id: 5,
        name: 'Burger',
        imageUrl: Burger,
    },
    {
        id: 6,
        name: 'Chicken Biryani',
        imageUrl: Chicken_Biryani,
    },
    {
        id: 7,
        name: 'Fish',
        imageUrl: Fish,
    },
    {
        id: 8,
        name: 'Pasta',
        imageUrl: Pasta,
    },
    {
        id: 9,
        name: 'Noodles',
        imageUrl: Noodles,
    },
    {
        id: 10,
        name: 'Rolls',
        imageUrl: Rolls,
    },
    {
        id: 11,
        name: 'Sandwich',
        imageUrl: Sandwich,
    },
    {
        id: 12,
        name: 'Paneer',
        imageUrl: Paneer,
    },
    {
        id: 13,
        name: 'French Fries',
        imageUrl: French_Fries,
    },
    {
        id: 14,
        name: 'Momos',
        imageUrl: Momos,
    },
    {
        id: 15,
        name: 'Mutton',
        imageUrl: Mutton,
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Tandoori Rolls",
        price: 40,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Rolls",
        imageUrl: "/homeCartImages/tandoori_Rolls.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 20 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Paneer", price: 15 },
                { option: "Veg", price: 10 }
            ],
            sauces: [
                { option: "Mint Chutney", price: 5 },
                { option: "Tomato Ketchup", price: 5 },
                { option: "Spicy Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "2",
        name: "Burger",
        price: 60,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Burger",
        imageUrl: "/homeCartImages/burger1.jpg",
        customizations: {
            patties: [
                { option: "Egg", price: 15 },
                { option: "Chicken", price: 25 },
                { option: "Veg", price: 10 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Bacon", price: 20 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 }
            ],
            sauces: [
                { option: "Ketchup", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "3",
        name: "Chicken Biryani",
        price: 150,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Chicken Biryani",
        imageUrl: "/homeCartImages/chickenBiryani.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            addOns: [
                { option: "Egg", price: 20 },
                { option: "Extra Chicken", price: 40 },
                { option: "Paneer", price: 25 }
            ],
            sides: [
                { option: "Raita", price: 15 },
                { option: "Salad", price: 10 },
                { option: "Pickle", price: 5 }
            ]
        }
    },
    {
        _id: "4",
        name: "Chocolate Cake",
        price: 500,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Cake",
        imageUrl: "/homeCartImages/cake1.jpg",
        customizations: {
            size: [
                { option: "250 g", price: 0 },
                { option: "500 g", price: 100 },
                { option: "1 kg", price: 180 }
            ],
            flavors: [
                { option: "Chocolate", price: 0 },
                { option: "Vanilla", price: 0 },
                { option: "Red Velvet", price: 20 },
                { option: "Strawberry", price: 20 }
            ],
            toppings: [
                { option: "Chocolate Frosting", price: 0 },
                { option: "Cream Cheese Frosting", price: 10 },
                { option: "Sprinkles", price: 5 },
                { option: "Fruit Toppings", price: 15 }
            ]
        }
    },
    {
        _id: "5",
        name: "French Fries",
        price: 70,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "French Fries",
        imageUrl: "/homeCartImages/frenchFries1.jpg",
        customizations: {
            size: [
                { option: "Small", price: 0 },
                { option: "Medium", price: 15 },
                { option: "Large", price: 25 }
            ],
            styles: [
                { option: "Classic", price: 0 },
                { option: "Cheese Burst", price: 20 },
                { option: "Garlic Parmesan", price: 15 },
                { option: "Spicy", price: 10 }
            ],
            dips: [
                { option: "Ketchup", price: 5 },
                { option: "Mayonnaise", price: 5 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Honey Mustard", price: 10 }
            ]
        }
    },
    {
        _id: "6",
        name: "Momos",
        price: 80,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Momos",
        imageUrl: "/homeCartImages/momos1.jpg",
        customizations: {
            type: [
                { option: "Steamed", price: 0 },
                { option: "Fried", price: 10 },
                { option: "Grilled", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Vegetable", price: 15 },
                { option: "Paneer", price: 18 }
            ],
            sauces: [
                { option: "Spicy Chili Sauce", price: 10 },
                { option: "Tomato Chutney", price: 5 },
                { option: "Soy Sauce", price: 5 }
            ]
        }
    },
    {
        _id: "7",
        name: "Mutton Biryani",
        price: 850,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Mutton",
        imageUrl: "/homeCartImages/mutton2.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            cookingStyle: [
                { option: "Grilled", price: 50 },
                { option: "Masala", price: 30 },
                { option: "Tandoori", price: 40 },
                { option: "Curry", price: 35 }
            ],
            addOns: [
                { option: "Extra Mutton", price: 100 },
                { option: "Paneer", price: 75 },
                { option: "Vegetables", price: 50 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "8",
        name: "PanCake",
        price: 450,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "PanCakes",
        imageUrl: "/homeCartImages/pancake1.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 50 }
            ],
            flavors: [
                { option: "Plain", price: 0 },
                { option: "Chocolate Chip", price: 20 },
                { option: "Blueberry", price: 20 },
                { option: "Banana", price: 15 }
            ],
            toppings: [
                { option: "Maple Syrup", price: 10 },
                { option: "Honey", price: 10 },
                { option: "Whipped Cream", price: 15 },
                { option: "Fruit Compote", price: 20 }
            ]
        }
    },
    {
        _id: "9",
        name: "Sahi Paneer",
        price: 350,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Paneer",
        imageUrl: "/homeCartImages/paneer1.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            preparation: [
                { option: "Grilled", price: 20 },
                { option: "Fried", price: 15 },
                { option: "Tikka", price: 25 }
            ],
            addOns: [
                { option: "Extra Paneer", price: 50 },
                { option: "Vegetables", price: 30 },
                { option: "Sauces", price: 20 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "10",
        name: "Paneer Pizza",
        price: 300,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Pizza",
        imageUrl: "/homeCartImages/pizza1.jpg",
        customizations: {
            size: [
                { option: "Personal (6-inch)", price: 0 },
                { option: "Medium (9-inch)", price: 50 },
                { option: "Large (12-inch)", price: 100 }
            ],
            crust: [
                { option: "Thin Crust", price: 0 },
                { option: "Thick Crust", price: 20 },
                { option: "Cheese Burst", price: 30 },
                { option: "Gluten-Free", price: 25 }
            ],
            toppings: [
                { option: "Extra Cheese", price: 20 },
                { option: "Pepperoni", price: 30 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 },
                { option: "Bell Peppers", price: 15 },
                { option: "Onions", price: 10 }
            ],
            sauces: [
                { option: "Tomato Sauce", price: 0 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Pesto Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "11",
        name: "Cheese Pasta",
        price: 150,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Pasta",
        imageUrl: "/homeCartImages/pasta1.jpg",
        customizations: {
            type: [
                { option: "Spaghetti", price: 0 },
                { option: "Fettuccine", price: 10 },
                { option: "Penne", price: 0 },
                { option: "Lasagna", price: 15 }
            ],
            sauces: [
                { option: "Alfredo", price: 20 },
                { option: "Marinara", price: 15 },
                { option: "Pesto", price: 20 },
                { option: "Arrabiata", price: 15 }
            ],
            addOns: [
                { option: "Extra Cheese", price: 10 },
                { option: "Chicken", price: 25 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "12",
        name: "Salmon",
        price: 750,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Salmon",
        imageUrl: "/homeCartImages/salmon1.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Baked", price: 0 },
                { option: "Fried", price: 20 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Teriyaki", price: 10 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 }
            ],
            addOns: [
                { option: "Extra Salmon", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "13",
        name: "Sandwich",
        price: 50,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Sandwich",
        imageUrl: "/homeCartImages/sandwich1.jpg",
        customizations: {
            bread: [
                { option: "White", price: 0 },
                { option: "Whole Wheat", price: 0 },
                { option: "Multigrain", price: 10 },
                { option: "Gluten-Free", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Beef", price: 25 },
                { option: "Veggie", price: 15 },
                { option: "Paneer", price: 20 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 },
                { option: "Onions", price: 5 },
                { option: "Pickles", price: 5 }
            ],
            sauces: [
                { option: "Mayonnaise", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Honey Mustard", price: 10 },
                { option: "Chipotle Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "14",
        name: "Noodles",
        price: 100,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Noodles",
        imageUrl: "/homeCartImages/noodles1.jpg",
        customizations: {
            type: [
                { option: "Egg Noodles", price: 0 },
                { option: "Rice Noodles", price: 0 },
                { option: "Udon", price: 10 },
                { option: "Soba", price: 15 }
            ],
            sauces: [
                { option: "Soy Sauce", price: 5 },
                { option: "Teriyaki Sauce", price: 10 },
                { option: "Spicy Chili Sauce", price: 15 },
                { option: "Peanut Sauce", price: 15 }
            ],
            addOns: [
                { option: "Vegetables", price: 20 },
                { option: "Chicken", price: 25 },
                { option: "Beef", price: 30 },
                { option: "Shrimp", price: 35 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "15",
        name: "Grilled Fish",
        price: 350,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Fish",
        imageUrl: "/homeCartImages/fish1.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Fried", price: 20 },
                { option: "Baked", price: 10 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 },
                { option: "Teriyaki", price: 10 }
            ],
            addOns: [
                { option: "Extra Fish", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "16",
        name: "Veg Burger",
        price: 45,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Burger",
        imageUrl: "/homeCartImages/burger2.jpg",
        customizations: {
            patties: [
                { option: "Egg", price: 15 },
                { option: "Chicken", price: 25 },
                { option: "Veg", price: 10 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Bacon", price: 20 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 }
            ],
            sauces: [
                { option: "Ketchup", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "17",
        name: "Biscuits Cake",
        price: 550,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Cake",
        imageUrl: "/homeCartImages/cake2.jpg",
        customizations: {
            size: [
                { option: "250 g", price: 0 },
                { option: "500 g", price: 100 },
                { option: "1 kg", price: 180 }
            ],
            flavors: [
                { option: "Chocolate", price: 0 },
                { option: "Vanilla", price: 0 },
                { option: "Red Velvet", price: 20 },
                { option: "Strawberry", price: 20 }
            ],
            toppings: [
                { option: "Chocolate Frosting", price: 0 },
                { option: "Cream Cheese Frosting", price: 10 },
                { option: "Sprinkles", price: 5 },
                { option: "Fruit Toppings", price: 15 }
            ]
        }
    },
    {
        _id: "18",
        name: "Chicken Rolls",
        price: 90,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Rolls",
        imageUrl: "/homeCartImages/chicken_rolls.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 20 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Paneer", price: 15 },
                { option: "Veg", price: 10 }
            ],
            sauces: [
                { option: "Mint Chutney", price: 5 },
                { option: "Tomato Ketchup", price: 5 },
                { option: "Spicy Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "19",
        name: "Fried Fish",
        price: 130,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "Fish",
        imageUrl: "/homeCartImages/fish2.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Fried", price: 20 },
                { option: "Baked", price: 10 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 },
                { option: "Teriyaki", price: 10 }
            ],
            addOns: [
                { option: "Extra Fish", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "20",
        name: "French Fries",
        price: 75,
        desc: "Food provides essential nutrients for overall health and well being",
        category: "French Fries",
        imageUrl: "/homeCartImages/frenchFries2.jpg",
        customizations: {
            size: [
                { option: "Small", price: 0 },
                { option: "Medium", price: 15 },
                { option: "Large", price: 25 }
            ],
            styles: [
                { option: "Classic", price: 0 },
                { option: "Cheese Burst", price: 20 },
                { option: "Garlic Parmesan", price: 15 },
                { option: "Spicy", price: 10 }
            ],
            dips: [
                { option: "Ketchup", price: 5 },
                { option: "Mayonnaise", price: 5 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Honey Mustard", price: 10 }
            ]
        }
    },
    {
        _id: "21",
        name: "Grilled Momos",
        price: 90,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Momos",
        imageUrl: "/homeCartImages/momos2.jpg",
        customizations: {
            type: [
                { option: "Steamed", price: 0 },
                { option: "Fried", price: 10 },
                { option: "Grilled", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Vegetable", price: 15 },
                { option: "Paneer", price: 18 }
            ],
            sauces: [
                { option: "Spicy Chili Sauce", price: 10 },
                { option: "Tomato Chutney", price: 5 },
                { option: "Soy Sauce", price: 5 }
            ]
        }
    },
    {
        _id: "22",
        name: "Mutton Masala",
        price: 650,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Mutton",
        imageUrl: "/homeCartImages/mutton1.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            cookingStyle: [
                { option: "Grilled", price: 50 },
                { option: "Masala", price: 30 },
                { option: "Tandoori", price: 40 },
                { option: "Curry", price: 35 }
            ],
            addOns: [
                { option: "Extra Mutton", price: 100 },
                { option: "Paneer", price: 75 },
                { option: "Vegetables", price: 50 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "23",
        name: "PanCake",
        price: 400,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "PanCakes",
        imageUrl: "/homeCartImages/pancake2.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 50 }
            ],
            flavors: [
                { option: "Plain", price: 0 },
                { option: "Chocolate Chip", price: 20 },
                { option: "Blueberry", price: 20 },
                { option: "Banana", price: 15 }
            ],
            toppings: [
                { option: "Maple Syrup", price: 10 },
                { option: "Honey", price: 10 },
                { option: "Whipped Cream", price: 15 },
                { option: "Fruit Compote", price: 20 }
            ]
        }
    },
    {
        _id: "24",
        name: "Chilli Paneer",
        price: 250,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Paneer",
        imageUrl: "/homeCartImages/paneer2.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            preparation: [
                { option: "Grilled", price: 20 },
                { option: "Fried", price: 15 },
                { option: "Tikka", price: 25 }
            ],
            addOns: [
                { option: "Extra Paneer", price: 50 },
                { option: "Vegetables", price: 30 },
                { option: "Sauces", price: 20 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "25",
        name: "Corn Pizza",
        price: 210,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Pizza",
        imageUrl: "/homeCartImages/pizza2.jpg",
        customizations: {
            size: [
                { option: "Personal (6-inch)", price: 0 },
                { option: "Medium (9-inch)", price: 50 },
                { option: "Large (12-inch)", price: 100 }
            ],
            crust: [
                { option: "Thin Crust", price: 0 },
                { option: "Thick Crust", price: 20 },
                { option: "Cheese Burst", price: 30 },
                { option: "Gluten-Free", price: 25 }
            ],
            toppings: [
                { option: "Extra Cheese", price: 20 },
                { option: "Pepperoni", price: 30 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 },
                { option: "Bell Peppers", price: 15 },
                { option: "Onions", price: 10 }
            ],
            sauces: [
                { option: "Tomato Sauce", price: 0 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Pesto Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "26",
        name: "Peri Peri Pasta",
        price: 240,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Pasta",
        imageUrl: "/homeCartImages/pasta2.jpg",
        customizations: {
            type: [
                { option: "Spaghetti", price: 0 },
                { option: "Fettuccine", price: 10 },
                { option: "Penne", price: 0 },
                { option: "Lasagna", price: 15 }
            ],
            sauces: [
                { option: "Alfredo", price: 20 },
                { option: "Marinara", price: 15 },
                { option: "Pesto", price: 20 },
                { option: "Arrabiata", price: 15 }
            ],
            addOns: [
                { option: "Extra Cheese", price: 10 },
                { option: "Chicken", price: 25 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "27",
        name: "Salmon",
        price: 850,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Salmon",
        imageUrl: "/homeCartImages/salmon2.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Baked", price: 0 },
                { option: "Fried", price: 20 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Teriyaki", price: 10 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 }
            ],
            addOns: [
                { option: "Extra Salmon", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "28",
        name: "Omelette SandWich",
        price: 60,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Sandwich",
        imageUrl: "/homeCartImages/sandwich2.jpg",
        customizations: {
            bread: [
                { option: "White", price: 0 },
                { option: "Whole Wheat", price: 0 },
                { option: "Multigrain", price: 10 },
                { option: "Gluten-Free", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Beef", price: 25 },
                { option: "Veggie", price: 15 },
                { option: "Paneer", price: 20 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 },
                { option: "Onions", price: 5 },
                { option: "Pickles", price: 5 }
            ],
            sauces: [
                { option: "Mayonnaise", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Honey Mustard", price: 10 },
                { option: "Chipotle Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "29",
        name: "Simple Noodles",
        price: 90,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Noodles",
        imageUrl: "/homeCartImages/noodles2.jpg",
        customizations: {
            type: [
                { option: "Egg Noodles", price: 0 },
                { option: "Rice Noodles", price: 0 },
                { option: "Udon", price: 10 },
                { option: "Soba", price: 15 }
            ],
            sauces: [
                { option: "Soy Sauce", price: 5 },
                { option: "Teriyaki Sauce", price: 10 },
                { option: "Spicy Chili Sauce", price: 15 },
                { option: "Peanut Sauce", price: 15 }
            ],
            addOns: [
                { option: "Vegetables", price: 20 },
                { option: "Chicken", price: 25 },
                { option: "Beef", price: 30 },
                { option: "Shrimp", price: 35 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "30",
        name: "Paneer Rolls",
        price: 80,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Rolls",
        imageUrl: "/homeCartImages/paneer _rolls.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 20 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Paneer", price: 15 },
                { option: "Veg", price: 10 }
            ],
            sauces: [
                { option: "Mint Chutney", price: 5 },
                { option: "Tomato Ketchup", price: 5 },
                { option: "Spicy Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "31",
        name: "Spring Rolls",
        price: 30,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Rolls",
        imageUrl: "/homeCartImages/spring_Rolls.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 20 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Paneer", price: 15 },
                { option: "Veg", price: 10 }
            ],
            sauces: [
                { option: "Mint Chutney", price: 5 },
                { option: "Tomato Ketchup", price: 5 },
                { option: "Spicy Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "32",
        name: "Chicken Burger",
        price: 130,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Burger",
        imageUrl: "/homeCartImages/burger3.jpg",
        customizations: {
            patties: [
                { option: "Egg", price: 15 },
                { option: "Chicken", price: 25 },
                { option: "Veg", price: 10 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Bacon", price: 20 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 }
            ],
            sauces: [
                { option: "Ketchup", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "33",
        name: "Hyderabadi Chicken Biryani",
        price: 250,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Chicken Biryani",
        imageUrl: "/homeCartImages/chickenBiryani2.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            addOns: [
                { option: "Egg", price: 20 },
                { option: "Extra Chicken", price: 40 },
                { option: "Paneer", price: 25 }
            ],
            sides: [
                { option: "Raita", price: 15 },
                { option: "Salad", price: 10 },
                { option: "Pickle", price: 5 }
            ]
        }
    },
    {
        _id: "34",
        name: "Dixi Crystals Cake",
        price: 550,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Cake",
        imageUrl: "/homeCartImages/cake3.jpg",
        customizations: {
            size: [
                { option: "250 g", price: 0 },
                { option: "500 g", price: 100 },
                { option: "1 kg", price: 180 }
            ],
            flavors: [
                { option: "Chocolate", price: 0 },
                { option: "Vanilla", price: 0 },
                { option: "Red Velvet", price: 20 },
                { option: "Strawberry", price: 20 }
            ],
            toppings: [
                { option: "Chocolate Frosting", price: 0 },
                { option: "Cream Cheese Frosting", price: 10 },
                { option: "Sprinkles", price: 5 },
                { option: "Fruit Toppings", price: 15 }
            ]
        }
    },
    {
        _id: "35",
        name: "Crispy French Fries",
        price: 75,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "French Fries",
        imageUrl: "/homeCartImages/frenchFries4.jpg",
        customizations: {
            size: [
                { option: "Small", price: 0 },
                { option: "Medium", price: 15 },
                { option: "Large", price: 25 }
            ],
            styles: [
                { option: "Classic", price: 0 },
                { option: "Cheese Burst", price: 20 },
                { option: "Garlic Parmesan", price: 15 },
                { option: "Spicy", price: 10 }
            ],
            dips: [
                { option: "Ketchup", price: 5 },
                { option: "Mayonnaise", price: 5 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Honey Mustard", price: 10 }
            ]
        }
    },
    {
        _id: "36",
        name: "chilli Soup Momos",
        price: 100,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Momos",
        imageUrl: "/homeCartImages/momos3.jpg",
        customizations: {
            type: [
                { option: "Steamed", price: 0 },
                { option: "Fried", price: 10 },
                { option: "Grilled", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Vegetable", price: 15 },
                { option: "Paneer", price: 18 }
            ],
            sauces: [
                { option: "Spicy Chili Sauce", price: 10 },
                { option: "Tomato Chutney", price: 5 },
                { option: "Soy Sauce", price: 5 }
            ]
        }
    },
    {
        _id: "37",
        name: "Fried Mutton",
        price: 500,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Mutton",
        imageUrl: "/homeCartImages/mutton3.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            cookingStyle: [
                { option: "Grilled", price: 50 },
                { option: "Masala", price: 30 },
                { option: "Tandoori", price: 40 },
                { option: "Curry", price: 35 }
            ],
            addOns: [
                { option: "Extra Mutton", price: 100 },
                { option: "Paneer", price: 75 },
                { option: "Vegetables", price: 50 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "38",
        name: "PanCake",
        price: 465,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "PanCakes",
        imageUrl: "/homeCartImages/pancake3.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 50 }
            ],
            flavors: [
                { option: "Plain", price: 0 },
                { option: "Chocolate Chip", price: 20 },
                { option: "Blueberry", price: 20 },
                { option: "Banana", price: 15 }
            ],
            toppings: [
                { option: "Maple Syrup", price: 10 },
                { option: "Honey", price: 10 },
                { option: "Whipped Cream", price: 15 },
                { option: "Fruit Compote", price: 20 }
            ]
        }
    },
    {
        _id: "39",
        name: "Paneer Tika",
        price: 185,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Paneer",
        imageUrl: "/homeCartImages/paneer3.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            preparation: [
                { option: "Grilled", price: 20 },
                { option: "Fried", price: 15 },
                { option: "Tikka", price: 25 }
            ],
            addOns: [
                { option: "Extra Paneer", price: 50 },
                { option: "Vegetables", price: 30 },
                { option: "Sauces", price: 20 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "40",
        name: "Cheese Pizza",
        price: 250,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Pizza",
        imageUrl: "/homeCartImages/pizza3.jpg",
        customizations: {
            size: [
                { option: "Personal (6-inch)", price: 0 },
                { option: "Medium (9-inch)", price: 50 },
                { option: "Large (12-inch)", price: 100 }
            ],
            crust: [
                { option: "Thin Crust", price: 0 },
                { option: "Thick Crust", price: 20 },
                { option: "Cheese Burst", price: 30 },
                { option: "Gluten-Free", price: 25 }
            ],
            toppings: [
                { option: "Extra Cheese", price: 20 },
                { option: "Pepperoni", price: 30 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 },
                { option: "Bell Peppers", price: 15 },
                { option: "Onions", price: 10 }
            ],
            sauces: [
                { option: "Tomato Sauce", price: 0 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Pesto Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "41",
        name: "Tomato Spinach Pasta",
        price: 190,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Pasta",
        imageUrl: "/homeCartImages/pasta3.jpg",
        customizations: {
            type: [
                { option: "Spaghetti", price: 0 },
                { option: "Fettuccine", price: 10 },
                { option: "Penne", price: 0 },
                { option: "Lasagna", price: 15 }
            ],
            sauces: [
                { option: "Alfredo", price: 20 },
                { option: "Marinara", price: 15 },
                { option: "Pesto", price: 20 },
                { option: "Arrabiata", price: 15 }
            ],
            addOns: [
                { option: "Extra Cheese", price: 10 },
                { option: "Chicken", price: 25 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "42",
        name: "Salmon",
        price: 650,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Salmon",
        imageUrl: "/homeCartImages/salmon3.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Baked", price: 0 },
                { option: "Fried", price: 20 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Teriyaki", price: 10 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 }
            ],
            addOns: [
                { option: "Extra Salmon", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "43",
        name: "Roasted SandWich",
        price: 70,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Sandwich",
        imageUrl: "/homeCartImages/sandwich3.jpg",
        customizations: {
            bread: [
                { option: "White", price: 0 },
                { option: "Whole Wheat", price: 0 },
                { option: "Multigrain", price: 10 },
                { option: "Gluten-Free", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Beef", price: 25 },
                { option: "Veggie", price: 15 },
                { option: "Paneer", price: 20 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 },
                { option: "Onions", price: 5 },
                { option: "Pickles", price: 5 }
            ],
            sauces: [
                { option: "Mayonnaise", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Honey Mustard", price: 10 },
                { option: "Chipotle Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "44",
        name: "Saucy Ramen Noodles",
        price: 210,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Noodles",
        imageUrl: "/homeCartImages/noodles3.jpg",
        customizations: {
            type: [
                { option: "Egg Noodles", price: 0 },
                { option: "Rice Noodles", price: 0 },
                { option: "Udon", price: 10 },
                { option: "Soba", price: 15 }
            ],
            sauces: [
                { option: "Soy Sauce", price: 5 },
                { option: "Teriyaki Sauce", price: 10 },
                { option: "Spicy Chili Sauce", price: 15 },
                { option: "Peanut Sauce", price: 15 }
            ],
            addOns: [
                { option: "Vegetables", price: 20 },
                { option: "Chicken", price: 25 },
                { option: "Beef", price: 30 },
                { option: "Shrimp", price: 35 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "45",
        name: "Lemon Fish",
        price: 310,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Fish",
        imageUrl: "/homeCartImages/fish3.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Fried", price: 20 },
                { option: "Baked", price: 10 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 },
                { option: "Teriyaki", price: 10 }
            ],
            addOns: [
                { option: "Extra Fish", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "46",
        name: "Cheese Burger",
        price: 55,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Burger",
        imageUrl: "/homeCartImages/burger4.jpg",
        customizations: {
            patties: [
                { option: "Egg", price: 15 },
                { option: "Chicken", price: 25 },
                { option: "Veg", price: 10 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Bacon", price: 20 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 }
            ],
            sauces: [
                { option: "Ketchup", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Mayo", price: 10 }
            ]
        }
    },
    {
        _id: "47",
        name: "StrawBerry Cake",
        price: 650,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Cake",
        imageUrl: "/homeCartImages/cake4.jpg",
        customizations: {
            size: [
                { option: "250 g", price: 0 },
                { option: "500 g", price: 100 },
                { option: "1 kg", price: 180 }
            ],
            flavors: [
                { option: "Chocolate", price: 0 },
                { option: "Vanilla", price: 0 },
                { option: "Red Velvet", price: 20 },
                { option: "Strawberry", price: 20 }
            ],
            toppings: [
                { option: "Chocolate Frosting", price: 0 },
                { option: "Cream Cheese Frosting", price: 10 },
                { option: "Sprinkles", price: 5 },
                { option: "Fruit Toppings", price: 15 }
            ]
        }
    },
    {
        _id: "48",
        name: "Handi Biryani",
        price: 450,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Chicken Biryani",
        imageUrl: "/homeCartImages/chickenBiryani3.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            addOns: [
                { option: "Egg", price: 20 },
                { option: "Extra Chicken", price: 40 },
                { option: "Paneer", price: 25 }
            ],
            sides: [
                { option: "Raita", price: 15 },
                { option: "Salad", price: 10 },
                { option: "Pickle", price: 5 }
            ]
        }
    },
    {
        _id: "49",
        name: "Oven Baked Fish",
        price: 330,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Fish",
        imageUrl: "/homeCartImages/fish4.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Fried", price: 20 },
                { option: "Baked", price: 10 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 },
                { option: "Teriyaki", price: 10 }
            ],
            addOns: [
                { option: "Extra Fish", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "50",
        name: "Roasted Fries",
        price: 80,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "French Fries",
        imageUrl: "/homeCartImages/frenchFries3.jpg",
        customizations: {
            size: [
                { option: "Small", price: 0 },
                { option: "Medium", price: 15 },
                { option: "Large", price: 25 }
            ],
            styles: [
                { option: "Classic", price: 0 },
                { option: "Cheese Burst", price: 20 },
                { option: "Garlic Parmesan", price: 15 },
                { option: "Spicy", price: 10 }
            ],
            dips: [
                { option: "Ketchup", price: 5 },
                { option: "Mayonnaise", price: 5 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Honey Mustard", price: 10 }
            ]
        }
    },
    {
        _id: "51",
        name: "spicy Momos",
        price: 100,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Momos",
        imageUrl: "/homeCartImages/momos4.jpg",
        customizations: {
            type: [
                { option: "Steamed", price: 0 },
                { option: "Fried", price: 10 },
                { option: "Grilled", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Vegetable", price: 15 },
                { option: "Paneer", price: 18 }
            ],
            sauces: [
                { option: "Spicy Chili Sauce", price: 10 },
                { option: "Tomato Chutney", price: 5 },
                { option: "Soy Sauce", price: 5 }
            ]
        }
    },
    {
        _id: "52",
        name: "Spicy Masala Mutton",
        price: 750,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Mutton",
        imageUrl: "/homeCartImages/mutton4.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            cookingStyle: [
                { option: "Grilled", price: 50 },
                { option: "Masala", price: 30 },
                { option: "Tandoori", price: 40 },
                { option: "Curry", price: 35 }
            ],
            addOns: [
                { option: "Extra Mutton", price: 100 },
                { option: "Paneer", price: 75 },
                { option: "Vegetables", price: 50 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "53",
        name: "Baked PanCake",
        price: 390,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "PanCakes",
        imageUrl: "/homeCartImages/pancake4.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 50 }
            ],
            flavors: [
                { option: "Plain", price: 0 },
                { option: "Chocolate Chip", price: 20 },
                { option: "Blueberry", price: 20 },
                { option: "Banana", price: 15 }
            ],
            toppings: [
                { option: "Maple Syrup", price: 10 },
                { option: "Honey", price: 10 },
                { option: "Whipped Cream", price: 15 },
                { option: "Fruit Compote", price: 20 }
            ]
        }
    },
    {
        _id: "54",
        name: "Palak Paneer",
        price: 350,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Paneer",
        imageUrl: "/homeCartImages/paneer4.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            preparation: [
                { option: "Grilled", price: 20 },
                { option: "Fried", price: 15 },
                { option: "Tikka", price: 25 }
            ],
            addOns: [
                { option: "Extra Paneer", price: 50 },
                { option: "Vegetables", price: 30 },
                { option: "Sauces", price: 20 }
            ],
            sides: [
                { option: "Naan", price: 20 },
                { option: "Rice", price: 15 },
                { option: "Salad", price: 10 }
            ]
        }
    },
    {
        _id: "55",
        name: "Vegetables Pizza",
        price: 290,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Pizza",
        imageUrl: "/homeCartImages/pizza5.jpg",
        customizations: {
            size: [
                { option: "Personal (6-inch)", price: 0 },
                { option: "Medium (9-inch)", price: 50 },
                { option: "Large (12-inch)", price: 100 }
            ],
            crust: [
                { option: "Thin Crust", price: 0 },
                { option: "Thick Crust", price: 20 },
                { option: "Cheese Burst", price: 30 },
                { option: "Gluten-Free", price: 25 }
            ],
            toppings: [
                { option: "Extra Cheese", price: 20 },
                { option: "Pepperoni", price: 30 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 },
                { option: "Bell Peppers", price: 15 },
                { option: "Onions", price: 10 }
            ],
            sauces: [
                { option: "Tomato Sauce", price: 0 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Pesto Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "56",
        name: "Chinese-Style Arrabiata Pasta",
        price: 390,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Pasta",
        imageUrl: "/homeCartImages/pasta4.jpg",
        customizations: {
            type: [
                { option: "Spaghetti", price: 0 },
                { option: "Fettuccine", price: 10 },
                { option: "Penne", price: 0 },
                { option: "Lasagna", price: 15 }
            ],
            sauces: [
                { option: "Alfredo", price: 20 },
                { option: "Marinara", price: 15 },
                { option: "Pesto", price: 20 },
                { option: "Arrabiata", price: 15 }
            ],
            addOns: [
                { option: "Extra Cheese", price: 10 },
                { option: "Chicken", price: 25 },
                { option: "Mushrooms", price: 15 },
                { option: "Olives", price: 15 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "57",
        name: "Salmon",
        price: 850,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Salmon",
        imageUrl: "/homeCartImages/salmon4.jpg",
        customizations: {
            preparation: [
                { option: "Grilled", price: 0 },
                { option: "Baked", price: 0 },
                { option: "Fried", price: 20 }
            ],
            seasoning: [
                { option: "Lemon Herb", price: 0 },
                { option: "Teriyaki", price: 10 },
                { option: "Spicy Cajun", price: 15 },
                { option: "Garlic Butter", price: 10 }
            ],
            addOns: [
                { option: "Extra Salmon", price: 150 },
                { option: "Vegetables", price: 50 },
                { option: "Rice", price: 30 },
                { option: "Salad", price: 20 }
            ],
            sides: [
                { option: "Steamed Vegetables", price: 30 },
                { option: "Rice Pilaf", price: 25 },
                { option: "Mashed Potatoes", price: 25 }
            ]
        }
    },
    {
        _id: "58",
        name: "Cheese Burst SandWich",
        price: 60,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Sandwich",
        imageUrl: "/homeCartImages/sandwich4.jpg",
        customizations: {
            bread: [
                { option: "White", price: 0 },
                { option: "Whole Wheat", price: 0 },
                { option: "Multigrain", price: 10 },
                { option: "Gluten-Free", price: 15 }
            ],
            fillings: [
                { option: "Chicken", price: 20 },
                { option: "Beef", price: 25 },
                { option: "Veggie", price: 15 },
                { option: "Paneer", price: 20 }
            ],
            addOns: [
                { option: "Cheese", price: 10 },
                { option: "Lettuce", price: 5 },
                { option: "Tomato", price: 5 },
                { option: "Onions", price: 5 },
                { option: "Pickles", price: 5 }
            ],
            sauces: [
                { option: "Mayonnaise", price: 5 },
                { option: "Mustard", price: 5 },
                { option: "Honey Mustard", price: 10 },
                { option: "Chipotle Sauce", price: 15 }
            ]
        }
    },
    {
        _id: "59",
        name: "Vegetables Noodles",
        price: 90,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Noodles",
        imageUrl: "/homeCartImages/noodles4.jpg",
        customizations: {
            type: [
                { option: "Egg Noodles", price: 0 },
                { option: "Rice Noodles", price: 0 },
                { option: "Udon", price: 10 },
                { option: "Soba", price: 15 }
            ],
            sauces: [
                { option: "Soy Sauce", price: 5 },
                { option: "Teriyaki Sauce", price: 10 },
                { option: "Spicy Chili Sauce", price: 15 },
                { option: "Peanut Sauce", price: 15 }
            ],
            addOns: [
                { option: "Vegetables", price: 20 },
                { option: "Chicken", price: 25 },
                { option: "Beef", price: 30 },
                { option: "Shrimp", price: 35 }
            ],
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ]
        }
    },
    {
        _id: "60",
        name: "Cheese French Fries",
        price: 80,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "French Fries",
        imageUrl: "/homeCartImages/frenchFries5.jpg",
        customizations: {
            size: [
                { option: "Small", price: 0 },
                { option: "Medium", price: 15 },
                { option: "Large", price: 25 }
            ],
            styles: [
                { option: "Classic", price: 0 },
                { option: "Cheese Burst", price: 20 },
                { option: "Garlic Parmesan", price: 15 },
                { option: "Spicy", price: 10 }
            ],
            dips: [
                { option: "Ketchup", price: 5 },
                { option: "Mayonnaise", price: 5 },
                { option: "Barbecue Sauce", price: 10 },
                { option: "Honey Mustard", price: 10 }
            ]
        }
    },
    {
        _id: "61",
        name: "Chicken Kabsa Biryani",
        price: 250,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "Chicken Biryani",
        imageUrl: "/homeCartImages/chickenBiryani4.jpg",
        customizations: {
            spiceLevel: [
                { option: "Mild", price: 0 },
                { option: "Medium", price: 0 },
                { option: "Hot", price: 0 }
            ],
            addOns: [
                { option: "Egg", price: 20 },
                { option: "Extra Chicken", price: 40 },
                { option: "Paneer", price: 25 }
            ],
            sides: [
                { option: "Raita", price: 15 },
                { option: "Salad", price: 10 },
                { option: "Pickle", price: 5 }
            ]
        }
    },
    {
        _id: "62",
        name: "PanCake",
        price: 375,
        desc: "food provides essential nutrients for overaall health and well being",
        category: "PanCakes",
        imageUrl: "/homeCartImages/pancake5.jpg",
        customizations: {
            size: [
                { option: "Regular", price: 0 },
                { option: "Large", price: 50 }
            ],
            flavors: [
                { option: "Plain", price: 0 },
                { option: "Chocolate Chip", price: 20 },
                { option: "Blueberry", price: 20 },
                { option: "Banana", price: 15 }
            ],
            toppings: [
                { option: "Maple Syrup", price: 10 },
                { option: "Honey", price: 10 },
                { option: "Whipped Cream", price: 15 },
                { option: "Fruit Compote", price: 20 }
            ]
        }
    },
]