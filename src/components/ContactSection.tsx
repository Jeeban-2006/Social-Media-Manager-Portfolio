import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long (max 1000 chars)"),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `Hi Satyadarshi! 👋\n\nName: ${result.data.name}\nEmail: ${result.data.email}\n\nMessage:\n${result.data.message}`
      );
      window.open(`https://wa.me/919861688952?text=${text}`, "_blank");
      toast.success("Opening WhatsApp... your message is ready to send!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 500);
  };

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's grow your <span className="text-gradient">business 🚀</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto">
            Looking to increase engagement, reach, and customers? Let's talk about a strategy built just for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="tel:9861688952"
              className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Phone</p>
                <p className="text-foreground font-display font-semibold text-sm">9861688952</p>
              </div>
            </a>

            <a
              href="mailto:satyadarshipradhan@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Email</p>
                <p className="text-foreground font-display font-semibold text-sm break-all">satyadarshipradhan@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Location</p>
                <p className="text-foreground font-display font-semibold text-sm">Bhubaneswar, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.instagram.com/satyas_click?igsh=YnB4b3c5ODh4bGhq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919861688952"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
              {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Tell me about your business and what you need..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 glow-shadow"
            >
              {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
