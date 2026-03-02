import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "3x", label: "Avg. Engagement" },
  { value: "1M+", label: "Reach Generated" },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden dot-grid"
    >
      {/* Animated ambient orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full bg-primary/8 blur-[140px] animate-float-slow" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-600/6 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </motion.div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/3 pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary font-display text-xs tracking-[0.25em] uppercase">Social Media Manager</span>
          <Sparkles className="w-3.5 h-3.5 text-primary" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          Satyadarshi
          <br />
          <span className="text-gradient">Pradhan</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          Building digital growth systems for local businesses through
          strategic Instagram marketing, branding &amp; ads.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:opacity-90 transition-opacity glow-shadow relative overflow-hidden shimmer"
          >
            Let's Work Together
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border text-foreground font-display font-semibold text-base hover:bg-secondary hover:border-primary/30 transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground text-xs font-body tracking-wide mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-muted-foreground text-xs font-body tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
