import { motion } from "framer-motion";

import client1 from "@/assets/work/client1.png";
import client2 from "@/assets/work/client2.png";
import client3 from "@/assets/work/client3.png";
import client4 from "@/assets/work/client4.png";
import creative1 from "@/assets/work/creative1.jpg";
import creative2 from "@/assets/work/creative2.jpg";
import creative3 from "@/assets/work/creative3.jpg";
import creative4 from "@/assets/work/creative4.jpg";
import creative5 from "@/assets/work/creative5.jpg";
import creative6 from "@/assets/work/creative6.jpg";

const clients = [
  { name: "Kishor Hotel", desc: "Authentic Odia Restaurant", img: client1 },
  { name: "Kishor Bhaina Mutton", desc: "Famous Mutton Since 1991", img: client2 },
  { name: "TheCareer Height", desc: "Education Platform", img: client3 },
  { name: "Mirrors by Sushree", desc: "Exclusive Unisex Salon", img: client4 },
];

const creatives = [creative1, creative2, creative3, creative4, creative5, creative6];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-6xl mx-auto">
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

        {/* Client profiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground">{client.name}</h3>
                <p className="text-muted-foreground text-sm font-body">{client.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Content & <span className="text-gradient">Creative Work</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {creatives.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              <img
                src={img}
                alt={`Creative work ${i + 1}`}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
