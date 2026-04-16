import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    initials: "PS",
    rating: 5,
    text: "The Biscoff Cappuccino is a game-changer! Warm ambiance, great music, and the coziest vibes. Our go-to spot for weekend evenings.",
    date: "2 weeks ago",
    color: "bg-cafe-olive",
  },
  {
    name: "Arjun M.",
    initials: "AM",
    rating: 5,
    text: "Best café in Vijay Nagar, hands down. The Tiramisu Frappe and Cheese Fondue are absolutely divine. Staff is super friendly.",
    date: "1 month ago",
    color: "bg-cafe-espresso",
  },
  {
    name: "Sneha R.",
    initials: "SR",
    rating: 4,
    text: "Love the aesthetic and the menu variety. The Tandoori Paneer Pizza is a must-try. Perfect for a date night or catching up with friends.",
    date: "3 weeks ago",
    color: "bg-cafe-tan",
    textColor: "text-cafe-espresso",
  },
  {
    name: "Vikram T.",
    initials: "VT",
    rating: 5,
    text: "As a remote worker, this is my office now. Great Wi-Fi, amazing cold coffee, and they never rush you. The Peri Peri Fries are addictive!",
    date: "1 week ago",
    color: "bg-cafe-olive",
  },
  {
    name: "Ananya K.",
    initials: "AK",
    rating: 5,
    text: "Visited for the first time and instantly became a regular. The Dark Chocolate Frappe is pure indulgence. 10/10 recommend!",
    date: "5 days ago",
    color: "bg-amber-600",
  },
  {
    name: "Rohit P.",
    initials: "RP",
    rating: 4,
    text: "Great coffee, lovely interiors, and the vegetarian menu is surprisingly diverse. The Ferrero Rocher Shake is worth every rupee.",
    date: "2 weeks ago",
    color: "bg-cafe-espresso-light",
  },
];

const StarRow = ({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) => {
  const cls = size === "sm" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${cls} ${s <= rating ? "fill-cafe-gold text-cafe-gold" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
};

const Reviews = () => (
  <section id="reviews" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-cafe-olive text-[11px] font-body tracking-[0.22em] uppercase mb-3 block">
          Guest Reviews
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
          What Our Guests Say
        </h2>

        {/* Rating summary card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-5 bg-cafe-bone rounded-2xl px-8 py-5 shadow-cafe border border-border/40">
          <div className="flex flex-col items-center">
            <span className="font-heading text-5xl font-bold text-foreground leading-none">4.8</span>
            <StarRow rating={5} />
            <span className="text-[11px] text-muted-foreground font-body mt-1">805 reviews</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border/60" />
          <div className="flex flex-col items-start gap-1.5">
            {[
              { label: "5 stars", pct: 82 },
              { label: "4 stars", pct: 12 },
              { label: "3 stars", pct: 4 },
              { label: "2 stars", pct: 1 },
              { label: "1 star",  pct: 1 },
            ].map(({ label, pct }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground font-body w-10 text-right shrink-0">
                  {label}
                </span>
                <div className="w-28 h-1.5 rounded-full bg-border/50 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-cafe-gold"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground font-body w-6">{pct}%</span>
              </div>
            ))}
          </div>
          <div className="hidden sm:block w-px h-12 bg-border/60" />
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/64px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-8 h-8 object-contain"
            />
            <span className="text-[10px] font-body text-muted-foreground text-center leading-tight">
              Verified on<br />Google Maps
            </span>
          </div>
        </div>
      </motion.div>

      {/* Review cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="bg-card rounded-2xl p-5 shadow-cafe hover:shadow-cafe-lg transition-all duration-300 border border-border/30 flex flex-col"
          >
            {/* Quote icon */}
            <Quote className="w-6 h-6 text-cafe-gold/30 mb-3 shrink-0" />

            <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-4">
              "{review.text}"
            </p>

            {/* Footer */}
            <div className="flex items-center gap-3 pt-3 border-t border-border/40">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${review.color}`}
              >
                <span className={`font-heading text-[11px] font-bold ${review.textColor || "text-cafe-cream"}`}>
                  {review.initials}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-body text-[13px] font-semibold text-foreground truncate">
                  {review.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <StarRow rating={review.rating} size="xs" />
                  <span className="text-[10px] text-muted-foreground font-body">{review.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="https://maps.google.com/?q=Love+Over+Coffee+Vijay+Nagar+Indore"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-body text-cafe-olive hover:text-cafe-espresso transition-colors border-b border-cafe-olive/30 hover:border-cafe-espresso/50 pb-0.5"
        >
          Read all 805 reviews on Google
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Reviews;
