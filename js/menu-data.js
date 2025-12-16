const menuData = [
    {
        id: 1,
        name: {
            en: "Bruschetta",
            hu: "Bruschetta"
        },
        description: {
            en: "Toasted bread topped with fresh tomatoes, garlic, basil and olive oil",
            hu: "Pirított kenyér friss paradicsommal, fokhagymával, bazsalikommal és olívaolajjal"
        },
        price: 8.99,
        category: "starters",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: {
            en: "Caprese Salad",
            hu: "Caprese Saláta"
        },
        description: {
            en: "Fresh mozzarella, tomatoes, basil with balsamic glaze",
            hu: "Friss mozzarella, paradicsom, bazsalikom balzsamecet mártással"
        },
        price: 10.99,
        category: "starters",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: {
            en: "Calamari Fritti",
            hu: "Rántott Tintahal"
        },
        description: {
            en: "Crispy fried squid served with marinara sauce",
            hu: "Ropogós rántott tintahal marinara mártással"
        },
        price: 12.99,
        category: "starters",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: {
            en: "Minestrone Soup",
            hu: "Minestrone Leves"
        },
        description: {
            en: "Classic Italian vegetable soup with pasta",
            hu: "Klasszikus olasz zöldségleves tésztával"
        },
        price: 7.99,
        category: "starters",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: {
            en: "Garlic Bread",
            hu: "Fokhagymás Kenyér"
        },
        description: {
            en: "Freshly baked bread with garlic butter and herbs",
            hu: "Frissen sült kenyér fokhagymás vajjal és fűszernövényekkel"
        },
        price: 5.99,
        category: "starters",
        image: "https://images.unsplash.com/photo-1619985652302-b3d1a20f6a2e?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: {
            en: "Margherita Pizza",
            hu: "Margherita Pizza"
        },
        description: {
            en: "Tomato sauce, fresh mozzarella, basil and extra virgin olive oil",
            hu: "Paradicsom szósz, friss mozzarella, bazsalikom és extra szűz olívaolaj"
        },
        price: 14.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: {
            en: "Pepperoni Pizza",
            hu: "Pepperoni Pizza"
        },
        description: {
            en: "Tomato sauce, mozzarella and premium pepperoni",
            hu: "Paradicsom szósz, mozzarella és prémium pepperoni"
        },
        price: 16.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: {
            en: "Spaghetti Carbonara",
            hu: "Spagetti Carbonara"
        },
        description: {
            en: "Creamy sauce with bacon, eggs, parmesan and black pepper",
            hu: "Krémes szósz szalonnával, tojással, parmezánnal és fekete borssal"
        },
        price: 15.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: {
            en: "Fettuccine Alfredo",
            hu: "Fettuccine Alfredo"
        },
        description: {
            en: "Pasta in rich creamy parmesan sauce",
            hu: "Tészta gazdag krémes parmezán szószban"
        },
        price: 14.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: {
            en: "Lasagna Bolognese",
            hu: "Lasagne Bolognese"
        },
        description: {
            en: "Layers of pasta with meat sauce, béchamel and cheese",
            hu: "Tészta rétegek húsos szósszal, béchamel mártással és sajttal"
        },
        price: 17.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: {
            en: "Risotto ai Funghi",
            hu: "Gombás Rizottó"
        },
        description: {
            en: "Creamy risotto with mixed mushrooms and parmesan",
            hu: "Krémes rizottó vegyes gombákkal és parmezánnal"
        },
        price: 16.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1476124369491-c7addf7a7aaf?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: {
            en: "Chicken Parmigiana",
            hu: "Csirke Parmigiana"
        },
        description: {
            en: "Breaded chicken with marinara sauce and melted cheese",
            hu: "Rántott csirke marinara szósszal és olvasztott sajttal"
        },
        price: 18.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        name: {
            en: "Osso Buco",
            hu: "Osso Buco"
        },
        description: {
            en: "Slow-cooked veal shanks in white wine and vegetables",
            hu: "Lassan főzött borjúcsülök fehérborban és zöldségekkel"
        },
        price: 24.99,
        category: "mains",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        name: {
            en: "Tiramisu",
            hu: "Tiramisu"
        },
        description: {
            en: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
            hu: "Klasszikus olasz desszert kávéba áztatott piskótával és mascarponéval"
        },
        price: 7.99,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        name: {
            en: "Panna Cotta",
            hu: "Panna Cotta"
        },
        description: {
            en: "Creamy vanilla pudding with berry compote",
            hu: "Krémes vaníliás puding bogyós gyümölcs kompóttal"
        },
        price: 6.99,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop"
    },
    {
        id: 16,
        name: {
            en: "Cannoli",
            hu: "Cannoli"
        },
        description: {
            en: "Crispy pastry shells filled with sweet ricotta cream",
            hu: "Ropogós tésztahéj édes ricotta krémmel töltve"
        },
        price: 6.99,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=300&fit=crop"
    },
    {
        id: 17,
        name: {
            en: "Gelato",
            hu: "Fagylalt"
        },
        description: {
            en: "Italian ice cream - ask for today's flavors",
            hu: "Olasz fagylalt - kérdezd meg a napi ízeket"
        },
        price: 5.99,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop"
    },
    {
        id: 18,
        name: {
            en: "Affogato",
            hu: "Affogato"
        },
        description: {
            en: "Vanilla gelato drowned in hot espresso",
            hu: "Vaníliás fagylalt forró espresszóban"
        },
        price: 6.99,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
    },
    {
        id: 19,
        name: {
            en: "Espresso",
            hu: "Espresso"
        },
        description: {
            en: "Strong Italian coffee",
            hu: "Erős olasz kávé"
        },
        price: 3.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop"
    },
    {
        id: 20,
        name: {
            en: "Cappuccino",
            hu: "Cappuccino"
        },
        description: {
            en: "Espresso with steamed milk and foam",
            hu: "Espresso gőzölt tejjel és tejhabbal"
        },
        price: 4.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
    },
    {
        id: 21,
        name: {
            en: "Latte",
            hu: "Latte"
        },
        description: {
            en: "Espresso with steamed milk",
            hu: "Espresso gőzölt tejjel"
        },
        price: 4.50,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop"
    },
    {
        id: 22,
        name: {
            en: "Fresh Orange Juice",
            hu: "Friss Narancslé"
        },
        description: {
            en: "Freshly squeezed orange juice",
            hu: "Frissen facsart narancslé"
        },
        price: 4.99,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop"
    },
    {
        id: 23,
        name: {
            en: "Italian Soda",
            hu: "Olasz Szóda"
        },
        description: {
            en: "Sparkling water with flavored syrup",
            hu: "Szénsavas víz ízesített sziruppal"
        },
        price: 3.99,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop"
    },
    {
        id: 24,
        name: {
            en: "House Wine (Glass)",
            hu: "Házi Bor (Pohár)"
        },
        description: {
            en: "Red or white wine",
            hu: "Vörös vagy fehér bor"
        },
        price: 6.99,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop"
    },
    {
        id: 25,
        name: {
            en: "Peroni Beer",
            hu: "Peroni Sör"
        },
        description: {
            en: "Italian lager beer",
            hu: "Olasz világos sör"
        },
        price: 5.99,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop"
    }
];