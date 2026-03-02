import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} Satyadarshi Pradhan. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/919861688952"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
