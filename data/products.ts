import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "jmm-001",
    slug: "air-velocity-pro-runner",
    name: "Air Velocity Pro Runner",
    brand: "Apex Speed",
    category: "sports",
    gender: "Men",
    price: 6499,
    originalPrice: 8499,
    rating: 4.9,
    reviewCount: 38,
    isNew: true,
    isSale: true,
    isTrending: true,
    isFeatured: true,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Stealth Black", hex: "#111827" },
      { name: "Titanium Slate", hex: "#475569" },
      { name: "Arctic White", hex: "#F8FAFC" },
    ],
    images: [
      "/images/hero-sneaker.webp",
      "/images/hero-sneaker-2.webp",
      "/images/shoe-side.webp",
      "/images/shoe-front.webp",
      "/images/shoe-back.webp",
      "/images/shoe-3q-front.webp",
    ],
    thumbnail: "/images/hero-sneaker.webp",
    description: "Engineered for maximum responsiveness and high-energy propulsion. Featuring dynamic Zoom-Air cushioning, breathable hyper-mesh upper, and high-abrasion rubber outsoles tailored for all-day athletic performance and street swagger.",
    features: [
      "Dynamic Air Cushioning midsole for shock absorption",
      "Breathable engineered hyper-mesh upper",
      "Reinforced TPU heel counter for lateral stability",
      "Anti-slip waffle rubber outsole with flex grooves",
      "Ortholite memory foam ergonomic insole",
    ],
    specs: {
      upperMaterial: "Engineered Breathable Mesh & TPU",
      soleMaterial: "High-Abrasion Dual-Density Rubber",
      closureType: "Lace-up Lock System",
      weight: "285g (Size 42)",
      origin: "Imported Premium Grade",
      cushioning: "Dynamic Air Cloud"
    },
    inStock: true,
    stockCount: 18,
    tags: ["Running", "Sports", "Best Seller", "Air Cushion", "Men"],
    reviews: [
      {
        id: "rev-1",
        userName: "Muhammad Bilal",
        userCity: "Timergara",
        rating: 5,
        date: "2 days ago",
        comment: "Masha'Allah zabardast shoe hai. Bohot comfortable aur grip bohot achi hai. Jan Mega Mall ki delivery b bohot fast thi!",
        verified: true
      },
      {
        id: "rev-2",
        userName: "Usman Khan",
        userCity: "Dir Lower",
        rating: 5,
        date: "1 week ago",
        comment: "Excellent quality. Same as shown in the pictures. Highly recommended for daily morning runs.",
        verified: true
      }
    ]
  },
  {
    id: "jmm-002",
    slug: "royal-kaptaan-leather-peshawari",
    name: "Royal Kaptaan Chappal (Handcrafted)",
    brand: "Jan Heritage",
    category: "heritage",
    gender: "Men",
    price: 4999,
    originalPrice: 6500,
    rating: 5.0,
    reviewCount: 64,
    isNew: false,
    isSale: true,
    isTrending: true,
    isFeatured: true,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Mustard Tan", hex: "#C88A36" },
      { name: "Jet Black Leather", hex: "#111111" },
      { name: "Oxblood Cherry", hex: "#631A24" },
    ],
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop",
    description: "Authentic double-stitched genuine calf leather Kaptaan Chappal handcrafted by master artisans. Features a durable tire-sole base with soft memory-padded footbed for regal comfort during Eid, weddings, and formal Pashtun occasions.",
    features: [
      "100% Full-grain genuine calfskin leather",
      "Hand-stitched reinforced seam construction",
      "Recycled aerospace-grade tyre grip rubber sole",
      "Comfort-padded soft leather footbed",
      "Adjustable brass buckle strap",
    ],
    specs: {
      upperMaterial: "100% Genuine Full-Grain Cow Leather",
      soleMaterial: "Master Grip Heavy-Duty Tyre Sole",
      closureType: "Buckle / Slip-on",
      weight: "440g",
      origin: "KPK Master Craftsmen Guild",
      cushioning: "Dual-Layer Ortho Leather Cushion"
    },
    inStock: true,
    stockCount: 25,
    tags: ["Peshawari", "Kaptaan", "Heritage", "Leather", "Traditional", "Eid Collection"],
    reviews: [
      {
        id: "rev-3",
        userName: "Engr. Farhan Shah",
        userCity: "Timergara",
        rating: 5,
        date: "3 days ago",
        comment: "The finishing of this Kaptaan chappal is masterclass. Genuine leather smell and super durable tyre sole. Jan Mega Mall zindabad!",
        verified: true
      },
      {
        id: "rev-4",
        userName: "Tariq Mehmood",
        userCity: "Peshawar",
        rating: 5,
        date: "2 weeks ago",
        comment: "Bought two pairs for Eid. Perfect fitting and supreme comfort.",
        verified: true
      }
    ]
  },
  {
    id: "jmm-003",
    slug: "urban-retro-high-top-sneakers",
    name: "Urban Street Court High-Top",
    brand: "RetroKicks",
    category: "sports",
    gender: "Men",
    price: 7999,
    originalPrice: 9999,
    rating: 4.8,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    isTrending: true,
    isFeatured: true,
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: "Panda Black & White", hex: "#1E293B" },
      { name: "Royal Blue & White", hex: "#1D4ED8" },
      { name: "Shadow Grey", hex: "#475569" },
    ],
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop",
    description: "Classic 90s basketball DNA fused with modern streetwear aesthetics. Premium synthetic leather panels, padded ankle collar, and encapsulated air cushioning keep you commanding attention on and off the court.",
    features: [
      "Padded high-top collar for maximum ankle support",
      "Perforated toe box for thermal breathability",
      "Thick cupsole with pivot circle traction pattern",
      "Sturdy metallic eyelets with flat woven laces",
    ],
    specs: {
      upperMaterial: "Premium Matte PU Leather",
      soleMaterial: "Solid Vulcanized Rubber Cupsole",
      closureType: "Lace-up High Ankle",
      weight: "390g",
      origin: "Imported Edition",
      cushioning: "Air-Sole Encapsulated"
    },
    inStock: true,
    stockCount: 12,
    tags: ["Sneakers", "High Top", "Streetwear", "Basketball", "Men"],
    reviews: [
      {
        id: "rev-5",
        userName: "Hamza Jan",
        userCity: "Timergara",
        rating: 5,
        date: "5 days ago",
        comment: "Looks 100% like Jordan 1! Everyone in university was asking where I got these from.",
        verified: true
      }
    ]
  },
  {
    id: "jmm-004",
    slug: "cloudfoam-luxe-women-runner",
    name: "Cloudfoam Luxe Ultralight",
    brand: "Nova Step",
    category: "women",
    gender: "Women",
    price: 5499,
    originalPrice: 6999,
    rating: 4.9,
    reviewCount: 51,
    isNew: true,
    isSale: true,
    isTrending: true,
    isFeatured: true,
    sizes: [36, 37, 38, 39, 40, 41],
    colors: [
      { name: "Pastel Lavender", hex: "#C4B5FD" },
      { name: "Rose Quartz", hex: "#FBCFE8" },
      { name: "Chalk White", hex: "#F3F4F6" },
    ],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    description: "Designed specifically for women seeking featherlight weight and cloud-like cushioning. Ideal for morning walks, gym workouts, casual college days, and hospital shifts.",
    features: [
      "Ultra-soft Cloudfoam EVA rebound midsole",
      "Sock-like Primeknit flexible upper",
      "Reinforced arch contour support",
      "Machine washable with quick-dry technology",
    ],
    specs: {
      upperMaterial: "Seamless Primeknit Mesh",
      soleMaterial: "Featherlight EVA Phylon",
      closureType: "Slip-on / Elastic Lace",
      weight: "195g",
      origin: "Imported",
      cushioning: "Triple Density Cloudfoam"
    },
    inStock: true,
    stockCount: 15,
    tags: ["Women", "Running", "Lightweight", "Pastel", "Gym"],
    reviews: [
      {
        id: "rev-6",
        userName: "Ayesha Bibi",
        userCity: "Timergara",
        rating: 5,
        date: "4 days ago",
        comment: "Bohot pyara shoe hai! Extremely light and soft. Fits true to size.",
        verified: true
      }
    ]
  },
  {
    id: "jmm-005",
    slug: "executive-oxford-italian-leather",
    name: "Executive Italian Derby Oxford",
    brand: "Jan Prestige",
    category: "formal",
    gender: "Men",
    price: 8999,
    originalPrice: 11999,
    rating: 4.9,
    reviewCount: 29,
    isNew: false,
    isSale: true,
    isTrending: false,
    isFeatured: true,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: [
      { name: "Burnished Walnut Tan", hex: "#78350F" },
      { name: "Classic Midnight Black", hex: "#0F172A" },
    ],
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
    description: "The pinnacle of sartorial elegance. Hand-burnished genuine leather Derby shoes with sleek chiselled toe silhouette and stacked leather heels for corporate meetings, weddings, and formal dinners.",
    features: [
      "Full grain hand-polished bovine leather",
      "Goodyear welted edge construction",
      "Breathable genuine sheepskin lining",
      "Anti-skid rubberized heel inserts",
    ],
    specs: {
      upperMaterial: "100% Genuine Italian Finished Leather",
      soleMaterial: "Composite Leather Sole with Rubber Traction",
      closureType: "Waxed Blind Eyelet Lace-up",
      weight: "460g",
      origin: "Artisanal Line",
      cushioning: "Latex Memory Insole"
    },
    inStock: true,
    stockCount: 14,
    tags: ["Formal", "Oxford", "Derby", "Men", "Leather", "Office"],
    reviews: [
      {
        id: "rev-7",
        userName: "Dr. Asadullah",
        userCity: "Timergara",
        rating: 5,
        date: "1 week ago",
        comment: "Top tier formal shoe. The shine and finish are unmatched. Perfect for office and formal events.",
        verified: true
      }
    ]
  },
  {
    id: "jmm-006",
    slug: "velvet-elegance-pointed-stiletto",
    name: "Velvet Elegance Pointed Pump",
    brand: "Glow & Co",
    category: "women",
    gender: "Women",
    price: 4499,
    originalPrice: 5999,
    rating: 4.7,
    reviewCount: 22,
    isNew: true,
    isSale: true,
    isTrending: false,
    isFeatured: false,
    sizes: [36, 37, 38, 39, 40],
    colors: [
      { name: "Royal Emerald", hex: "#064E3B" },
      { name: "Burgundy Velvet", hex: "#4C0519" },
      { name: "Champagne Shimmer", hex: "#D4AF37" },
    ],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    description: "Make a striking statement with this 3.5-inch slender pointed toe stiletto. Finished in rich plush velvet with padded ball-of-foot cushioning to keep you comfortable throughout wedding festivities.",
    features: [
      "Plush micro-velvet exterior",
      "Reinforced steel shank heel stability",
      "Padded metatarsal arch support",
      "Non-marking textured sole",
    ],
    specs: {
      upperMaterial: "Plush Velvet / Metallic Accent",
      soleMaterial: "Anti-Slip TPU",
      closureType: "Slip-on Heel",
      weight: "260g",
      origin: "Designer Line",
      cushioning: "High-Density Foam Insole"
    },
    inStock: true,
    stockCount: 9,
    tags: ["Women", "Heels", "Wedding", "Formal", "Party Wear"],
  },
  {
    id: "jmm-007",
    slug: "speedster-neon-running-trainer",
    name: "Speedster Volt Performance Runner",
    brand: "Apex Speed",
    category: "sports",
    gender: "Men",
    price: 5999,
    originalPrice: 7499,
    rating: 4.8,
    reviewCount: 31,
    isNew: true,
    isSale: false,
    isTrending: true,
    isFeatured: true,
    sizes: [40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Neon Volt / Black", hex: "#84CC16" },
      { name: "Hyper Orange", hex: "#FF5A1F" },
      { name: "Midnight Navy", hex: "#1E3A8A" },
    ],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
    description: "Engineered for speed and agility. Featuring responsive aerodynamic sculpting, high-grip lateral rubber lugs, and high-visibility neon details perfect for running and turf sports.",
    features: [
      "Aerodynamic curved sole geometry for explosive push-off",
      "High-viz neon reflective safety accents",
      "Grip lugs for all-terrain stability",
      "Breathable tongue and collar padding",
    ],
    specs: {
      upperMaterial: "Poly-Knit Hydrophobic Weave",
      soleMaterial: "Dual-Density Phylon + Carbon Rubber",
      closureType: "Speed Lace System",
      weight: "270g",
      origin: "Imported Performance Series",
      cushioning: "VoltRebound Foam"
    },
    inStock: true,
    stockCount: 20,
    tags: ["Sports", "Men", "Neon", "Running", "Fitness"],
  },
  {
    id: "jmm-008",
    slug: "junior-sprint-lightup-kids-sneaker",
    name: "Junior Sprint Turbo Glow Sneaker",
    brand: "KidzFleet",
    category: "kids",
    gender: "Kids",
    price: 3299,
    originalPrice: 4200,
    rating: 4.9,
    reviewCount: 45,
    isNew: true,
    isSale: true,
    isTrending: true,
    isFeatured: true,
    sizes: [28, 29, 30, 31, 32, 33, 34, 35],
    colors: [
      { name: "Electric Blue / Cyan", hex: "#06B6D4" },
      { name: "Candy Pink / Purple", hex: "#EC4899" },
      { name: "Flame Red", hex: "#EF4444" },
    ],
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop",
    description: "Built tough for playground adventures! Featuring easy hook-and-loop Velcro strap, lightweight shock-absorbing bounce sole, and anti-scuff toe bumper designed for active kids.",
    features: [
      "Quick dual-strap Velcro closure — no tied laces needed",
      "Impact-resistant reinforced rubber toe guard",
      "Flexible featherlight sole with non-slip grips",
      "Odor-resistant breathable insole liner",
    ],
    specs: {
      upperMaterial: "Durable Breathable Canvas & Synthetic",
      soleMaterial: "Ultra-Light Flex Foam Rubber",
      closureType: "Velcro Straps",
      weight: "150g",
      origin: "Kids Collection",
      cushioning: "KidBounce Soft Foam"
    },
    inStock: true,
    stockCount: 30,
    tags: ["Kids", "Boys", "Girls", "School", "Playground"],
    reviews: [
      {
        id: "rev-8",
        userName: "Sajid Ali",
        userCity: "Timergara",
        rating: 5,
        date: "3 days ago",
        comment: "Bete ko bohot pasand aya. Easy to wear and great build quality.",
        verified: true
      }
    ]
  },
  {
    id: "jmm-009",
    slug: "classic-leather-chelsea-boot",
    name: "Artisan Leather Chelsea Boot",
    brand: "Jan Prestige",
    category: "formal",
    gender: "Men",
    price: 9499,
    originalPrice: 12500,
    rating: 4.8,
    reviewCount: 19,
    isNew: false,
    isSale: true,
    isTrending: false,
    isFeatured: false,
    sizes: [40, 41, 42, 43, 44],
    colors: [
      { name: "Espresso Brown", hex: "#451A03" },
      { name: "Onyx Black", hex: "#09090B" },
    ],
    images: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop",
    description: "A timeless wardrobe staple. Crafted with premium oiled cowhide leather, flexible elastic side gussets, and sturdy pull tabs for effortless pull-on luxury. Perfect for winter in Dir Lower and northern KPK.",
    features: [
      "Handcrafted oiled nubuck leather",
      "Heavy-duty elastic stretch side panels",
      "Rugged commando lugged rubber sole",
      "Cushioned leather footbed for all-day comfort",
    ],
    specs: {
      upperMaterial: "100% Oiled Cowhide Leather",
      soleMaterial: "Lugged Winter-Proof Rubber",
      closureType: "Slip-on / Elastic Gusset",
      weight: "520g",
      origin: "Heritage Bootmaker Workshop",
      cushioning: "Full Leather Ortho Bed"
    },
    inStock: true,
    stockCount: 8,
    tags: ["Boots", "Chelsea", "Men", "Winter", "Leather"],
  },
  {
    id: "jmm-010",
    slug: "comfort-stride-foam-sandals",
    name: "Comfort Stride Ortho Slide",
    brand: "Jan Comfort",
    category: "sandals",
    gender: "Unisex",
    price: 2499,
    originalPrice: 3200,
    rating: 4.9,
    reviewCount: 57,
    isNew: false,
    isSale: true,
    isTrending: true,
    isFeatured: false,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: [
      { name: "Desert Sand", hex: "#D6D3D1" },
      { name: "Charcoal Black", hex: "#27272A" },
      { name: "Olive Green", hex: "#3F6212" },
    ],
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&auto=format&fit=crop",
    description: "Thick recovery foam footbed sculpted to cradle your arch. Waterproof, anti-slip, and ultra-durable for home wear, casual outings, and post-workout relaxation.",
    features: [
      "1.5-inch thick high-rebound EVA sole",
      "Deep heel cup and ergonomic toe bar support",
      "Waterproof and easy to wash",
      "Anti-slip textured wave tread",
    ],
    specs: {
      upperMaterial: "Molded EVA Monoblock",
      soleMaterial: "High Density EVA Grip",
      closureType: "Slip-on Slide",
      weight: "160g",
      origin: "Comfort Line",
      cushioning: "Recovery Plush EVA"
    },
    inStock: true,
    stockCount: 40,
    tags: ["Sandals", "Slides", "Casual", "Comfort", "Unisex"],
  },
  {
    id: "jmm-011",
    slug: "retro-skate-court-low",
    name: "Classic Street Canvas Skate Low",
    brand: "RetroKicks",
    category: "sports",
    gender: "Unisex",
    price: 3999,
    originalPrice: 4999,
    rating: 4.6,
    reviewCount: 34,
    isNew: false,
    isSale: true,
    isTrending: false,
    isFeatured: false,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: [
      { name: "Monochrome Black & White", hex: "#18181B" },
      { name: "Navy Blue", hex: "#1E3A8A" },
      { name: "Crimson Red", hex: "#DC2626" },
    ],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    description: "Heavy 12oz cotton canvas low-top sneaker with vulcanized gum rubber foxing tape. Effortless casual styling for college, travel, and day-to-day wear.",
    features: [
      "Heavy duty double-stitched 12oz canvas upper",
      "Padded canvas collar and tongue",
      "Vulcanized waffle gum sole",
      "Rust-proof metal lace grommets",
    ],
    specs: {
      upperMaterial: "12oz Premium Canvas",
      soleMaterial: "Vulcanized Gum Rubber",
      closureType: "Lace-up",
      weight: "340g",
      origin: "Casual Everyday",
      cushioning: "Cushioned Drop-in Insole"
    },
    inStock: true,
    stockCount: 22,
    tags: ["Canvas", "Skate", "Casual", "Sneakers", "Unisex"],
  },
  {
    id: "jmm-012",
    slug: "charsi-heritage-norzi-chappal",
    name: "Authentic Norozi Special Chappal",
    brand: "Jan Heritage",
    category: "heritage",
    gender: "Men",
    price: 5499,
    originalPrice: 7000,
    rating: 5.0,
    reviewCount: 48,
    isNew: true,
    isSale: false,
    isTrending: true,
    isFeatured: true,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: "Glossy Brown", hex: "#7C2D12" },
      { name: "Matte Raven Black", hex: "#000000" },
    ],
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop",
    description: "Famous Norozi design renowned across Khyber Pakhtunkhwa. Triple-folded pure buffalo leather with heavy hand embroidery along the central seam, custom crafted for prestigious traditional attire.",
    features: [
      "Hand-carved Norozi floral pattern along arch",
      "Heavy duty double tyre sole with brass nails",
      "Padded leather insole tailored for foot support",
      "Pure organic oil dyed leather",
    ],
    specs: {
      upperMaterial: "100% Pure Buffalo Leather",
      soleMaterial: "Reinforced Genuine Tyre Sole",
      closureType: "Slip-on / Buckle",
      weight: "510g",
      origin: "KPK Heritage Line",
      cushioning: "Padded Buffalo Hide"
    },
    inStock: true,
    stockCount: 16,
    tags: ["Heritage", "Norozi", "Peshawari", "Traditional", "Men"],
  }
];

export const CATEGORIES_DATA = [
  {
    id: "men",
    name: "Men's Collection",
    subtitle: "Athletic, Formal & Casual",
    count: 8,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop",
    slug: "men",
  },
  {
    id: "women",
    name: "Women's Footwear",
    subtitle: "Heels, Flats & Runners",
    count: 5,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    slug: "women",
  },
  {
    id: "heritage",
    name: "Heritage & Peshawari",
    subtitle: "Kaptaan & Norozi Chappals",
    count: 4,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop",
    slug: "heritage",
  },
  {
    id: "sports",
    name: "Sports & Running",
    subtitle: "High-Performance Trainers",
    count: 6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    slug: "sports",
  },
  {
    id: "kids",
    name: "Kids & Youth",
    subtitle: "Durable & Play-Ready",
    count: 3,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop",
    slug: "kids",
  },
  {
    id: "formal",
    name: "Executive Formal",
    subtitle: "Oxfords, Boots & Loafers",
    count: 4,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
    slug: "formal",
  }
];

export const BRANDS = [
  "Apex Speed",
  "Jan Heritage",
  "RetroKicks",
  "Nova Step",
  "Jan Prestige",
  "Glow & Co",
  "KidzFleet",
  "Jan Comfort",
];

// Helper Query Functions (1:1 API mock ready)
export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug || p.id === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getTrendingProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isTrending);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.isNew);
}

export function getRelatedProducts(currentId: string, category: string): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== currentId && (p.category === category || p.isFeatured)
  ).slice(0, 4);
}

export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
