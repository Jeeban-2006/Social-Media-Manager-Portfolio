import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import client2 from "@/assets/work/client2.png";
import client3 from "@/assets/work/client3.png";
import client4 from "@/assets/work/client4.png";

import creative1 from "@/assets/work/creative1.jpg";
import creative2 from "@/assets/work/creative2.jpg";
import creative3 from "@/assets/work/creative3.jpg";
import creative4 from "@/assets/work/creative4.jpg";
import creative5 from "@/assets/work/creative5.jpg";
import creative6 from "@/assets/work/creative6.jpg";
import creative7 from "@/assets/work/creative7.jpg";
import creative8 from "@/assets/work/creative8.jpg";
import creative9 from "@/assets/work/creative9.jpg";
import creative10 from "@/assets/work/creative10.jpg";
import creative11 from "@/assets/work/creative11.jpg";
import creative12 from "@/assets/work/creative12.jpg";
import creative13 from "@/assets/work/creative13.jpg";
import creative14 from "@/assets/work/creative14.jpg";
import creative15 from "@/assets/work/creative15.jpg";
import creative16 from "@/assets/work/creative16.jpg";
import creative17 from "@/assets/work/creative17.jpg";
import creative18 from "@/assets/work/creative18.jpg";
import creative19 from "@/assets/work/creative19.jpg";
import creative20 from "@/assets/work/creative20.jpg";
import creative21 from "@/assets/work/creative21.jpg";
import creative22 from "@/assets/work/creative22.jpg";
import creative23 from "@/assets/work/creative23.jpg";
import creative24 from "@/assets/work/creative24.jpg";
import creative25 from "@/assets/work/creative25.jpg";
import creative26 from "@/assets/work/creative26.jpg";
import creative27 from "@/assets/work/creative27.jpg";

const clients = [
  {
    name: "Kishor Bhaina Mutton",
    desc: "Famous Mutton Since 1991",
    img: client2,
    instagram: "https://www.instagram.com/kishor_hotel_official?igsh=bDVtdmdrYzludWE4",
    handle: "@kishor_hotel_official",
  },
  {
    name: "Mirrors by Sushree",
    desc: "Exclusive Unisex Salon",
    img: client3,
    instagram: "https://www.instagram.com/mirrorsbysushree?igsh=MTltcXQ3NzY1ODhlbQ==",
    handle: "@mirrorsbysushree",
  },
  {
    name: "Ardance",
    desc: "Innovating Your Dreamscapes",
    img: client4,
    instagram: "https://www.instagram.com/ardenceofficial?igsh=NnRlcjFjOXVwbjV1",
    handle: "@ardenceofficial",
  },
];

const allCreatives = [
  creative16, creative11, creative21, creative12, creative5, creative6,
  creative7, creative8, creative9, creative10, creative1, creative4,
  creative13, creative14, creative15, creative17, creative18, creative19,
  creative20, creative2, creative22, creative23, creative24,
  creative25, creative26, creative27, creative3
];

const INITIAL_COUNT = 6;

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCreatives = showAll ? allCreatives : allCreatives.slice(0, INITIAL_COUNT);
  const remaining = allCreatives.length - INITIAL_COUNT;
  const extraPhotos = allCreatives.slice(INITIAL_COUNT);

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/4 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Client <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        {/* Client profile cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:glow-shadow transition-all duration-400 cursor-pointer no-underline block"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover object-[center_8%] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-body tracking-wide">{client.handle}</span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{client.name}</h3>
                  <p className="text-muted-foreground text-xs font-body mt-0.5">{client.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0 ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Creative Work header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Content & <span className="text-gradient">Creative Work</span>
          </h3>
          <p className="text-muted-foreground text-sm font-body mt-2">
            {allCreatives.length} photos total
          </p>
        </motion.div>

        {/* Creative grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* First 6 — always visible, animate in on scroll */}
          {allCreatives.slice(0, INITIAL_COUNT).map((img, i) => (
            <motion.div
              key={`initial-${i}`}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:glow-shadow relative group"
            >
              <img
                src={img}
                alt={`Creative work ${i + 1}`}
                className="w-full h-full object-cover object-top aspect-square group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}

          {/* Extra photos — animate in when showAll becomes true */}
          <AnimatePresence>
            {showAll && extraPhotos.map((img, i) => (
              <motion.div
                key={`extra-${i}`}
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:glow-shadow relative group"
              >
                <img
                  src={img}
                  alt={`Creative work ${INITIAL_COUNT + i + 1}`}
                  className="w-full h-full object-cover object-top aspect-square group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / See Less button */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "less" : "more"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  // Scroll back to the creative work section smoothly
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  setShowAll(true);
                }
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 text-foreground font-display font-semibold text-sm transition-all duration-300 group"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  See More ({remaining} more photos)
                </>
              )}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkSection;
