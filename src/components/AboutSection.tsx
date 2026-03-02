import { motion } from "framer-motion";
import { Instagram, TrendingUp, Palette, Megaphone, MessageCircle } from "lucide-react";

const skills = [
  { icon: TrendingUp, label: "Reels Growth Strategy", desc: "Viral-first content strategy that explodes reach." },
  { icon: Palette, label: "Content Planning", desc: "Monthly calendar with consistent branded visuals." },
  { icon: Instagram, label: "Branding", desc: "Cohesive identity across all touchpoints." },
  { icon: Megaphone, label: "Ads Management", desc: "Targeted local campaigns that convert." },
  { icon: MessageCircle, label: "Customer Engagement", desc: "DM & comment handling that builds loyalty." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3"
            >
              About Me
            </motion.p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              I help local businesses{" "}
              <span className="text-gradient">grow on Instagram</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-body mb-8">
              Hi, I'm <span className="text-foreground font-semibold">Satyadarshi Pradhan</span> — a Social Media Manager helping local businesses grow through strategic Instagram marketing.
              I don't just post — I create growth systems that drive real engagement, reach, and customers.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/25 text-primary font-display font-semibold text-sm hover:bg-primary/20 transition-colors"
            >
              Work with me →
            </motion.a>
          </motion.div>

          {/* Right: skill cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                variants={itemVariants}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group glass-card gradient-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-display font-semibold text-foreground text-sm block">{skill.label}</span>
                  <span className="text-muted-foreground text-xs font-body">{skill.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
