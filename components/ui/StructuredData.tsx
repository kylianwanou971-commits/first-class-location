export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "First Class Location",
    description:
      "Location de voitures de luxe N°1 dans la métropole lilloise. Ferrari, Lamborghini, Porsche, Mercedes, BMW. Basé à Bondues depuis plus de 10 ans.",
    url: "https://firstclasslocation.fr",
    telephone: "+33768542861",
    email: "fcrlocation@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 bis Rue Marie Curie",
      addressLocality: "Bondues",
      postalCode: "59910",
      addressRegion: "Nord",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        description: "Sur rendez-vous uniquement",
      },
    ],
    sameAs: [
      "https://www.instagram.com/firstclass.location",
      "https://www.facebook.com/FirstClassLocationLille",
    ],
    priceRange: "€€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
