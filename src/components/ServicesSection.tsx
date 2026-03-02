import { motion } from "framer-motion";
import { Layout, Film, MessageSquare, Target, Users, Brush } from "lucide-react";

const services = [
  { icon: Layout, title: "Build & Optimize Instagram Page", desc: "Professional page setup with optimized bio, highlights, and branding." },
  { icon: Film, title: "Monthly Posts, Reels & Stories", desc: "Consistent, high-quality content that drives engagement and reach." },
  { icon: MessageSquare, title: "Customer Reply Handling", desc: "Timely and professional responses to DMs and comments." },
  { icon: Target, title: "Instagram Ads Management", desc: "Targeted ad campaigns to reach your ideal local audience." },
  { icon: Users, title: "Local Influencer Collaboration", desc: "Strategic partnerships with local influencers for maximum reach." },
  { icon: Brush, title: "Professional Branding", desc: "Cohesive visual identity that makes your brand stand out." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">What I Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Services that <span className="text-gradient">drive results</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:glow-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
