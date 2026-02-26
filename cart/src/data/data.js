const data = [
    {
      "id": 1,
      "name": "Nike Air Zoom",
      "category": "shoes",
      "price": 1200,
      "description": "Professional running shoes with responsive cushioning.",
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Adidas Ultraboost",
      "category": "shoes",
      "price": 1800,
      "description": "Premium running shoes with boost cushioning technology.",
      "image": "https://imgs.search.brave.com/P0abfahaUocTFRm6SSovct6-OfFpHj9gqIRiVc-5fB4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzYv/NTIyMDczMzAxL1VB/L0JJL0hRLzI0OTg5/NjM0L2FkaWRhcy11/bHRyYWJvb3N0LXNo/b2VzLTI1MHgyNTAu/d2VicA",
      "rating": 4.7
    },
    {
      "id": 3,
      "name": "Puma RS-X",
      "category": "shoes",
      "price": 950,
      "description": "Retro-inspired casual sneakers with modern comfort.",
      "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
      "rating": 4.3
    },
    {
      "id": 4,
      "name": "New Balance 990",
      "category": "shoes",
      "price": 1750,
      "description": "Legendary American-made running shoes with superior support.",
      "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
      "rating": 4.6
    },
    {
      "id": 5,
      "name": "Converse Chuck Taylor",
      "category": "shoes",
      "price": 650,
      "description": "Iconic classic canvas sneakers for everyday wear.",
      "image": "https://imgs.search.brave.com/smv1fwsp2tyyp1Eef3pMbjT9ihWPJlvxsr7elhHKRy0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtc3RhdGljLm55/a2FhLmNvbS9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvdHI6dy0y/MjAsaC0yMjAsY20t/cGFkX3Jlc2l6ZS9k/LzMvZDNkZGUyNUFP/Q09OVkUwMDAwMjI5/OV8xLmpwZw",
      "rating": 4.4
    },
    {
      "id": 6,
      "name": "Air Jordan Retro 1",
      "category": "shoes",
      "price": 1700,
      "description": "Legendary basketball shoes with timeless design.",
      "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
      "rating": 4.8
    },
    {
      "id": 7,
      "name": "Organic Almonds",
      "category": "food",
      "price": 150,
      "description": "Raw, unsalted premium California almonds.",
      "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=500&fit=crop",
      "rating": 4.8
    },
    {
      "id": 8,
      "name": "Greek Yogurt",
      "category": "food",
      "price": 80,
      "description": "Protein-rich creamy Greek yogurt for health-conscious eaters.",
      "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=500&fit=crop",
      "rating": 4.6
    },
    {
      "id": 9,
      "name": "Wild Blueberries",
      "category": "food",
      "price": 120,
      "description": "Fresh antioxidant-rich wild blueberries for smoothies and baking.",
      "image": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500&h=500&fit=crop",
      "rating": 4.7
    },
    {
      "id": 10,
      "name": "Honey Raw",
      "category": "food",
      "price": 180,
      "description": "Pure unfiltered raw honey from local apiaries.",
     "image": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500&h=500&fit=crop",
      "rating": 4.9
    },
    {
      "id": 11,
      "name": "Whole Wheat Bread",
      "category": "food",
      "price": 60,
      "description": "Freshly baked whole grain bread with natural ingredients.",
      "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop",
      "rating": 4.5
    },
    {
      "id": 12,
      "name": "Organic Coffee Beans",
      "category": "food",
      "price": 140,
      "description": "Premium single-origin organic coffee beans with rich flavor.",
      "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=500&fit=crop",
      "rating": 4.8
    },
    {
      "id": 13,
      "name": "Wilson Tennis Racket",
      "category": "sports",
      "price": 850,
      "description": "Lightweight frame for better control and power.",
      "image": "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=500&fit=crop",
      "rating": 4.2
    },
    {
      "id": 14,
      "name": "Spalding Basketball",
      "category": "sports",
      "price": 350,
      "description": "Official indoor/outdoor basketball with superior grip.",
      "image": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&h=500&fit=crop",
      "rating": 4.6
    },
    {
      "id": 15,
      "name": "Yoga Mat Premium",
      "category": "sports",
      "price": 450,
      "description": "Non-slip eco-friendly yoga mat for all fitness levels.",
      "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
      "rating": 4.7
    },
    {
      "id": 16,
      "name": "Dumbbells Set",
      "category": "sports",
      "price": 1200,
      "description": "Adjustable dumbbells set for home gym training.",
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
      "rating": 4.5
    },
    {
      "id": 17,
      "name": "Swimming Goggles",
      "category": "sports",
      "price": 250,
      "description": "UV-protection swimming goggles with anti-fog coating.",
      "image": "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=500&h=500&fit=crop",
      "rating": 4.4
    },
    {
      "id": 18,
      "name": "Fitness Tracker Watch",
      "category": "sports",
      "price": 1600,
      "description": "Advanced sports watch with heart rate monitor and GPS.",
      "image": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=500&fit=crop",
      "rating": 4.8
    }
  ]

  export default data;