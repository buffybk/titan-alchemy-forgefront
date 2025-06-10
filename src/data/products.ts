
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  longDescription: string;
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Titan Whey Protein Isolate",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    description: "Premium whey protein isolate for muscle building and recovery",
    longDescription: "Our flagship whey protein isolate delivers 25g of pure protein per serving with minimal carbs and fats. Sourced from grass-fed cows and featuring rapid absorption for optimal muscle recovery and growth.",
    category: "Protein",
    inStock: true
  },
  {
    id: 2,
    name: "Alchemy Pre-Workout",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    description: "High-energy pre-workout formula for intense training sessions",
    longDescription: "Scientifically formulated pre-workout blend featuring caffeine, beta-alanine, and citrulline malate to boost energy, focus, and endurance during your most demanding workouts.",
    category: "Pre-Workout",
    inStock: true
  },
  {
    id: 3,
    name: "Recovery BCAA Complex",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400",
    description: "Essential amino acids for faster muscle recovery",
    longDescription: "Advanced BCAA formula with a 2:1:1 ratio of leucine, isoleucine, and valine, plus added electrolytes for optimal hydration and muscle recovery post-workout.",
    category: "Recovery",
    inStock: true
  },
  {
    id: 4,
    name: "Omega-3 Elite",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    description: "High-potency omega-3 fatty acids for heart and brain health",
    longDescription: "Premium fish oil supplement providing 1000mg of EPA and DHA per serving to support cardiovascular health, brain function, and reduce inflammation.",
    category: "Supplements",
    inStock: true
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    description: "Pure creatine monohydrate for strength and power",
    longDescription: "Micronized creatine monohydrate that dissolves easily and absorbs quickly. Proven to increase strength, power, and muscle mass when combined with resistance training.",
    category: "Strength",
    inStock: true
  },
  {
    id: 6,
    name: "Multivitamin Complete",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400",
    description: "Comprehensive daily vitamin and mineral support",
    longDescription: "Complete multivitamin formula with 23 essential vitamins and minerals specifically dosed for active individuals to support energy, immunity, and overall health.",
    category: "Vitamins",
    inStock: true
  }
];
