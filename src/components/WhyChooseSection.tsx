import { motion } from "framer-motion";
import { BarChart3, MapPin, Sparkles, FileText, Wallet, Headphones } from "lucide-react";

const reasons = [
  { icon: BarChart3, text: "Strategy-Driven Instagram Growth" },
  { icon: MapPin, text: "Local Market Understanding & Targeted Reach" },
  { icon: Sparkles, text: "High-Quality Reels, Posts & Branding" },
  { icon: FileText, text: "Transparent Monthly Analytics & Reports" },
  { icon: Wallet, text: "Affordable Plans with Premium Results" },
  { icon: Headphones, text: "Personal Attention & Fast Communication" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Why Choose Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Not a normal <span className="text-gradient">marketing company</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border text-left hover:border-primary/30 transition-colors"
            >
              <r.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground font-body text-sm">{r.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
