import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹5,000",
    period: "/month",
    featured: false,
    features: [
      "12 Posts per month",
      "2 Reels",
      "Basic photo editing",
      "Caption + hashtags",
      "Bio optimization",
      "Basic customer reply support",
    ],
  },
  {
    name: "Standard",
    price: "₹10,000",
    period: "/month",
    featured: true,
    features: [
      "16 Posts per month",
      "5 Reels",
      "Photo editing",
      "Caption + hashtags",
      "Bio optimization",
      "Customer reply support",
      "Graphic posts",
      "Story posting",
      "Thumbnail for reels",
    ],
  },
  {
    name: "Premium",
    price: "₹15,000",
    period: "/month",
    featured: false,
    features: [
      "20+ Posts per month",
      "8 Reels",
      "Professional Branding",
      "Ad Campaign Setup",
      "Bio optimization",
      "Customer reply support",
      "Graphic posts",
      "Story posting",
      "Thumbnail for reels",
      "Local Influencer collaboration",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Packages</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Choose your <span className="text-gradient">growth plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-xl p-6 border transition-all duration-300 flex flex-col ${pkg.featured
                  ? "bg-background border-primary glow-shadow scale-[1.02]"
                  : "bg-background border-border hover:border-primary/30"
                }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-semibold tracking-wider uppercase">
                  Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold text-gradient">{pkg.price}</span>
                <span className="text-muted-foreground text-sm font-body">{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto block text-center py-3 rounded-lg font-display font-semibold text-sm transition-all ${pkg.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                  }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
