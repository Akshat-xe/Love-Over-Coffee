import cappuccino from "@/assets/menu/cappuccino.jpg";
import biscoffCoffee from "@/assets/menu/biscoff-coffee.jpg";
import tiramisuFrappe from "@/assets/menu/tiramisu-frappe.jpg";
import cheeseFondue from "@/assets/menu/cheese-fondue.jpg";
import lemonMintTea from "@/assets/menu/lemon-mint-tea.jpg";
import darkChocoFrappe from "@/assets/menu/dark-choco-frappe.jpg";
import paoBhajiFondue from "@/assets/menu/pao-bhaji-fondue.jpg";
import cafeFrappe from "@/assets/menu/cafe-frappe.jpg";
import pennePasta from "@/assets/menu/penne-pasta.jpg";
import tandooriPizza from "@/assets/menu/tandoori-pizza.jpg";
import periPeriFries from "@/assets/menu/peri-peri-fries.jpg";
import penneArrabiata from "@/assets/menu/penne-arrabiata.jpg";
import grilledSandwich from "@/assets/menu/grilled-sandwich.jpg";
import doubleChocoHazelnut from "@/assets/menu/double-choco-hazelnut.jpg";
import orangeEspresso from "@/assets/menu/orange-espresso.jpg";

export interface HighlightItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tag: string;
  category: string;
  filterCategory: string;
  featured?: boolean;
}

export const highlightItems: HighlightItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Smooth, balanced espresso crowned with velvety airy foam — the soul of every coffee moment.",
    price: 130,
    image: cappuccino,
    tag: "Best Seller",
    category: "Coffee Favourite",
    filterCategory: "Coffee",
    featured: true,
  },
  {
    id: 2,
    name: "Lotus Biscoff Coffee",
    description: "Warm cappuccino kissed with the caramelised crunch of Lotus Biscoff — rich, nostalgic, irresistible.",
    price: 160,
    image: biscoffCoffee,
    tag: "Signature",
    category: "Coffee Favourite",
    filterCategory: "Coffee",
    featured: true,
  },
  {
    id: 3,
    name: "Tiramisu Frappe",
    description: "A dessert-like cold coffee layered with rich tiramisu depth and brownie chunks — pure indulgence.",
    price: 200,
    image: tiramisuFrappe,
    tag: "Must Try",
    category: "Cold Coffee Bestseller",
    filterCategory: "Cold Coffee",
    featured: true,
  },
  {
    id: 4,
    name: "Cheese Fondue",
    description: "Melted spiced cheese paired with crispy bread fingers — the café's most indulgent comfort pick.",
    price: 320,
    image: cheeseFondue,
    tag: "Chef Pick",
    category: "Comfort Special",
    filterCategory: "Snacks",
    featured: true,
  },
  {
    id: 5,
    name: "Lemon Mint Ice Tea",
    description: "Crisp, cool, and refreshing with a citrusy lift and fresh mint — the perfect thirst quencher.",
    price: 140,
    image: lemonMintTea,
    tag: "Popular",
    category: "Refreshing Cooler",
    filterCategory: "Refreshers",
    featured: true,
  },
  {
    id: 6,
    name: "Dark Chocolate Frappe",
    description: "Deep, decadent dark chocolate swirled into creamy cold coffee — bold, bittersweet, unforgettable.",
    price: 170,
    image: darkChocoFrappe,
    tag: "Best Seller",
    category: "Cold Coffee Bestseller",
    filterCategory: "Cold Coffee",
    featured: true,
  },
  {
    id: 7,
    name: "Pao Bhaji Fondue",
    description: "A beloved Indian classic reimagined as a fondue — spiced bhaji with buttery pao for dipping.",
    price: 240,
    image: paoBhajiFondue,
    tag: "Chef Pick",
    category: "Comfort Special",
    filterCategory: "Snacks",
  },
  {
    id: 8,
    name: "Café Frappe",
    description: "Rich, creamy, and irresistibly smooth — the classic cold coffee that started it all.",
    price: 150,
    image: cafeFrappe,
    tag: "Popular",
    category: "Cold Coffee Bestseller",
    filterCategory: "Cold Coffee",
  },
  {
    id: 9,
    name: "Penne Mix Sauce Pasta",
    description: "Silky penne in a harmonious blend of tangy tomato and creamy white sauce with fresh herbs.",
    price: 360,
    image: pennePasta,
    tag: "Must Try",
    category: "Pasta Favourite",
    filterCategory: "Pasta",
  },
  {
    id: 10,
    name: "Tandoori Paneer Pizza",
    description: "Smoky tandoori paneer, capsicum and onion on a cheesy base with tandoori mayo — recommended.",
    price: 360,
    image: tandooriPizza,
    tag: "Must Try",
    category: "Pizza Must-Try",
    filterCategory: "Pizza",
  },
  {
    id: 11,
    name: "Peri Peri Fries",
    description: "Golden crispy fries dusted with fiery peri peri spices — addictive from the very first bite.",
    price: 180,
    image: periPeriFries,
    tag: "Popular",
    category: "Snack Pick",
    filterCategory: "Snacks",
  },
  {
    id: 12,
    name: "Penne Arrabiata Red",
    description: "Spicy homemade tomato sauce with garlic heat and chilli flakes — Italian passion on a plate.",
    price: 310,
    image: penneArrabiata,
    tag: "Signature",
    category: "Pasta Favourite",
    filterCategory: "Pasta",
  },
  {
    id: 13,
    name: "Grilled Vegetable Sandwich",
    description: "Fresh veggies and melted cheese pressed between toasted brown bread — warm, wholesome, satisfying.",
    price: 160,
    image: grilledSandwich,
    tag: "Popular",
    category: "Snack Pick",
    filterCategory: "Snacks",
  },
  {
    id: 14,
    name: "Double Chocolate Hazelnut",
    description: "A decadent collision of dark chocolate and roasted hazelnut in every creamy sip.",
    price: 190,
    image: doubleChocoHazelnut,
    tag: "Signature",
    category: "Cold Coffee Bestseller",
    filterCategory: "Cold Coffee",
  },
  {
    id: 15,
    name: "Orange Black Coffee Espresso",
    description: "Bold espresso meets fresh citrus — a surprisingly vibrant and refreshing twist on your daily shot.",
    price: 140,
    image: orangeEspresso,
    tag: "Signature",
    category: "Coffee Favourite",
    filterCategory: "Coffee",
  },
];

export const filterCategories = ["All", "Coffee", "Cold Coffee", "Snacks", "Pizza", "Pasta", "Refreshers"];
