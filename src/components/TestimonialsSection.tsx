import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kishor Hotel",
    role: "Restaurant Owner",
    text: "Satyadarshi completely transformed our Instagram presence. We went from barely any engagement to getting regular customers through social media. His strategy-driven approach really works!",
    rating: 5,
    initials: "KH",
  },
  {
    name: "Sushree",
    role: "Mirrors Salon, Owner",
    text: "The quality of reels and posts he creates is outstanding. Our followers grew significantly and we started getting DM inquiries daily. Highly recommend his services!",
    rating: 5,
    initials: "SU",
  },
  {
    name: "Career Height",
    role: "Education Platform",
    text: "Professional, creative, and always on time. He understands the local market perfectly and knows how to make content that resonates with the audience. Great value for money!",
    rating: 5,
    initials: "CH",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What clients <span className="text-gradient">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden group glass-card"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-8 group-hover:opacity-15 transition-opacity duration-300">
                <Quote className="w-10 h-10 text-primary" strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <span className="text-primary font-display font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{t.role}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
