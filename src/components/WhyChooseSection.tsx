import { motion } from "framer-motion";
import { BarChart3, MapPin, Sparkles, FileText, Wallet, Headphones } from "lucide-react";

const reasons = [
  { icon: BarChart3, text: "Strategy-Driven Instagram Growth", color: "from-blue-500/20 to-blue-500/5" },
  { icon: MapPin, text: "Local Market Understanding & Targeted Reach", color: "from-green-500/20 to-green-500/5" },
  { icon: Sparkles, text: "High-Quality Reels, Posts & Branding", color: "from-yellow-500/20 to-yellow-500/5" },
  { icon: FileText, text: "Transparent Monthly Analytics & Reports", color: "from-purple-500/20 to-purple-500/5" },
  { icon: Wallet, text: "Affordable Plans with Premium Results", color: "from-primary/20 to-primary/5" },
  { icon: Headphones, text: "Personal Attention & Fast Communication", color: "from-pink-500/20 to-pink-500/5" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
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
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border text-left hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-body text-sm relative z-10 leading-snug">{r.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
