"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "kilométrage-illimité",
    title: "Location de voitures de luxe et kilométrage illimité, avantageux ou problématique ?",
    excerpt:
      "Le kilométrage illimité est une option qui fait rêver, mais est-elle vraiment avantageuse dans le secteur de la location de luxe ? Découvrez les pour et les contre, les conditions généralement proposées, et nos recommandations.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    date: "2025-01-15",
    category: "Conseils",
    readTime: "5 min",
  },
  {
    slug: "comment-louer-une-voiture",
    title: "Comment faire pour louer une voiture ? Déroulement, contrat, assurance, caution...",
    excerpt:
      "Tout ce que vous devez savoir avant de louer un véhicule de prestige : les documents à préparer, le déroulement de la location, la caution, l'assurance et les points à vérifier dans le contrat.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    date: "2025-01-08",
    category: "Guide",
    readTime: "7 min",
  },
  {
    slug: "agence-fiable",
    title: "Comment s'assurer qu'une société de location de voitures de luxe est fiable ?",
    excerpt:
      "Face à la multiplication des offres de location de luxe, comment distinguer les agences sérieuses ? Voici les critères essentiels à vérifier avant de confier votre argent.",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    date: "2024-12-20",
    category: "Conseils",
    readTime: "6 min",
  },
];

export default function BlogPageContent() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-subtitle mb-4"
          >
            Le Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-5xl md:text-6xl"
          >
            Conseils &{" "}
            <span className="text-gold italic">actualités</span>
          </motion.h1>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group card-surface overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className="text-[10px] tracking-widest uppercase text-gold border border-gold/50 px-2 py-1 bg-black/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {article.category}
                  </span>
                  <span
                    className="text-[10px] tracking-widest uppercase text-text-secondary border border-[rgba(255,255,255,0.2)] px-2 py-1 bg-black/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {article.readTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-text-secondary text-xs mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2
                  className="font-heading text-lg text-text-primary mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {article.title}
                </h2>
                <p
                  className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-gold text-xs tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Lire l&apos;article <ArrowRight size={12} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
