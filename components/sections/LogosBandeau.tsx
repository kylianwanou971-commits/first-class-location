"use client";

import { motion } from "framer-motion";

const images = [
  "/avis/avis1.jpg",
  "/avis/avis2.jpg",
  "/avis/avis3.jpg",
  "/avis/avis4.jpg",
  "/avis/avis5.jpg",
  "/avis/avis6.jpg",
  "/avis/avis7.jpg",
  "/avis/avis8.jpg",
];

const allImages = [...images, ...images];

export default function LogosBandeau() {
  return (
    <section className="py-16 border-y border-[#C9A84C]/40 overflow-hidden bg-[#FAF7F2]">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center label mb-8 text-[#2D2416]"
      >
        Ils nous font confiance
      </motion.p>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            className="marquee-strip flex gap-4 w-max"
            style={{ animation: "marquee 45s linear infinite" }}
          >
            {allImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
                style={{ width: 320 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Avis client ${(i % images.length) + 1}`}
                  style={{
                    width: 320,
                    height: "auto",
                    display: "block",
                    borderRadius: 12,
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
