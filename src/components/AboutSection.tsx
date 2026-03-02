import { motion } from "framer-motion";
import { Instagram, TrendingUp, Palette, Megaphone, MessageCircle } from "lucide-react";

const skills = [
  { icon: TrendingUp, label: "Reels Growth Strategy" },
  { icon: Palette, label: "Content Planning" },
  { icon: Instagram, label: "Branding" },
  { icon: Megaphone, label: "Ads Management" },
  { icon: MessageCircle, label: "Customer Engagement" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              I help local businesses{" "}
              <span className="text-gradient">grow on Instagram</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Hi, I'm Satyadarshi Pradhan — a Social Media Manager helping local businesses grow through strategic Instagram marketing.
              I don't just post — I create growth systems that drive real engagement, reach, and customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-3"
          >
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display font-medium text-foreground">{skill.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
