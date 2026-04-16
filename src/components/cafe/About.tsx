import { motion } from "framer-motion";
import { Coffee, Heart, Leaf, Users } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import cafeAmbiance from "@/assets/cafe-ambiance.jpg";

const features = [
  { icon: Coffee, title: "Specialty Coffee", desc: "Carefully brewed espresso-based drinks crafted with precision and passion." },
  { icon: Heart, title: "Made with Love", desc: "Every dish and drink is prepared fresh with quality ingredients and warmth." },
  { icon: Leaf, title: "100% Vegetarian", desc: "A fully vegetarian menu celebrating flavour without compromise." },
  { icon: Users, title: "For Everyone", desc: "Couples, friends, students, remote workers — there's a spot for all." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-cafe-bone">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-cafe-lg">
            <img src={cafeInterior} alt="Love Over Coffee interior" loading="lazy" width={1200} height={800} className="w-full h-80 md:h-[480px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-cafe-lg border-4 border-background z-20 hidden md:block">
            <img src={cafeAmbiance} alt="Cozy café ambiance" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-cafe-gold/10 blur-2xl" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cafe-olive text-xs font-body tracking-[0.2em] uppercase mb-4 block">Our Story</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Where Every Cup Tells a <span className="italic text-cafe-olive">Story</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Nestled in the heart of Vijay Nagar, Indore, Love Over Coffee is more than just a café — it's a feeling.
            A warm corner for late-night conversations, first dates, study marathons, and everything in between.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            From handcrafted espresso to cheesy comfort bites, every item on our menu is made to bring people closer.
            We believe great coffee and warm spaces create the best memories.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-background rounded-xl p-4 shadow-cafe">
                <f.icon className="w-5 h-5 text-cafe-olive mb-2" />
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
