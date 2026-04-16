import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Star, ShoppingBag, ChevronRight } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Highlights", href: "#highlights" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/92 backdrop-blur-xl border-b border-border/40 shadow-[0_2px_24px_-4px_hsl(25_40%_20%/0.10)] py-2.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src={logoImg}
              alt="Love Over Coffee logo"
              className={`h-10 w-auto object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
            <div className="flex flex-col">
              <span
                className={`font-heading text-[18px] md:text-[20px] font-bold leading-tight transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-cafe-cream"
                }`}
              >
                Love Over Coffee
              </span>
              <span
                className={`text-[8px] tracking-[0.28em] uppercase font-body transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-cafe-cream/65"
                }`}
              >
                Vijay Nagar · Indore
              </span>
            </div>
          </a>

          {/* Google rating — desktop */}
          <div
            className={`hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? "bg-cafe-gold/8 border-cafe-gold/25 text-foreground"
                : "bg-white/8 border-white/20 text-cafe-cream"
            }`}
          >
            {[1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-3 h-3 fill-cafe-gold text-cafe-gold" />
            ))}
            <Star className="w-3 h-3 fill-cafe-gold/40 text-cafe-gold/40" />
            <span className={`text-[11px] font-body font-bold ml-0.5 ${scrolled ? "text-foreground" : "text-cafe-cream"}`}>
              4.8
            </span>
            <span className={`text-[10px] font-body ${scrolled ? "text-muted-foreground" : "text-cafe-cream/55"}`}>
              · 805 reviews
            </span>
          </div>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium font-body transition-colors duration-300 tracking-wide relative group/link ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-cafe-cream/80 hover:text-cafe-cream"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-cafe-gold scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+919329697769"
              className={`flex items-center gap-1.5 text-[13px] font-body font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-cafe-cream/70 hover:text-cafe-cream"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
            <a
              href="https://www.zomato.com/indore/love-over-coffee-vijay-nagar/order"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-body font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-[#E23744] text-white hover:bg-[#c72f3b] shadow-sm"
                  : "bg-cafe-cream/15 text-cafe-cream border border-cafe-cream/30 hover:bg-cafe-cream/25"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-cafe-cream hover:bg-cafe-cream/12"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Premium mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[59] bg-foreground/25 backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[82vw] max-w-[320px] bg-background flex flex-col shadow-[−24px_0_80px_-8px_hsl(25_40%_20%/0.18)]"
            >
              {/* Drawer header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-2.5">
                  <img src={logoImg} alt="Love Over Coffee logo" className="h-9 w-auto object-contain" />
                  <div>
                    <span className="font-heading text-[16px] font-bold text-foreground block leading-tight">
                      Love Over Coffee
                    </span>
                    <span className="text-[8px] tracking-[0.25em] uppercase text-muted-foreground font-body block mt-0.5">
                      Vijay Nagar · Indore
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors mt-0.5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Rating strip */}
              <div className="flex items-center gap-2 px-6 py-3 border-b border-border/30 bg-cafe-gold/5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-cafe-gold text-cafe-gold" />
                  ))}
                  <Star className="w-3.5 h-3.5 fill-cafe-gold/40 text-cafe-gold/40" />
                </div>
                <span className="text-sm font-body font-bold text-foreground">4.8</span>
                <span className="text-xs text-muted-foreground font-body">· 805 Google reviews</span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-1 px-4 py-4 gap-0.5 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.28 }}
                    className="flex items-center justify-between py-3 px-4 rounded-xl font-body text-[15px] font-medium text-foreground hover:bg-muted hover:text-cafe-olive transition-all duration-200 group/item"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover/item:text-cafe-olive transition-colors" />
                  </motion.a>
                ))}
              </nav>

              {/* Order CTAs */}
              <div className="px-5 pb-6 pt-3 border-t border-border/40 space-y-2.5">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-body px-1 mb-1">
                  Order Online
                </p>
                <a
                  href="https://www.zomato.com/indore/love-over-coffee-vijay-nagar/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#E23744] text-white px-5 py-3 rounded-full font-body font-semibold text-sm hover:bg-[#c72f3b] active:scale-[0.98] transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order on Zomato
                </a>
                <a
                  href="https://www.swiggy.com/city/indore/love-over-coffee-vijay-nagar-rest764666?is_retargeting=true&media_source=GooglePlaceOrder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FC8019] text-white px-5 py-3 rounded-full font-body font-semibold text-sm hover:bg-[#e07016] active:scale-[0.98] transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order on Swiggy
                </a>
                <a
                  href="tel:+919329697769"
                  className="flex items-center justify-center gap-2 w-full border border-border text-foreground px-5 py-3 rounded-full font-body font-medium text-sm hover:bg-muted active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +91 93296 97769
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
