import mishkaki from "@/assets/mishkaki.jpg";
import prawns from "@/assets/prawns.jpg";
import tbone from "@/assets/tbone.jpg";
import paneer from "@/assets/paneer.jpg";
import tikkaroll from "@/assets/tikkaroll.jpg";
import bhajia from "@/assets/bhajia.jpg";
import chai from "@/assets/chai.jpg";
import fish from "@/assets/fish.jpg";
import biryani from "@/assets/biryani.jpg";
import iftar from "@/assets/iftar.jpg";

export type SpiceLevel = 0 | 1 | 2 | 3;
export type Category = "Starters" | "Grills" | "Mains" | "Swahili" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // TSh
  category: Category;
  spice: SpiceLevel;
  image: string;
  tag?: "Signature" | "New" | "Popular";
}

export const CATEGORIES: Category[] = ["Starters", "Grills", "Mains", "Swahili", "Drinks"];

export const MENU: MenuItem[] = [
  { id: "1", name: "Maru Bhajia", description: "Crispy potato fritters with secret-recipe green chutney.", price: 8000, category: "Starters", spice: 1, image: bhajia, tag: "Popular" },
  { id: "2", name: "Paneer Tikka", description: "Charcoal-grilled cottage cheese marinated in yogurt & spices.", price: 14000, category: "Starters", spice: 2, image: paneer },
  { id: "3", name: "Sgr Chicken Tikka Roll", description: "Smoky chicken wrapped in fresh naan with onion & chutney.", price: 16000, category: "Starters", spice: 2, image: tikkaroll, tag: "New" },
  { id: "4", name: "Mishkaki Platter", description: "House-marinated beef skewers seared over open flame.", price: 22000, category: "Grills", spice: 2, image: mishkaki, tag: "Signature" },
  { id: "5", name: "T-Bone Steak", description: "28-day aged T-bone, basted with rosemary butter.", price: 38000, category: "Grills", spice: 1, image: tbone, tag: "Signature" },
  { id: "6", name: "Crispy Prawns", description: "Coastal prawns, crisp-fried with tamarind-chili glaze.", price: 28000, category: "Grills", spice: 3, image: prawns },
  { id: "7", name: "Pan-Seared Fish Fillet", description: "Local catch, lemon-herb butter, charred greens.", price: 26000, category: "Mains", spice: 1, image: fish },
  { id: "8", name: "Swahili Chicken Biryani", description: "Fragrant basmati slow-cooked with spiced chicken & raisins.", price: 18000, category: "Swahili", spice: 2, image: biryani, tag: "Popular" },
  { id: "9", name: "Ramadhan Iftar Buffet", description: "Seasonal spread of Swahili, Indian & Arabic favourites.", price: 30000, category: "Swahili", spice: 2, image: iftar },
  { id: "10", name: "Karak Chai", description: "Slow-brewed spiced tea, served the SoulMeats way.", price: 3500, category: "Drinks", spice: 0, image: chai },
];

export const REVIEWS = [
  { name: "Davina", time: "4 months ago", rating: 5, text: "Very good place for a chilling night 🫰🏾 good vibe, very spacious, the food was 10/10." },
  { name: "Aisha", time: "3 months ago", rating: 5, text: "Amazing and mind blowing. The food was absolutely spectacular and for a baffling price. Every bite felt magical." },
  { name: "Hassan", time: "6 months ago", rating: 5, text: "Open-air seating is super comfortable, a great place to relax — and you can even watch the big matches on screen." },
  { name: "Maryam", time: "6 months ago", rating: 4, text: "Lovely place with nice food featuring local Swahili, Indian and Arabic. Iftar buffet during Ramadhan is wonderful." },
  { name: "Khalid", time: "3 months ago", rating: 5, text: "Beautiful, thoughtfully designed, and truly lives up to the name 'Open Air'. An evening to remember." },
  { name: "Sara", time: "a month ago", rating: 5, text: "Great customer service, excellent recommendations and almost no wait time. Perfect for friends or family." },
];
