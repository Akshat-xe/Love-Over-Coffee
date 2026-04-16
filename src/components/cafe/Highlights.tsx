import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Flame } from "lucide-react";
import { highlightItems, filterCategories, type HighlightItem } from "@/data/highlightsData";

const tagStyles: Record<string, string> = {
  "Best Seller": "bg-cafe-gold text-cafe-espresso",
  Signature:     "bg-cafe-olive text-white",
  "Must Try":    "bg-red-500 text-white",
  "Chef Pick":   "bg-amber-500 text-white",
  Popular:       "bg-cafe-espresso text-cafe-cream",
};

const HighlightCard = ({
  item,
  index,
  featured,
}: {
  item: HighlightItem;
  index: number;
  featured?: boolean;
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.05, 0.35), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-cafe hover:shadow-cafe-hover transition-all duration-500 cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={item.image}
          alt={item.name}
          loading={index < 4 ? "eager" : "lazy"}
          width={featured ? 800 : 480}
          height={featured ? 500 : 360}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

        {/* Tag badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-body font-bold tracking-wide shadow-md ${
              tagStyles[item.tag] || tagStyles.Popular
            }`}
          >
            {item.tag === "Best Seller" && <Flame className="w-2.5 h-2.5" />}
            {item.tag === "Must Try" && <Star className="w-2.5 h-2.5 fill-white text-white" />}
            {item.tag}
          </span>
        </div>

        {/* Heart */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
          aria-label={liked ? "Unlike" : "Like"}
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-200 ${
              liked ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Bottom category label */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="text-[9px] uppercase tracking-[0.18em] text-cafe-cream/70 font-body">
            {item.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3
            className={`font-heading font-bold text-foreground leading-snug ${
              featured ? "text-xl" : "text-base"
            }`}
          >
            {item.name}
          </h3>
          <span className="font-body text-sm font-bold text-cafe-olive whitespace-nowrap shrink-0">
            ₹{item.price}
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Highlights = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? highlightItems
      : highlightItems.filter((item) => item.filterCategory === activeFilter);

  return (
    <section id="highlights" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-cafe-olive text-[11px] font-body tracking-[0.22em] uppercase mb-3">
            <Flame className="w-3.5 h-3.5 fill-cafe-olive text-cafe-olive" />
            Crowd Favourites
            <Flame className="w-3.5 h-3.5 fill-cafe-olive text-cafe-olive" />
          </span>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-foreground mb-4 leading-tight">
            Most Loved at{" "}
            <span className="italic text-cafe-olive">Love Over Coffee</span>
          </h2>

          <p className="text-muted-foreground font-body max-w-lg mx-auto text-base leading-relaxed">
            Handpicked signature picks that keep our guests coming back — from
            creamy cappuccinos to cheesy comfort bites.
          </p>

          {/* Trust strip */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-cafe-gold/10 border border-cafe-gold/20">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-cafe-gold text-cafe-gold" />
              ))}
              <Star className="w-3.5 h-3.5 fill-cafe-gold/40 text-cafe-gold/40" />
            </div>
            <span className="text-xs font-body font-semibold text-foreground">
              4.8 · Rated by 805+ guests
            </span>
          </div>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-body font-semibold tracking-wide transition-all duration-300 active:scale-[0.97] ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-cafe"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <HighlightCard
                key={item.id}
                item={item}
                index={i}
                featured={i === 0 && activeFilter === "All"}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-cafe"
          >
            View Full Menu
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
