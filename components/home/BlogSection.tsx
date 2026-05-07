"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "kilométrage-illimité",
    title: "Location de voitures de luxe et kilométrage illimité, avantageux ou problématique ?",
    excerpt:
      "Découvrez les avantages et inconvénients d'un forfait kilométrage illimité lors de la location d'un véhicule de prestige.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    date: "2025-01-15",
    category: "Conseils",
  },
  {
    slug: "comment-louer-une-voiture",
    title: "Comment faire pour louer une voiture ? Déroulement, contrat, assurance, caution...",
    excerpt:
      "Tout ce que vous devez savoir sur le processus de location : documents nécessaires, caution, assurance et contrat.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    date: "2025-01-08",
    category: "Guide",
  },
  {
    slug: "agence-fiable",
    title: "Comment s'assurer qu'une société de location de voitures de luxe est fiable ?",
    excerpt:
      "Les critères essentiels pour choisir une agence de location sérieuse et éviter les mauvaises surprises.",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    date: "2024-12-20",
    category: "Conseils",
  },
];

export default function BlogSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-4"
          >
            Le Blog
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Conseils & actualités
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-surface overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] tracking-widest uppercase text-gold border border-gold/50 px-2 py-1 bg-black/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {article.category}
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
                <h3
                  className="font-heading text-lg text-text-primary mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-outline-gold group">
            Voir tous nos articles
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
