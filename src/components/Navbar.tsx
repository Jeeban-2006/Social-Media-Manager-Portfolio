import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-xl text-foreground group"
        >
          S<span className="text-primary group-hover:text-primary/80 transition-colors">.</span>P
        </motion.a>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}

          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border">
            <motion.a
              href="https://www.instagram.com/satyadarshi_official?igsh=MTFjbjN1ZHlwMW81NQ=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
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
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-body border-b border-border/50 last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-1">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919861688952" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
