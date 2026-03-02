import { motion } from "framer-motion";
import { Instagram, MessageCircle, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border relative overflow-hidden">
      {/* Main footer content */}
      <div className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg text-foreground">
              S<span className="text-primary">.</span>P
            </span>
            <span className="text-border">|</span>
            <p className="text-muted-foreground text-sm font-body">
              © {new Date().getFullYear()} Satyadarshi Pradhan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.instagram.com/satyadarshi_official?igsh=MTFjbjN1ZHlwMW81NQ=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://wa.me/919861688952"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
