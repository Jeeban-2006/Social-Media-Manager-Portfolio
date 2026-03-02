import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's grow your <span className="text-gradient">business 🚀</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-12 max-w-xl mx-auto">
            Looking to increase engagement, reach, and customers? Let's talk about a strategy built just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          <a
            href="tel:9861688952"
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-display font-semibold">9861688952</span>
          </a>

          <a
            href="mailto:satyadarshipradhan@gmail.com"
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-display font-semibold text-sm break-all">satyadarshipradhan@gmail.com</span>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-display font-semibold">Bhubaneswar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
