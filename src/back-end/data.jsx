
const data = [
    {
        id: 1,
        title: 'Sony - PlayStation 5 Pro Console - White',
        image: 'https://cdn.trendhunterstatic.com/thumbs/500/sony-playstation-5-pro-concept.jpeg?auto=webp',
        isMostViewed: true,
        price: 499.99,
        description: 'The ultimate gaming console with stunning graphics and performance.', // One-line description
    },
    {
        id: 2,
        title: 'ASUS - USB-BE92 Nano WiFi7 Tri Band BE6500 USB Adapter',
        image: 'https://media.education.studio7thailand.com/6894/Asus-Network-USB-AC53-Wi-Fi-Adapter-2-square_medium.jpg',
        isMostViewed: true,
        price: 49.99, 
        description: 'High-speed USB WiFi adapter for seamless internet connectivity.', // One-line description
    },
    {
        id: 3,
        title: 'Beats Studio Pro - Wireless Noise Cancelling Over-the-Ear Headphones',
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501017cv16d.jpg',
        isMostViewed: true,
        price: 349.99, 
        description: 'Premium wireless headphones with exceptional sound quality and comfort.', // One-line description
    },
    {
        id: 4,
        title: 'Costway 5 x 4.6 ft Inflatable Spider w/ Pumpkin LED Lights',
        image: 'https://mobileimages.lowes.com/productimages/a5cf35f4-91e5-4c21-9928-560cae467e61/64606186.jpg?size=pdhism',
        isMostViewed: true,
        price: 79.99, 
        description: 'A spooky inflatable decoration perfect for Halloween festivities.', // One-line description
    },
    {
        id: 5,
        title: 'Apple - iPad mini (A17 Pro chip) - Built for Apple Intelligence',
        image: 'https://tse1.mm.bing.net/th?id=OIP.yAtRyaWRALtLuZRHvSR9UQHaEK&pid=Api&P=0&h=220',
        isMostViewed: true,
        price: 499.99, 
        description: 'Compact and powerful tablet designed for productivity and creativity.', // One-line description
    },
    {
        id: '6',
        title: 'Apple - 10.9-Inch iPad - Latest Model (10th Generation) with Wi-Fi - 64GB - Silver',
        price: 349.00,
        discountedPrice: 299.00,
        rating: 4.5,
        reviews: 15370,
        image: 'https://static.swappa.com/media/listing/LWNZ27376/ygptDZaK.jpg', // Replace with actual image link
        isTrending: true
      },
      {
        id: '7',
        title: 'Samsung - 50" Class DU6900 Series Crystal UHD 4K Smart Tizen TV (2024)',
        price: 329.99,
        discountedPrice: 249.99,
        rating: 4.7,
        reviews: 86,
        image: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/crystal-uhd-tvs/05212024/UN65DU6900FXZA_003_LPerspective_Black_1600x1200.jpg?$product-details-jpg$', // Replace with actual image link
        isTrending: true
      },
      {
        id: '8',
        title: 'HP - Smart Tank 6001 Wireless All-In-One Supertank Inkjet Printer with 2 Years of Ink',
        price: 344.99,
        discountedPrice: 219.99,
        rating: 4.4,
        reviews: 1077,
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6498/6498188cv13d.jpg', // Replace with actual image link
        isTrending: true
      },
      {
        id: '9',
        title: 'Samsung - Galaxy Book4 Edge - Copilot+ PC - 14" AMOLED Touch-Screen Laptop',
        price: 1349.99,
        discountedPrice: 799.99,
        rating: 4.3,
        reviews: 40,
        image: 'https://www.alternate.nl/p/1200x630/7/3/SAMSUNG_Galaxy_Book4_Edge_NP940XMA_KB1NL_14___Copilot__laptop@@1930337_31.jpg', // Replace with actual image link
        isTrending: true
      },
      {
        id: '10',
        title: 'Samsung - Galaxy S24 FE 128GB (Unlocked) - Graphite',
        price: 649.99,
        rating: 0, 
        reviews: 0,
        image: 'https://www.pc-tablet.co.in/wp-content/uploads/2024/09/Samsung-Galaxy-S24-FE.webp', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '11',
        title: 'Samsung - Galaxy Watch FE Aluminum Smartwatch 40mm LTE - Graphite',
        price: 249.99,
        rating: 0, 
        reviews: 0,
        image: 'https://eezepc.com/wp-content/uploads/2024/08/samsung-1-1.webp', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '12',
        title: 'Samsung - Galaxy Buds FE Wireless Earbud Headphones - Graphite',
        price: 99.99,
        rating: 4.5,
        reviews: 1107,
        image: 'https://xcessorieshub.com/wp-content/uploads/2023/10/Buds-FE-1.webp', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '13',
        title: 'Samsung - Galaxy Tab S10+ - 12.4" 256GB - Wi-Fi with S-Pen',
        price: 999.99,
        rating: 5,
        reviews: 1,
        image: 'https://brain-images-ssl.cdn.dixons.com/4/1/10222914/u_10222914.jpg', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '14',
        title: 'Samsung - Galaxy Z Fold5 512GB (Unlocked) - Phantom Black',
        price: 1499.99,
        rating: 4.7,
        reviews: 450,
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548849cv13d.jpg', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '15',
        title: 'Samsung - 55" Class QLED 4K UHD Smart TV (2024)',
        price: 899.99,
        rating: 4.8,
        reviews: 340,
        image: 'https://tse3.mm.bing.net/th?id=OIP.UXzlYUpYQKKfuAKATZ1_CgHaFJ&pid=Api&P=0&h=220', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '16',
        title: 'Samsung - Galaxy A54 5G 128GB (Unlocked) - Awesome Violet',
        price: 449.99,
        rating: 4.4,
        reviews: 230,
        image: 'https://www.cnet.com/a/img/resize/4bdbfd93bdd2c17e0f99ebb67e0763c79b7ed90e/hub/2023/03/23/a743d7d7-64b6-4bd8-a27f-7be7cefe70f3/samsung-galaxy-a54-5g-2.jpg?auto=webp&fit=crop&height=675&width=1200', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '17',
        title: 'Samsung - Galaxy Watch6 Classic 47mm - Silver',
        price: 349.99,
        rating: 4.6,
        reviews: 160,
        image: 'https://tse4.mm.bing.net/th?id=OIP.VdeHxfp1ReWKMPr3hfp3pgHaE8&pid=Api&P=0&h=220', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '18',
        title: 'Samsung - Galaxy Book3 Pro 14" AMOLED 16GB RAM, 1TB SSD - Graphite',
        price: 1349.99,
        rating: 4.9,
        reviews: 80,
        image: 'https://m.media-amazon.com/images/I/61Gd-Vi+V7L._AC_SL1500_.jpg', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '19',
        title: 'Samsung - Galaxy Z Flip5 256GB (Unlocked) - Lavender',
        price: 999.99,
        rating: 4.5,
        reviews: 620,
        image: 'https://tse3.mm.bing.net/th?id=OIP.5marYQytz4vIPQF5tvkxGQAAAA&pid=Api&P=0&h=220', // Replace with actual image link
        isSamsung: true,
      },
      {
        id: '20',
        title: 'iPhone 14 Pro Max - 256GB',
        description: 'The latest iPhone with a 6.7-inch Super Retina XDR display, A16 Bionic chip, and advanced camera system.',
        price: 1199.99,
        discountedPrice: 999.99,
        rating: 4.8,
        reviews: 150,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1663703841896', // Replace with actual image link
        isTrending: false,
        isSuper: true,
      },
      {
        id: '21',
        title: 'Gucci GG Marmont Small Matelassé Bag',
        description: 'A small matelassé bag with a chevron design, featuring Gucci’s signature double G hardware.',
        price: 2499.99,
        discountedPrice: 1799.99,
        rating: 4.7,
        reviews: 85,
        image: 'https://lulux.ru/wp-content/uploads/2019/09/gucci_gg_marmont_small_chain_shoulder_bag_in_matelass_chevron_leather-brown_2__1.jpg', // Replace with actual image link
        isTrending: false,
        isSuper: true,
      },
      {
        id: '22',
        title: 'Men’s Nike Sportswear Club Fleece Joggers',
        description: 'Soft, warm, and perfect for everyday wear, these joggers combine comfort and style.',
        price: 59.99,
        discountedPrice: 39.99,
        rating: 4.5,
        reviews: 230,
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/395e81e3-41f6-4731-8acf-f6f49a73c742/sportswear-club-fleece-joggers-8Qg3pp.png', // Replace with actual image link
        isTrending: false,
        isSuper: true,
      },
      {
        id: '23',
        title: 'Women’s Zara Floral Print Dress',
        description: 'A chic floral print dress with a modern silhouette, perfect for both casual and formal occasions.',
        price: 79.99,
        discountedPrice: 59.99,
        rating: 4.6,
        reviews: 112,
        image: 'https://i.pinimg.com/736x/9a/18/89/9a188951f96c2feefe335f719ff04cbc.jpg', // Replace with actual image link
        isTrending: false,
        isSuper: true,
      },
      {
        id: 24,
        title: "Dell Inspiron 15 Touch Screen Laptop",
        description: "Intel Core i5 – 8GB – 512GB SSD - Carbon Black",
        image: "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=220", // Add the actual image link
        price: 629.99,
        discountedPrice: 349.99,
        rating: 4.5,
        reviews: 658,
        isDealOfDay: true, 
        pickupAvailability: "Available today at Pakistan",
        shippingAvailability: "Unavailable in your area",
      },

      {
        id: 25,
        title: "Samsung Galaxy Buds Pro",
        description: "High-quality wireless earbuds with noise cancellation.",
        image: "https://tse4.mm.bing.net/th?id=OIP.oCkT99j3aaQabe4zncRgrgHaFj&pid=Api&P=0&h=220", // Ensure correct image path
        rating: 4.5,
        reviews: 243,
        price: 199.99,
        discountedPrice: 149.99,
        pickupAvailability: "Available at selected stores",
        shippingAvailability: "Free shipping",
        isBonus: true,
      },
      {
        id: 26,
        title: "Apple AirPods Pro",
        description: "Noise-canceling wireless earbuds with immersive sound.",
        image: "https://i5.walmartimages.com/seo/Apple-AirPods-Pro-2nd-Generation-Lightning_7e8598be-0a04-4938-98be-765f1fe80447.2f2187eed7001354fb4911fe454dc0d2.jpeg",
        rating: 4.7,
        reviews: 532,
        price: 249.99,
        discountedPrice: 199.99,
        pickupAvailability: "In-store pickup available",
        shippingAvailability: "Next-day delivery",
        isBonus: true,
      },
      {
        id: 27,
        title: "Sony WH-1000XM4 Headphones",
        description: "Premium noise-canceling headphones for high-fidelity sound.",
        image: "https://tse4.mm.bing.net/th?id=OIP.zYL9rxkCyKVTi0CGoADCqwHaD4&pid=Api&P=0&h=220",
        rating: 4.8,
        reviews: 876,
        price: 349.99,
        discountedPrice: 299.99,
        pickupAvailability: "Same-day pickup",
        shippingAvailability: "Free shipping",
        isBonus: true,
      },
      {
        id: 28,
        title: "JBL Flip 5 Portable Speaker",
        description: "Waterproof Bluetooth speaker with powerful bass.",
        image: "https://tse2.mm.bing.net/th?id=OIP.ASVajdBXhDZf34opYaUTdwHaHa&pid=Api&P=0&h=220",
        rating: 4.6,
        reviews: 412,
        price: 119.99,
        discountedPrice: 89.99,
        pickupAvailability: "Available for curbside pickup",
        shippingAvailability: "Standard delivery options",
        isBonus: true,
      },
     
    
      
    
];

export default data;

  