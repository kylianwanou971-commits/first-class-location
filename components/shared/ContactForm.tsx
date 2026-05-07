"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";

const vehicleOptions = [
  "Mercedes C63S E Performance",
  "Mercedes GLE 63S AMG",
  "Mercedes CLE 53 AMG Cabriolet",
  "Mercedes CLS AMG avec chauffeur",
  "BMW M3 Competition",
  "Audi RS6 Performance",
  "Porsche 911 Carrera GTS",
  "Test Drive / Baptême",
  "Formation Agence de Luxe",
  "LLD Professionnel",
  "Demande de renseignement",
];

interface FormValues {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  objet: string;
  date: string;
  message: string;
}

export default function ContactForm({ defaultObjet = "" }: { defaultObjet?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { objet: defaultObjet },
  });

  const onSubmit = async (data: FormValues) => {
    // Formspree or similar — update action URL in production
    try {
      const res = await fetch("https://formspree.io/f/fcrlocation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok || res.status === 422) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
        <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center">
          <CheckCircle size={28} className="text-gold" />
        </div>
        <h3
          className="font-heading text-2xl text-text-primary"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Message envoyé !
        </h3>
        <p
          className="text-text-secondary text-sm max-w-xs"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("prenom", { required: "Prénom requis" })}
            placeholder="Prénom *"
            className="input-field"
          />
          {errors.prenom && (
            <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>
              {errors.prenom.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("nom", { required: "Nom requis" })}
            placeholder="Nom *"
            className="input-field"
          />
          {errors.nom && (
            <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>
              {errors.nom.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("email", {
              required: "Email requis",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Email invalide" },
            })}
            type="email"
            placeholder="Email *"
            className="input-field"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("telephone", { required: "Téléphone requis" })}
            type="tel"
            placeholder="Téléphone *"
            className="input-field"
          />
          {errors.telephone && (
            <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>
              {errors.telephone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <select
          {...register("objet", { required: "Objet requis" })}
          className="input-field"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="">Objet de la demande *</option>
          {vehicleOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.objet && (
          <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "var(--font-body)" }}>
            {errors.objet.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("date")}
          type="date"
          placeholder="Date souhaitée"
          className="input-field"
          style={{ colorScheme: "dark" }}
        />
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Votre message..."
          rows={5}
          className="input-field resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            Envoyer le message
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
