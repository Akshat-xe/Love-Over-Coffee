import { motion } from "framer-motion";
import cappuccino from "@/assets/menu/cappuccino.jpg";
import biscoffCoffee from "@/assets/menu/biscoff-coffee.jpg";
import tiramisuFrappe from "@/assets/menu/tiramisu-frappe.jpg";
import cheeseFondue from "@/assets/menu/cheese-fondue.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import tandooriPizza from "@/assets/menu/tandoori-pizza.jpg";
import darkChocoFrappe from "@/assets/menu/dark-choco-frappe.jpg";
import cafeAmbiance from "@/assets/cafe-ambiance.jpg";

const images = [
  { src: cafeInterior, alt: "Café interior", span: "md:col-span-2 md:row-span-2" },
  { src: cappuccino, alt: "Latte art cappuccino" },
  { src: biscoffCoffee, alt: "Biscoff coffee" },
  { src: tiramisuFrappe, alt: "Tiramisu frappe" },
  { src: cheeseFondue, alt: "Cheese fondue" },
  { src: tandooriPizza, alt: "Tandoori paneer pizza", span: "md:col-span-2" },
  { src: darkChocoFrappe, alt: "Dark chocolate frappe" },
  { src: cafeAmbiance, alt: "Café ambiance" },
];

const Gallery = () => (
  <section id="gallery" className="py-20 md:py-28 bg-cafe-bone">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-cafe-olive text-xs font-body tracking-[0.2em] uppercase mb-4 block">Gallery</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          The Vibe, The Taste, The Moments
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className={`relative rounded-2xl overflow-hidden group ${img.span || ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
