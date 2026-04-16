import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (dir: "left" | "right") => {
    if (!tabsRef.current) return;
    tabsRef.current.scrollBy({ left: dir === "left" ? -160 : 160, behavior: "smooth" });
  };

  const activeMenu = useMemo(() => {
    const cat = menuCategories.find((c) => c.id === activeCategory);
    if (!cat) return [];
    if (!searchQuery.trim()) return cat.items;
    return cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  const allFilteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return menuCategories.flatMap((cat) =>
      cat.items
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => ({ ...item, categoryName: cat.name }))
    );
  }, [searchQuery]);

  const displayItems = searchQuery.trim() ? allFilteredItems ?? [] : activeMenu;

  return (
    <section id="menu" className="py-20 md:py-28 bg-cafe-bone">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-cafe-olive text-[11px] font-body tracking-[0.22em] uppercase mb-3 block">
            Our Menu
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
            Crafted with Care, Served with Love
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto mb-7">
            From aromatic espressos to cheesy comfort food — explore our complete vegetarian menu.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search menu items…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-background border border-border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cafe-olive/25 shadow-cafe transition-all"
            />
          </div>
        </motion.div>

        {/* Category tabs row */}
        {!searchQuery.trim() && (
          <div className="relative mb-8">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-cafe-bone to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-cafe-bone to-transparent z-10 pointer-events-none" />

            {/* Scroll buttons */}
            <button
              onClick={() => scrollTabs("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-background shadow-cafe flex items-center justify-center hover:bg-muted transition-colors lg:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => scrollTabs("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-background shadow-cafe flex items-center justify-center hover:bg-muted transition-colors lg:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>

            <div
              ref={tabsRef}
              className="flex overflow-x-auto gap-2 pb-1 px-8 lg:px-0 scrollbar-hide lg:flex-wrap lg:justify-center"
            >
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-[12px] font-body font-semibold tracking-wide transition-all duration-300 shrink-0 active:scale-[0.97] ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-cafe"
                      : "bg-background text-muted-foreground hover:bg-muted border border-border/60"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Menu items */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={searchQuery.trim() ? "search" : activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {displayItems.length === 0 ? (
                <p className="text-center text-muted-foreground py-16 font-body">
                  No items found for "{searchQuery}"
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {(displayItems as Array<{
                    name: string;
                    price: number;
                    description: string;
                    categoryName?: string;
                  }>).map((item, i) => (
                    <motion.div
                      key={`${item.name}-${i}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.025, 0.3) }}
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-background hover:bg-muted/60 border border-border/40 hover:border-cafe-olive/20 hover:shadow-cafe transition-all duration-300"
                    >
                      {/* Veg dot */}
                      <div className="mt-1 shrink-0">
                        <div className="w-4 h-4 rounded-sm border-2 border-green-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-green-600" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2 mb-0.5">
                          <h4 className="font-heading text-[14px] font-semibold text-foreground leading-snug">
                            {item.name}
                          </h4>
                          <span className="font-body text-sm font-bold text-cafe-olive shrink-0">
                            ₹{item.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-body leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                        {item.categoryName && (
                          <span className="inline-block mt-1 text-[9px] uppercase tracking-widest text-cafe-olive/70 font-body">
                            {item.categoryName}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Veg only notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-body text-muted-foreground bg-background border border-border/50 px-4 py-2 rounded-full">
            <Leaf className="w-3.5 h-3.5 text-green-600" />
            100% Vegetarian Menu — All items are pure veg
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
