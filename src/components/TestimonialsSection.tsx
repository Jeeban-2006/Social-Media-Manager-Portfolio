import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kishor Hotel",
    role: "Restaurant Owner",
    text: "Satyadarshi completely transformed our Instagram presence. We went from barely any engagement to getting regular customers through social media. His strategy-driven approach really works!",
    rating: 5,
  },
  {
    name: "Sushree",
    role: "Mirrors Salon, Owner",
    text: "The quality of reels and posts he creates is outstanding. Our followers grew significantly and we started getting DM inquiries daily. Highly recommend his services!",
    rating: 5,
  },
  {
    name: "Career Height",
    role: "Education Platform",
    text: "Professional, creative, and always on time. He understands the local market perfectly and knows how to make content that resonates with the audience. Great value for money!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
