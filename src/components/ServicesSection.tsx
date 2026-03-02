import { motion, type Variants } from "framer-motion";
import { Layout, Film, MessageSquare, Target, Users, Brush } from "lucide-react";

const services = [
  { icon: Layout, title: "Build & Optimize Instagram Page", desc: "Professional page setup with optimized bio, highlights, and branding." },
  { icon: Film, title: "Monthly Posts, Reels & Stories", desc: "Consistent, high-quality content that drives engagement and reach." },
  { icon: MessageSquare, title: "Customer Reply Handling", desc: "Timely and professional responses to DMs and comments." },
  { icon: Target, title: "Instagram Ads Management", desc: "Targeted ad campaigns to reach your ideal local audience." },
  { icon: Users, title: "Local Influencer Collaboration", desc: "Strategic partnerships with local influencers for maximum reach." },
  { icon: Brush, title: "Professional Branding", desc: "Cohesive visual identity that makes your brand stand out." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-card/30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">What I Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Services that <span className="text-gradient">drive results</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:glow-shadow relative overflow-hidden gradient-border"
            >
              {/* Card corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[60px] group-hover:bg-primary/10 transition-colors duration-300" />

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2 text-foreground relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed relative z-10">{service.desc}</p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
