export type ProductCategory =
  | "men"
  | "women"
  | "kids"
  | "sports"
  | "formal"
  | "sandals"
  | "heritage";

export interface ShoeColorVariant {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  userCity: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  gender: "Men" | "Women" | "Kids" | "Unisex";
  price: number; // in PKR
  originalPrice?: number; // in PKR for sale comparison
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isSale?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  sizes: number[]; // EU sizes e.g. [39, 40, 41, 42, 43, 44]
  colors: ShoeColorVariant[];
  images: string[];
  thumbnail: string;
  description: string;
  features: string[];
  specs: {
    upperMaterial: string;
    soleMaterial: string;
    closureType: string;
    weight: string;
    origin?: string;
    cushioning?: string;
  };
  inStock: boolean;
  stockCount: number;
  tags: string[];
  reviews?: ProductReview[];
}

export interface CartItem {
  id: string; // product id + size + color combo
  productId: string;
  name: string;
  slug: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  size: number;
  color: ShoeColorVariant;
  image: string;
  quantity: number;
  maxStock: number;
}

export interface FilterState {
  category: string;
  gender: string;
  brands: string[];
  minPrice: number;
  maxPrice: number;
  sizes: number[];
  inStockOnly: boolean;
  onSaleOnly: boolean;
  sortBy: "featured" | "price-asc" | "price-desc" | "rating" | "newest";
  searchQuery: string;
}
