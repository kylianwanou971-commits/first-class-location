"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1000, suffix: "+", label: "Voitures louées" },
  { value: 1000, suffix: "+", label: "Clients satisfaits" },
  { value: 10, suffix: "+", label: "Ans d'expérience" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
  { value: 20000, suffix: "+", label: "Abonnés réseaux sociaux" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count >= 1000 ? count.toLocaleString("fr-FR") : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#080808] border-y border-[rgba(201,168,76,0.1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p
                className="font-heading text-3xl md:text-4xl lg:text-5xl text-gold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="text-text-secondary text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
