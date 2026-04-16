import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, TrendingUp } from "lucide-react";

const hours = [
  { day: "Monday",    time: "9:30 AM – 12:30 AM" },
  { day: "Tuesday",   time: "9:30 AM – 12:30 AM" },
  { day: "Wednesday", time: "9:30 AM – 12:30 AM" },
  { day: "Thursday",  time: "9:30 AM – 12:30 AM" },
  { day: "Friday",    time: "9:30 AM – 12:30 AM" },
  { day: "Saturday",  time: "9:30 AM – 12:30 AM" },
  { day: "Sunday",    time: "9:30 AM – 12:30 AM" },
];

const today = new Date().toLocaleDateString("en-IN", { weekday: "long" });

// Popular times (relative busyness 0–100)
const popularTimes = [
  { label: "9 AM",  pct: 15 },
  { label: "11 AM", pct: 30 },
  { label: "1 PM",  pct: 60 },
  { label: "3 PM",  pct: 55 },
  { label: "5 PM",  pct: 75 },
  { label: "7 PM",  pct: 95 },
  { label: "9 PM",  pct: 100 },
  { label: "11 PM", pct: 70 },
  { label: "12 AM", pct: 35 },
];

const mapsUrl =
  "https://maps.google.com/?q=PLOT+NO+11+Scheme+No+51+Scheme+No+113+Indore+Madhya+Pradesh+452010&t=k";

const Contact = () => {
  const currentHour = new Date().getHours();
  const isOpen =
    currentHour >= 9 && !(currentHour === 0 || currentHour >= 1);

  return (
    <section id="contact" className="py-20 md:py-28 bg-cafe-bone">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cafe-olive text-[11px] font-body tracking-[0.22em] uppercase mb-3 block">
            Visit Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
            We'd Love to See You
          </h2>
          <p className="text-muted-foreground font-body max-w-sm mx-auto">
            Find us in Vijay Nagar, Indore — open every day from morning till midnight.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Address — clickable */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 bg-background rounded-2xl p-5 shadow-cafe hover:shadow-cafe-lg border border-border/30 hover:border-cafe-olive/25 transition-all duration-300"
            >
              <MapPin className="w-5 h-5 text-cafe-olive mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">Address</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Plot No 11, Scheme No 51, Scheme No 113,<br />
                  Vijay Nagar, Indore, Madhya Pradesh 452010
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-[11px] text-cafe-olive font-body font-medium">
                  <Navigation className="w-3 h-3" />
                  Open in Google Maps (Satellite View)
                </span>
              </div>
            </a>

            {/* Phone — tap to call */}
            <a
              href="tel:+919329697769"
              className="group flex gap-4 bg-background rounded-2xl p-5 shadow-cafe hover:shadow-cafe-lg border border-border/30 hover:border-cafe-olive/25 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-cafe-olive mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">Phone</h4>
                <span className="text-sm text-cafe-olive font-body font-semibold">
                  +91 93296 97769
                </span>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">Tap to call directly</p>
              </div>
            </a>

            {/* Hours */}
            <div className="bg-background rounded-2xl p-5 shadow-cafe border border-border/30">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-cafe-olive shrink-0" />
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="font-heading text-sm font-semibold text-foreground">Opening Hours</h4>
                  <span
                    className={`text-[10px] font-body font-bold px-2 py-0.5 rounded-full ${
                      isOpen
                        ? "bg-green-100 text-green-700"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {isOpen ? "Open Now" : "Closed"}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className={`flex justify-between items-center text-[13px] font-body rounded-lg px-3 py-2 transition-colors ${
                      today === day
                        ? "bg-cafe-olive/10 text-cafe-olive font-semibold"
                        : "text-muted-foreground hover:bg-muted/40"
                    }`}
                  >
                    <span>{day}</span>
                    <span className={today === day ? "text-cafe-olive" : "text-foreground/80"}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-full font-body font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="tel:+919329697769"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-primary/6 active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right column — map + popular times */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-cafe-lg border border-border/30 h-64 lg:h-72">
              <iframe
                title="Love Over Coffee – Vijay Nagar, Indore"
                src="https://maps.google.com/maps?q=Love+Over+Coffee+Vijay+Nagar+Indore&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Popular times */}
            <div className="bg-background rounded-2xl p-5 shadow-cafe border border-border/30">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-cafe-olive" />
                <h4 className="font-heading text-sm font-semibold text-foreground">
                  Popular Times Today
                </h4>
                <span className="text-[10px] text-muted-foreground font-body ml-auto">
                  Typically busiest 7–10 PM
                </span>
              </div>
              <div className="flex items-end gap-1 h-14">
                {popularTimes.map(({ label, pct }) => (
                  <div key={label} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex items-end justify-center" style={{ height: "44px" }}>
                      <div
                        className={`w-full rounded-t-sm transition-all duration-500 ${
                          pct >= 80
                            ? "bg-cafe-olive"
                            : pct >= 50
                            ? "bg-cafe-olive/60"
                            : "bg-cafe-olive/30"
                        }`}
                        style={{ height: `${pct * 0.44}px` }}
                      />
                    </div>
                    <span className="text-[8px] text-muted-foreground font-body whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground font-body mt-3 leading-relaxed">
                Evening hours (7–11 PM) are peak. Visit mornings or early afternoons for a calmer experience.
              </p>
            </div>

            {/* Plus code */}
            <div className="bg-background rounded-xl p-3.5 border border-border/40 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cafe-olive/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-cafe-olive" />
              </div>
              <div>
                <p className="text-[11px] font-body text-muted-foreground">Plus Code</p>
                <p className="text-[13px] font-body font-semibold text-foreground">QV6J+Q8 Indore, Madhya Pradesh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
