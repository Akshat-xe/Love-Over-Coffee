import { motion } from "framer-motion";
import {
  Car,
  Package,
  Bike,
  ShieldCheck,
  Coffee,
  Heart,
  Wifi,
  Utensils,
  Moon,
  Users,
  Laptop,
  Baby,
  CreditCard,
  ParkingMeter,
  Accessibility,
  Leaf,
  Clock,
  Star,
} from "lucide-react";

type AmenityItem = { icon: React.ElementType; label: string };
type AmenityGroup = { title: string; color: string; items: AmenityItem[] };

const amenityGroups: AmenityGroup[] = [
  {
    title: "Service Modes",
    color: "bg-cafe-espresso/8 border-cafe-espresso/15",
    items: [
      { icon: Utensils,    label: "Dine-in" },
      { icon: Package,     label: "Delivery" },
      { icon: Bike,        label: "Takeaway" },
      { icon: Car,         label: "Drive-through" },
      { icon: Bike,        label: "Kerbside Pickup" },
      { icon: ShieldCheck, label: "No-Contact Delivery" },
    ],
  },
  {
    title: "The Vibe",
    color: "bg-cafe-olive/8 border-cafe-olive/15",
    items: [
      { icon: Coffee, label: "Cozy" },
      { icon: Heart,  label: "Romantic" },
      { icon: Star,   label: "Trendy" },
      { icon: Moon,   label: "Late Night" },
      { icon: Leaf,   label: "Casual" },
      { icon: Star,   label: "Upmarket" },
    ],
  },
  {
    title: "Perfect For",
    color: "bg-amber-500/8 border-amber-500/15",
    items: [
      { icon: Users,  label: "Groups" },
      { icon: Laptop, label: "Laptop Work" },
      { icon: Heart,  label: "Date Night" },
      { icon: Baby,   label: "Kids Welcome" },
      { icon: Users,  label: "Students" },
      { icon: Utensils, label: "Solo Dining" },
    ],
  },
  {
    title: "Food & Drinks",
    color: "bg-green-600/8 border-green-600/15",
    items: [
      { icon: Coffee,  label: "Great Coffee" },
      { icon: Star,    label: "Great Desserts" },
      { icon: Leaf,    label: "Great Tea" },
      { icon: Moon,    label: "Late-Night Food" },
      { icon: Utensils, label: "Quick Bites" },
      { icon: Leaf,    label: "Vegetarian Only" },
    ],
  },
  {
    title: "Dining Options",
    color: "bg-cafe-tan/20 border-cafe-tan/30",
    items: [
      { icon: Coffee,   label: "Breakfast" },
      { icon: Utensils, label: "Brunch" },
      { icon: Utensils, label: "Lunch" },
      { icon: Moon,     label: "Dinner" },
      { icon: Heart,    label: "Dessert" },
      { icon: Clock,    label: "Open till 12:30 AM" },
    ],
  },
  {
    title: "Payments",
    color: "bg-blue-500/8 border-blue-500/15",
    items: [
      { icon: CreditCard, label: "Credit Cards" },
      { icon: CreditCard, label: "Debit Cards" },
      { icon: Star,       label: "Google Pay" },
      { icon: Wifi,       label: "NFC Payments" },
    ],
  },
  {
    title: "Parking",
    color: "bg-slate-500/8 border-slate-500/15",
    items: [
      { icon: ParkingMeter, label: "Free Parking Lot" },
      { icon: Car,          label: "Free Street Parking" },
      { icon: Car,          label: "Plenty of Space" },
    ],
  },
  {
    title: "Accessibility",
    color: "bg-purple-500/8 border-purple-500/15",
    items: [
      { icon: Accessibility, label: "Wheelchair Seating" },
      { icon: Accessibility, label: "Accessible Toilet" },
      { icon: Baby,          label: "High Chairs" },
      { icon: Baby,          label: "Kids' Menu" },
    ],
  },
];

const AmenityChip = ({ icon: Icon, label }: AmenityItem) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background border border-border/50 hover:border-cafe-olive/30 hover:shadow-cafe transition-all duration-200 group">
    <Icon className="w-3.5 h-3.5 text-cafe-olive shrink-0 group-hover:scale-110 transition-transform" />
    <span className="text-[12px] font-body text-foreground/80 leading-none whitespace-nowrap">{label}</span>
  </div>
);

const Experience = () => (
  <section className="py-20 md:py-28 bg-espresso-gradient">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-cafe-gold-light text-[11px] font-body tracking-[0.22em] uppercase mb-3 block">
          The Experience
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cafe-cream mb-4">
          More Than Just a Café
        </h2>
        <p className="text-cafe-latte/70 font-body max-w-xl mx-auto">
          From dine-in ambiance to doorstep delivery — every detail is crafted for your comfort.
        </p>
      </motion.div>

      {/* Amenity groups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {amenityGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: gi * 0.06, duration: 0.5 }}
            className={`rounded-2xl p-4 border ${group.color} backdrop-blur-sm`}
          >
            <h4 className="font-heading text-[13px] font-semibold text-cafe-cream mb-3 tracking-wide">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <AmenityChip key={item.label} {...item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom highlights row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        {[
          { icon: Leaf,        text: "100% Vegetarian" },
          { icon: Clock,       text: "Open 9:30 AM – 12:30 AM" },
          { icon: Star,        text: "4.8 Google Rating" },
          { icon: CreditCard,  text: "All Payments Accepted" },
          { icon: Utensils,    text: "Accepts Reservations" },
          { icon: Wifi,        text: "Free Wi-Fi" },
        ].map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-cafe-cream/10 border border-cafe-cream/15 text-cafe-cream"
          >
            <Icon className="w-4 h-4 text-cafe-gold" />
            <span className="text-[12px] font-body font-medium">{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Experience;
