import { MapPin, Phone, Clock, ShoppingBag, Star, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo.png";

const mostLoved = [
  { name: "Cappuccino",           price: "₹130" },
  { name: "Lotus Biscoff Coffee", price: "₹160" },
  { name: "Tiramisu Frappe",      price: "₹200" },
  { name: "Cheese Fondue",        price: "₹320" },
  { name: "Dark Choco Frappe",    price: "₹170" },
  { name: "Tandoori Paneer Pizza",price: "₹360" },
];

const quickLinks = [
  { label: "Home",       href: "#home" },
  { label: "Highlights", href: "#highlights" },
  { label: "Menu",       href: "#menu" },
  { label: "About",      href: "#about" },
  { label: "Gallery",    href: "#gallery" },
  { label: "Reviews",    href: "#reviews" },
  { label: "Contact",    href: "#contact" },
];

const Footer = () => (
  <footer className="bg-espresso-gradient text-cafe-cream">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <img src={logoImg} alt="Love Over Coffee" className="h-10 w-auto object-contain brightness-0 invert" />
            <span className="font-heading text-xl font-bold">Love Over Coffee</span>
          </div>
          <p className="text-[9px] tracking-[0.22em] uppercase text-cafe-cream/50 font-body mb-3">
            Vijay Nagar · Indore
          </p>
          <p className="text-cafe-latte/58 text-sm font-body leading-relaxed mb-4">
            A cozy vegetarian café where every cup is brewed with love and every bite
            is made for memories.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-5">
            {[1,2,3,4].map(s => <Star key={s} className="w-3.5 h-3.5 fill-cafe-gold text-cafe-gold"/>)}
            <Star className="w-3.5 h-3.5 fill-cafe-gold/40 text-cafe-gold/40"/>
            <span className="text-[12px] font-body font-semibold text-cafe-cream ml-0.5">4.8</span>
            <span className="text-[11px] text-cafe-latte/55 font-body">· 805 reviews</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-2.5">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-cafe-cream/10 flex items-center justify-center hover:bg-cafe-cream/20 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-cafe-cream/10 flex items-center justify-center hover:bg-cafe-cream/20 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-[13px] font-semibold mb-4 text-cafe-cream">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-cafe-latte/58 text-sm font-body hover:text-cafe-cream transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Most Loved */}
        <div>
          <h4 className="font-heading text-[13px] font-semibold mb-4 text-cafe-cream">Most Loved</h4>
          <ul className="space-y-2.5">
            {mostLoved.map(({ name, price }) => (
              <li key={name}>
                <a
                  href="#highlights"
                  className="flex items-center justify-between group hover:text-cafe-cream transition-colors duration-200"
                >
                  <span className="text-cafe-latte/58 text-sm font-body group-hover:text-cafe-cream transition-colors">
                    {name}
                  </span>
                  <span className="text-cafe-gold/70 text-[12px] font-body font-semibold">{price}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#menu"
                className="inline-flex items-center gap-1 text-cafe-gold text-[12px] font-body font-semibold hover:text-cafe-gold-light transition-colors mt-1"
              >
                View full menu
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Order */}
        <div>
          <h4 className="font-heading text-[13px] font-semibold mb-4 text-cafe-cream">Contact & Order</h4>
          <ul className="space-y-3 mb-5">
            <li>
              <a
                href="https://maps.google.com/?q=PLOT+NO+11+Scheme+No+51+Scheme+No+113+Indore+Madhya+Pradesh+452010&t=k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 text-cafe-latte/58 text-sm font-body hover:text-cafe-cream transition-colors"
              >
                <MapPin className="w-4 h-4 text-cafe-gold shrink-0 mt-0.5" />
                Plot No 11, Vijay Nagar,<br />Scheme 113, Indore, MP 452010
              </a>
            </li>
            <li>
              <a
                href="tel:+919329697769"
                className="flex gap-2 text-cafe-latte/58 text-sm font-body hover:text-cafe-cream transition-colors"
              >
                <Phone className="w-4 h-4 text-cafe-gold shrink-0" />
                +91 93296 97769
              </a>
            </li>
            <li className="flex gap-2 text-cafe-latte/58 text-sm font-body">
              <Clock className="w-4 h-4 text-cafe-gold shrink-0 mt-0.5" />
              <span>9:30 AM – 12:30 AM<br />Open every day</span>
            </li>
          </ul>

          {/* Order links */}
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-cafe-cream/40 font-body">Order Online</p>
            <a
              href="https://www.zomato.com/indore/love-over-coffee-vijay-nagar/order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[12px] font-body font-semibold text-[#E23744] hover:text-[#ff5a66] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order on Zomato
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://www.swiggy.com/city/indore/love-over-coffee-vijay-nagar-rest764666?is_retargeting=true&media_source=GooglePlaceOrder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[12px] font-body font-semibold text-[#FC8019] hover:text-[#ffab5c] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order on Swiggy
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cafe-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-cafe-latte/38 text-[11px] font-body">
          © {new Date().getFullYear()} Love Over Coffee, Indore. All rights reserved.
        </p>
        <p className="text-cafe-latte/38 text-[11px] font-body">
          100% Vegetarian · ₹200–400 for two · Made with love in Indore
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
