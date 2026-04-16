import { motion } from "framer-motion";
import heroCoffee from "@/assets/hero-coffee.jpg";
import { Star, ShoppingBag } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCoffee}
          alt="Premium coffee setting at Love Over Coffee, Indore"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/82 via-foreground/55 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      {/* Ambient blobs */}
      <div
        className="absolute top-24 right-16 w-40 h-40 rounded-full bg-cafe-gold/8 blur-3xl animate-float hidden lg:block"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-36 right-36 w-28 h-28 rounded-full bg-cafe-tan/12 blur-2xl animate-float hidden lg:block"
        style={{ animationDelay: "1.8s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.25)} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-gold/18 text-cafe-cream text-[11px] font-body tracking-[0.2em] uppercase border border-cafe-gold/28">
              <span className="w-1.5 h-1.5 rounded-full bg-cafe-gold animate-pulse" />
              100% Vegetarian · Vijay Nagar, Indore
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.42)}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-cafe-cream leading-[1.08] mb-6"
          >
            Freshly Brewed.{" "}
            <em className="italic text-cafe-gold-light not-italic" style={{ fontStyle: "italic" }}>
              Warmly Served.
            </em>{" "}
            Made for Conversations.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fadeUp(0.58)}
            className="text-cafe-latte/88 text-base sm:text-lg font-body leading-relaxed mb-10 max-w-lg"
          >
            A cozy vegetarian café in Vijay Nagar, Indore — serving specialty coffee,
            signature frappes, shakes, pizzas, sandwiches, desserts, and comfort food
            in a warm, stylish setting.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div {...fadeUp(0.72)} className="flex flex-wrap gap-3 mb-5">
            <a
              href="#menu"
              className="bg-cafe-gold text-cafe-espresso px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-cafe-gold-light active:scale-[0.98] transition-all duration-300 shadow-lg shadow-cafe-gold/20"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="border border-cafe-cream/45 text-cafe-cream px-7 py-3.5 rounded-full font-body font-medium text-sm hover:bg-cafe-cream/12 active:scale-[0.98] transition-all duration-300"
            >
              Reserve a Table
            </a>
          </motion.div>

          {/* Order platforms */}
          <motion.div {...fadeUp(0.84)} className="flex flex-wrap gap-2.5 mb-10">
            <a
              href="https://www.zomato.com/indore/love-over-coffee-vijay-nagar/order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E23744]/90 text-white px-5 py-2.5 rounded-full font-body font-semibold text-xs hover:bg-[#E23744] active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com/city/indore/love-over-coffee-vijay-nagar-rest764666?is_retargeting=true&media_source=GooglePlaceOrder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FC8019]/90 text-white px-5 py-2.5 rounded-full font-body font-semibold text-xs hover:bg-[#FC8019] active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order on Swiggy
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-8 pt-7 border-t border-cafe-cream/14"
          >
            {[
              {
                num: "4.8",
                icon: <div className="flex gap-0.5">{[1,2,3,4].map(s=><Star key={s} className="w-3 h-3 fill-cafe-gold text-cafe-gold"/>)}<Star className="w-3 h-3 fill-cafe-gold/40 text-cafe-gold/40"/></div>,
                label: "805 Google Reviews",
              },
              { num: "100+", label: "Menu Items" },
              { num: "₹200–400", label: "For Two" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl text-cafe-cream">{stat.num}</div>
                {stat.icon && <div className="mb-0.5">{stat.icon}</div>}
                <div className="text-[10px] text-cafe-latte/58 font-body tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cafe-cream/45 text-[10px] tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cafe-cream/45 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
