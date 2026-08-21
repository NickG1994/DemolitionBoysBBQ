const menuItems = [
  {
    "category": "Meat",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    "note": "All meats are sold by 1/2 lb, but you can order as much or little as you want",
    "items": [
      {
        "id": 1,
        "title": "Brisket",
        "type": "meat",
        "description": "Slow-smoked over Texas hardwood for hours, yielding tender slices with a deep smoke ring and rich flavor.",
        "tags": ["featured", "popular", "meat", "smoked"],
        "price": 0,
        "image": ""
      },
      {
        "id": 2,
        "title": "Baby Back Ribs",
        "type": "meat",
        "description": "Tender pork ribs seasoned with our signature dry rub and smoked until tender with a sweet and savory glazed crust.",
        "tags": ["featured", "popular", "meat", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 3,
        "title": "Pulled Pork",
        "type": "meat",
        "description": "Slow-cooked pork shoulder, hand-pulled for maximum juiciness, tossed with authentic tangy spices, and bursting with rich wood-smoked flavor in every bite.",
        "tags": ["discover", "meat", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 4,
        "title": "Chicken",
        "type": "meat",
        "description": "Juicy quarter chicken seasoned with aromatic house spices and wood-smoked to crisp perfection.",
        "tags": ["discover", "meat", "poultry"],
        "price": 0,
        "image": ""
      },
      {
        "id": 5,
        "title": "Sausage",
        "type": "meat",
        "description": "Artisanal smoked sausage links available in Carnitas, Mozzarella, Jalapeño Cheddar, or Regular styles.",
        "tags": ["discover", "meat", "sausage", "spicy"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Tacos",
    "image": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80",
    "note": "All orders come with 5 tacos, charro beans, onion, cilantro & salsa",
    "items": [
      {
        "id": 6,
        "title": "Brisket Taco",
        "type": "taco",
        "description": "Five warm tortillas loaded with tender sliced brisket, served with fresh cilantro, diced onions, homemade salsa, and charro beans.",
        "tags": ["featured", "popular", "taco", "beef"],
        "price": 0,
        "image": ""
      },
      {
        "id": 7,
        "title": "Loganiza Taco",
        "type": "taco",
        "description": "Five flavorful tacos stuffed with seasoned Mexican loganiza sausage, paired with charro beans and fresh taco toppings.",
        "tags": ["discover", "taco", "pork", "spicy"],
        "price": 0,
        "image": ""
      },
      {
        "id": 8,
        "title": "Chicken Taco",
        "type": "taco",
        "description": "Five street-style tacos filled with juicy smoked chicken, onions, cilantro, salsa, and a side of charro beans.",
        "tags": ["discover", "taco", "poultry"],
        "price": 0,
        "image": ""
      },
      {
        "id": 9,
        "title": "Pulled Pork Taco",
        "type": "taco",
        "description": "Five delicious tacos stuffed with tangy pulled pork, accompanied by cilantro, onions, salsa, and savory charro beans.",
        "tags": ["discover", "taco", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 10,
        "title": "Baby Back Rib Taco",
        "type": "taco",
        "description": "Five specialty tacos filled with tender rib meat carved fresh off the bone, served with full charro bean fixings.",
        "tags": ["featured", "specialty", "taco", "pork"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Sandwiches",
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80",
    "note": "All orders come with 1/4 lb. any meat, pickle, onion & home made BBQ sauce",
    "items": [
      {
        "id": 11,
        "title": "Brisket Sandwich",
        "type": "sandwich",
        "description": "A quarter-pound of tender smoked brisket piled on a toasted bun, topped with pickles, onions, and house BBQ sauce.",
        "tags": ["featured", "popular", "sandwich", "beef"],
        "price": 0,
        "image": ""
      },
      {
        "id": 12,
        "title": "Loganiza Sandwich",
        "type": "sandwich",
        "description": "A quarter-pound of savory loganiza sausage served on a warm bun with sliced pickles, onions, and BBQ sauce.",
        "tags": ["discover", "sandwich", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 13,
        "title": "Chicken Sandwich",
        "type": "sandwich",
        "description": "A quarter-pound of shredded smoked chicken layered with pickles, onions, and homemade barbecue sauce.",
        "tags": ["discover", "sandwich", "poultry"],
        "price": 0,
        "image": ""
      },
      {
        "id": 14,
        "title": "Pulled Pork Sandwich",
        "type": "sandwich",
        "description": "A quarter-pound of tender pulled pork heaped high with tangy house sauce, crunchy pickles, and diced onions.",
        "tags": ["popular", "sandwich", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 15,
        "title": "Baby Back Rib Sandwich",
        "type": "sandwich",
        "description": "A quarter-pound of boneless baby back rib meat tossed in house barbecue sauce and served on a toasted bun.",
        "tags": ["featured", "specialty", "sandwich", "pork"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Corn",
    "image": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
    "note": "All orders come with cream, butter, mayo, parmesan, cheese, powder chile",
    "items": [
      {
        "id": 16,
        "title": "Corn on a Cob",
        "type": "corn",
        "description": "Grilled sweet corn on the cob dressed with butter, Mexican cream, mayo, parmesan cheese, and a sprinkle of chili powder.",
        "tags": ["popular", "side", "vegetarian"],
        "price": 0,
        "image": ""
      },
      {
        "id": 17,
        "title": "Corn in a Cup",
        "type": "corn",
        "description": "Fresh street corn off the cob layered in a cup with cream, butter, mayo, cotija-style parmesan, and chili powder.",
        "tags": ["featured", "popular", "side", "vegetarian"],
        "price": 0,
        "image": ""
      },
      {
        "id": 18,
        "title": "Corn in a Cup with Any Meat",
        "type": "corn",
        "description": "Our signature corn cup topped with your choice of smoked brisket, pulled pork, chicken, or sausage.",
        "tags": ["featured", "specialty", "loaded"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Sides",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    "note": "",
    "items": [
      {
        "id": 19,
        "title": "Charros Beans",
        "type": "side",
        "description": "Traditional Mexican pinto beans simmered with bacon, herbs, garlic, and savory spices.",
        "tags": ["popular", "side"],
        "price": 0,
        "image": ""
      },
      {
        "id": 20,
        "title": "Demolition Boys Bowl",
        "type": "side",
        "description": "A hearty bowl loaded with rich charro beans and topped with your favorite choice of smoked meat.",
        "tags": ["featured", "specialty", "loaded"],
        "price": 0,
        "image": ""
      },
      {
        "id": 21,
        "title": "Mexican Rice",
        "type": "side",
        "description": "Fluffy long-grain rice seasoned with tomato, garlic, and authentic Mexican spices.",
        "tags": ["discover", "side", "vegetarian"],
        "price": 0,
        "image": ""
      },
      {
        "id": 22,
        "title": "Green Mac & Cheese",
        "type": "side",
        "description": "Creamy elbow pasta baked in a velvety cheese sauce infused with roasted green chiles.",
        "tags": ["featured", "popular", "side", "vegetarian"],
        "price": 0,
        "image": ""
      },
      {
        "id": 23,
        "title": "Potato Salad",
        "type": "side",
        "description": "Classic house-made potato salad tossed with mustard, mayo, and tender potato chunks.",
        "tags": ["discover", "side", "vegetarian"],
        "price": 0,
        "image": ""
      },
      {
        "id": 24,
        "title": "Pork Belly Burnt Ends",
        "type": "side",
        "description": "Bite-sized pork belly cubes smoked until melt-in-your-mouth tender and rendered in a sweet BBQ glaze.",
        "tags": ["featured", "popular", "side", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 25,
        "title": "Cream of Corn",
        "type": "side",
        "description": "Sweet whole-kernel corn simmered in a silky, rich cream sauce.",
        "tags": ["discover", "side", "vegetarian"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Sausage Dogs",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    "note": "All orders come with ketchup, mayo, mustard, tomatoes & onions",
    "items": [
      {
        "id": 26,
        "title": "Mozzarella Sausage Dog",
        "type": "sausage_dog",
        "description": "Gourmet mozzarella-stuffed sausage link served hot on a bun with ketchup, mayo, mustard, fresh tomatoes, and onions.",
        "tags": ["discover", "sausage_dog"],
        "price": 0,
        "image": ""
      },
      {
        "id": 27,
        "title": "Carnitas Sausage Dog",
        "type": "sausage_dog",
        "description": "Savory carnitas-style sausage served on a toasted bun with complete dog condiments.",
        "tags": ["discover", "sausage_dog", "pork"],
        "price": 0,
        "image": ""
      },
      {
        "id": 28,
        "title": "Jalapeño w/Cheddar Sausage Dog",
        "type": "sausage_dog",
        "description": "Smoked sausage packed with spicy jalapeños and melted cheddar, topped with tomatoes, onions, mustard, ketchup, and mayo.",
        "tags": ["featured", "popular", "sausage_dog", "spicy"],
        "price": 0,
        "image": ""
      },
      {
        "id": 29,
        "title": "Regular Sausage Dog",
        "type": "sausage_dog",
        "description": "Classic smoked sausage dog topped with fresh tomatoes, onions, ketchup, mayo, and mustard.",
        "tags": ["discover", "sausage_dog"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Breakfast",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    "note": "",
    "items": [
      {
        "id": 30,
        "title": "Breakfast Taco (1 Meat & 2 Sides)",
        "type": "breakfast",
        "description": "Fresh morning taco packed with your choice of 1 breakfast meat and 2 sides wrapped in a soft tortilla.",
        "tags": ["popular", "breakfast", "taco"],
        "price": 0,
        "image": ""
      },
      {
        "id": 31,
        "title": "Breakfast Taco (2 Meats & 2 Sides)",
        "type": "breakfast",
        "description": "Loaded morning taco with your choice of 2 breakfast meats and 2 side fillings.",
        "tags": ["featured", "breakfast", "taco"],
        "price": 0,
        "image": ""
      },
      {
        "id": 32,
        "title": "Breakfast Burrito (1 Meat & 2 Sides)",
        "type": "breakfast",
        "description": "Large flour burrito stuffed with 1 meat and 2 sides of your choice for a filling morning meal.",
        "tags": ["popular", "breakfast", "burrito"],
        "price": 0,
        "image": ""
      },
      {
        "id": 33,
        "title": "Breakfast Burrito (2 Meats & 2 Sides)",
        "type": "breakfast",
        "description": "Giant breakfast burrito filled with your favorite 2 meats and 2 sides.",
        "tags": ["featured", "breakfast", "burrito"],
        "price": 0,
        "image": ""
      },
      {
        "id": 34,
        "title": "Breakfast Sub (1 Meat & 2 Sides)",
        "type": "breakfast",
        "description": "Warm sandwich roll packed with 1 choice of meat and 2 breakfast sides.",
        "tags": ["discover", "breakfast", "sandwich"],
        "price": 0,
        "image": ""
      },
      {
        "id": 35,
        "title": "Breakfast Sub (2 Meats & 2 Sides)",
        "type": "breakfast",
        "description": "Hearty sub sandwich loaded with 2 choices of meat and 2 breakfast sides.",
        "tags": ["discover", "breakfast", "sandwich"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Drinks",
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    "note": "All drinks are from Mexico",
    "items": [
      {
        "id": 36,
        "title": "Coke",
        "type": "drink",
        "description": "Authentic Mexican Coca-Cola made with real cane sugar served cold in a glass bottle.",
        "tags": ["popular", "drink", "mexican_soda"],
        "price": 0,
        "image": ""
      },
      {
        "id": 37,
        "title": "Sprite",
        "type": "drink",
        "description": "Crisp, lemon-lime Mexican Sprite sweetened with natural cane sugar.",
        "tags": ["discover", "drink", "mexican_soda"],
        "price": 0,
        "image": ""
      },
      {
        "id": 38,
        "title": "Orange",
        "type": "drink",
        "description": "Refreshing Mexican orange soda bottled in Mexico.",
        "tags": ["discover", "drink", "mexican_soda"],
        "price": 0,
        "image": ""
      },
      {
        "id": 39,
        "title": "Apple",
        "type": "drink",
        "description": "Crisp Mexican Sidral Mundet apple-flavored soda.",
        "tags": ["discover", "drink", "mexican_soda"],
        "price": 0,
        "image": ""
      },
      {
        "id": 40,
        "title": "Punch",
        "type": "drink",
        "description": "Fruity and sweet Mexican fruit punch soda.",
        "tags": ["discover", "drink", "mexican_soda"],
        "price": 0,
        "image": ""
      },
      {
        "id": 41,
        "title": "Bottle Water",
        "type": "drink",
        "description": "Chilled bottled spring water.",
        "tags": ["drink"],
        "price": 0,
        "image": ""
      }
    ]
  },
  {
    "category": "Desserts",
    "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    "note": "",
    "items": [
      {
        "id": 42,
        "title": "Smoked Cookies",
        "type": "dessert",
        "description": "Freshly baked chocolate chip cookies infused with a subtle wood-smoke aroma.",
        "tags": ["featured", "specialty", "dessert"],
        "price": 0,
        "image": ""
      },
      {
        "id": 43,
        "title": "Flan",
        "type": "dessert",
        "description": "Traditional Mexican baked custard with a rich caramel sauce top.",
        "tags": ["popular", "dessert"],
        "price": 0,
        "image": ""
      },
      {
        "id": 44,
        "title": "Cheese Cake",
        "type": "dessert",
        "description": "Rich and creamy classic cheesecake slice on a graham cracker crust.",
        "tags": ["discover", "dessert"],
        "price": 0,
        "image": ""
      }
    ]
  }
]

export default menuItems