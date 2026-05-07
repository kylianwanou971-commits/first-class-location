import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "CGV — First Class Location",
};

const labelCls = "text-[9px] font-bold tracking-[0.2em] uppercase text-gold";
const h2Cls = "text-gold font-bold text-lg md:text-xl mb-4 mt-10";
const h3Cls = "text-white/80 font-semibold text-sm mb-3 mt-6 uppercase tracking-widest";
const pCls = "text-white/55 text-sm leading-relaxed mb-4";
const liCls = "text-white/55 text-sm leading-relaxed mb-2 flex gap-2";

export default function CGV() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen pt-28 pb-24 px-4">
        <div className="max-w-[800px] mx-auto">

          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/30 hover:text-gold text-xs uppercase tracking-widest mb-12 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ← Retour au site
          </Link>

          {/* Title */}
          <div className="mb-10 pb-8 border-b border-white/8">
            <p className={`${labelCls} mb-3`}>Conditions générales de vente</p>
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              CGV
            </h1>
            <p className="text-white/30 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              FIRST CLASS — 45B AVENUE DE L&apos;EUROPE – 59223 RONCQ<br />
              Tél : 07 60 05 72 47 – FCRlocation@gmail.com
            </p>
          </div>

          {/* Conditions générales */}
          <h2 className={h2Cls}>Conditions générales</h2>
          <p className={pCls}>
            Le Loueur loue au locataire signataire du présent contrat le véhicule mentionné au recto suivant les clauses et conditions ci-après que le locataire accepte sans réserve.
          </p>

          {/* Locataires */}
          <h3 className={h3Cls}>Locataires</h3>
          <p className={pCls}>
            L&apos;âge minimal pour louer une Voiture chez FIRST CLASS est de 23 ans et de 28 ans pour les super cars. Les locataires doivent être titulaires d&apos;un permis de conduire en cours de validité émis depuis plus de deux ans.
          </p>

          {/* Particuliers */}
          <h3 className={h3Cls}>Particuliers</h3>
          <ul className="mb-6 space-y-2 pl-4 border-l border-white/8">
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Carte d&apos;identité en cours de validité</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Permis de conduire français</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Justificatif de domicile (quittance EDF ou téléphone)</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Cartes premium ou Gold</span></li>
          </ul>

          {/* Sociétés */}
          <h3 className={h3Cls}>Sociétés</h3>
          <ul className="mb-6 space-y-2 pl-4 border-l border-white/8">
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Extrait K-Bis</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Bon de commande</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Chèque ou carte bancaire et relevé de compte bancaire</span></li>
          </ul>

          {/* Artisans */}
          <h3 className={h3Cls}>Artisans</h3>
          <p className={pCls}>
            Numéro d&apos;inscription au RC ou au RM, Carte Bancaire et relevé de compte bancaire.
          </p>

          <p className={pCls}>
            L&apos;adresse permanente du locataire pourra être vérifiée. Seuls les conducteurs désignés sur le contrat de location FIRST CLASS, au moment de la location sont autorisés à conduire le véhicule loué.
          </p>
          <p className={pCls}>
            Quel que soit le mode de paiement, la Sté FIRST CLASS se réserve la faculté d&apos;effectuer toutes vérifications nécessaires et de consentir ou non à la location.
          </p>

          {/* Validité territoriale */}
          <h3 className={h3Cls}>Validité territoriale</h3>
          <p className={pCls}>
            La circulation est interdite à l&apos;Étranger et entraîne la déchéance de toutes garanties et assurances à l&apos;exception du territoire Allemand.
          </p>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent my-10" />

          {/* Article 1 */}
          <h2 className={h2Cls}>Article 1 — Mise à disposition et restitution de véhicule</h2>
          <p className={pCls}>
            Le véhicule est mis à disposition du locataire ; il devra être restitué au même lieu pendant les heures d&apos;ouverture normales du loueur. Dans le cas contraire, le locataire devra payer au loueur une indemnité kilométrique ou un forfait indiqué dans le tarif en vigueur par kilomètre séparant la station de départ de celle où le véhicule a été laissé.
          </p>

          {/* Article 2 */}
          <h2 className={h2Cls}>Article 2 — État du véhicule</h2>
          <p className={pCls}>
            Le Locataire reconnaît que le véhicule ne comporte aucune marque apparente de détérioration, est en bon état de marche et de propreté, et que les pneumatiques sont en bon état et sans coupure. En cas de détérioration de l&apos;un des pneumatiques pour une autre cause que l&apos;usure normale, le locataire s&apos;engage à le remplacer immédiatement à ses frais par un pneumatique identique de même marque et d&apos;usure égale. Les réparations des crevaisons aux pneumatiques sont également à la charge du locataire. De même les détériorations causées aux jantes du véhicule restent à la charge du locataire.
          </p>
          <p className={pCls}>
            Les compteurs et leurs prises ne pourront être violés, en cas d&apos;infraction constatée à cette prescription, le locataire devra payer la location sur la base de 500 km/jour, indépendamment des poursuites pour utilisation frauduleuse. Le locataire est responsable des dégradations autres que l&apos;usure normale subie par le véhicule pour toutes causes étrangères au fait du loueur, en particulier les marchandises transportées ne doivent pas être susceptibles de détériorer le véhicule tant par elles-mêmes que par leur emballage ou leur arrimage. Les dégradations intérieures du véhicule, causées volontairement ou involontairement (bris d&apos;accessoires, brûlures des sièges par cigarette, etc.) demeurent toujours à la charge du locataire même si celui-ci a souscrit au complément pour réduction de la franchise.
          </p>

          {/* Article 3 */}
          <h2 className={h2Cls}>Article 3 — Garde et utilisation du véhicule</h2>
          <p className={pCls}>
            Le locataire assume la garde du véhicule et la maîtrise des opérations de conduite et de transport. Sous risque d&apos;être exclu de la garantie d&apos;assurance et donc de se trouver en état de non assurance, le locataire s&apos;engage à ne pas laisser conduire le véhicule par d&apos;autres personnes que lui-même ou celles agréées par le loueur et dont il se porte garant conformément à l&apos;article 1384 du Code Civil.
          </p>
          <p className={pCls}>Il s&apos;engage, par ailleurs, à ce que le véhicule ne soit pas utilisé pour :</p>
          <ul className="mb-6 space-y-2 pl-4 border-l border-white/8">
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Propulser ou tirer tout véhicule quelconque ou remorque, sauf si stipulé sur le contrat</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Par une personne sous influence éthylique ou narcotique</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Dans le cadre de compétition</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Pour le transport à titre onéreux de passagers, quel que soit le mode de rémunération choisi</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>En surcharge, le véhicule loué transportant un nombre de passagers supérieur à celui autorisé, ou un chargement dont le poids excède la charge utile dudit véhicule</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Par une personne ayant fourni au loueur une fausse identité, un âge ou une adresse inexacte</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Pour transporter des marchandises dangereuses (inflammables ou explosives) ou pouvant laisser dégager de mauvaises odeurs</span></li>
          </ul>
          <p className={pCls}>
            Par ailleurs, le locataire ne peut en aucun cas céder, vendre, hypothéquer ou mettre en gage le présent contrat, le véhicule, son équipement, son outillage, ni les traiter de manière à porter préjudice au loueur. Le locataire est soumis à toutes les obligations législatives, réglementaires, douanières ou toutes lois relatives au transport de marchandises qu&apos;il effectue au moyen du véhicule fourni par le loueur. La responsabilité du locataire dure pendant toute la période durant laquelle le véhicule a été mis à sa disposition.
          </p>

          {/* Article 4 */}
          <h2 className={h2Cls}>Article 4 — Location</h2>
          <p className={pCls}>
            <span className="text-white/70 font-semibold">Paiement :</span> Le locataire s&apos;engage à payer au loueur dès le premier jour de la location et le solde et les extras à la restitution du véhicule.
          </p>
          <ul className="mb-6 space-y-2 pl-4 border-l border-white/8">
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Une redevance kilométrique calculée au taux prévu pour le nombre de kilomètres parcourus. En cas de défaut de fonctionnement du compteur kilométrique, il appartient au client de prévenir immédiatement le loueur sous peine de se voir facturer 500 km/jour de location au tarif en vigueur.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Les redevances concernant la durée de la location, et si demandée par le locataire le montant de la renonciation au paiement de certains dommages en cas de collision, et les primes de la garantie assistance médicale et mécanique.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>La redevance complémentaire pour rapatriement du véhicule si ce dernier est laissé à un autre endroit que prévu sans l&apos;accord du loueur.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Tous impôts, taxes et contributions directes ou indirectes payables sur les redevances, primes, frais et indemnités prévues.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Toutes amendes, frais, dépenses et impôts sur toutes les infractions à la législation relative à la circulation, au stationnement, applicables au cours de la durée du présent contrat.</span></li>
          </ul>
          <p className={pCls}>
            <span className="text-white/70 font-semibold">Acompte :</span> L&apos;acompte est un premier versement à valoir sur un achat. Il implique un engagement ferme des deux parties. Par conséquent, l&apos;obligation d&apos;acheter pour le consommateur et celle de fournir la marchandise pour le commerçant. Il n&apos;y a aucune possibilité de dédit et le consommateur peut être condamné à payer des dommages-intérêts s&apos;il se rétracte ; le consommateur renonce à tout droit de réclamation ou de remboursement dans tous les cas de figures. Vérifiez la solvabilité de votre carte bancaire, en cas d&apos;incident de paiement ou de dépôt de garantie, aucun remboursement ne peut être réclamé.
          </p>

          {/* Article 5 */}
          <h2 className={h2Cls}>Article 5 — Clause pénale</h2>
          <p className={pCls}>
            L&apos;inobservation de l&apos;article 4 du présent contrat entraînera, outre les frais répétables et intérêts moratoires, l&apos;application à titre de clause pénale, d&apos;une indemnité fixée forfaitairement à VINGT POUR CENT (20%) des sommes restant effectivement dues.
          </p>
          <p className={pCls}>
            Le montant de l&apos;indemnité calculée à titre de clause pénale ne pourra être inférieur à une somme minimum de 500 €.
          </p>

          {/* Article 6 */}
          <h2 className={h2Cls}>Article 6 — Assurances</h2>
          <p className={pCls}>
            Les assurances peuvent être souscrites par le locataire en transférant le contrat d&apos;assurance de son propre véhicule, ou bien en souscrivant une assurance tous risques moyennant un supplément de 40% de nos tarifs location. Seuls le locataire et les conducteurs agréés par le loueur, conformément à l&apos;article 3, peuvent se prévaloir de la qualité d&apos;assuré.
          </p>
          <p className={pCls}>
            Quelle que soit la nature de l&apos;assurance, en cas de vol, d&apos;incendie ou d&apos;accident responsable ou sans tiers identifié, la responsabilité du locataire est engagée à concurrence des franchises (non rachetables) indiquées sur le contrat de location.
          </p>
          <p className={pCls}>
            Le locataire et tout locataire avisé autorisé s&apos;engage à participer comme assurés au bénéfice d&apos;une police d&apos;assurance automobile dont copie est à la disposition du locataire au principal établissement du loueur.
          </p>
          <p className={pCls}>
            De plus, le locataire s&apos;engage à prendre toutes les mesures utiles pour protéger les intérêts du loueur et de la compagnie d&apos;assurance du loueur en cas d&apos;accident, et notamment :
          </p>
          <ul className="mb-6 space-y-2 pl-4 border-l border-white/8">
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Déclarer au loueur dans les 24 heures tout accident, vol ou incendie et alerter immédiatement les autorités de police pour tout vol ou accident corporel.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Mentionner dans la déclaration de sinistre les circonstances, les noms et adresses de témoins éventuels, le nom et l&apos;adresse de la compagnie d&apos;assurance de la partie adverse, ainsi que le numéro de police.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Joindre à cette déclaration tout rapport de police, de gendarmerie, récépissé de déclaration de plainte, etc.</span></li>
            <li className={liCls}><span className="text-gold/60 flex-shrink-0">—</span><span>Ne discuter en aucun cas la responsabilité ni traiter ou transiger avec des tiers relativement à l&apos;accident.</span></li>
          </ul>
          <p className={pCls}>
            En cas de sinistre avec dommages au véhicule résultant d&apos;une collision, une franchise selon le tarif en vigueur restera à la charge du locataire. La non remise dans un délai de 24 heures d&apos;un constat amiable ou d&apos;une déclaration d&apos;accident entraînera la facturation totale des réparations consécutives aux sinistres.
          </p>
          <p className={pCls}>
            Le locataire a la garde juridique du véhicule suivant l&apos;article 1384 du code civil ; il s&apos;engage à le tenir fermé à clef en dehors des périodes d&apos;utilisation. En cas de vol, une déclaration officielle de vol (procès-verbal de police) devra être remise à l&apos;agence FIRST CLASS RONCQ avec les composants de l&apos;alarme et les clés du véhicule. Si ces conditions ne sont pas respectées, le locataire sera tenu responsable et facturé de la totalité de la valeur du véhicule augmentée des frais d&apos;immobilisation ainsi que des frais de dossier.
          </p>
          <p className={pCls}>
            Le véhicule n&apos;est assuré que pour la durée de la location indiquée au recto. Passé ce délai, et sauf si la prolongation est acceptée, le loueur décline toute responsabilité pour les accidents que le locataire aurait pu causer et dont il devra faire son affaire personnelle.
          </p>

          {/* Article 7 */}
          <h2 className={h2Cls}>Article 7 — Empêchement du loueur</h2>
          <p className={pCls}>
            En aucune circonstance, le locataire ne pourra réclamer de dommages et intérêts, soit pour retard dans la livraison du véhicule, soit pour annulation de la location ou immobilisation dans le cas de panne ou de réparations intervenues au cours de la location.
          </p>

          {/* Article 8 */}
          <h2 className={h2Cls}>Article 8 — Durée du contrat</h2>
          <p className={pCls}>
            La location est consentie pour une durée déterminée précisée au contrat de location.
          </p>
          <p className={pCls}>
            <span className="text-white/70 font-semibold">Prolongation :</span> Le locataire s&apos;engage à restituer le véhicule à la date prévue au contrat de location. Pour le cas où le locataire voudrait conserver son véhicule pour une durée supérieure à celle initialement convenue, il devra après avoir obtenu accord du loueur, faire parvenir sans délai le montant de la location en cours sous peine de s&apos;exposer à des poursuites judiciaires pour détournement de véhicule et abus de confiance. Si le véhicule n&apos;est pas restitué au loueur à l&apos;échéance convenue, en l&apos;absence d&apos;accord écrit pour une éventuelle prolongation, le loueur se réserve le droit de reprendre le véhicule en quelque lieu où il se trouve et aux frais du locataire sans que ce dernier puisse se prévaloir d&apos;une rupture abusive de location.
          </p>
          <p className={pCls}>
            <span className="text-white/70 font-semibold">Rupture du contrat :</span> Le non-respect par le locataire des conditions de location entraînera la résiliation de la location, sans préjudice des dommages et intérêts qui pourraient être, le cas échéant, réclamés par le loueur.
          </p>

          {/* Article 9 */}
          <h2 className={h2Cls}>Article 9 — Compétence</h2>
          <p className={pCls}>
            En cas de contestation relative à l&apos;exécution du présent contrat, les tribunaux de la ville du loueur sont seuls compétents.
          </p>

          {/* Contact block */}
          <div className="bg-[#0d0d0d] border border-white/6 p-6 mt-10">
            <p className={`${labelCls} mb-3`}>Contact</p>
            <p className="text-white/55 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              FIRST CLASS — 45B AVENUE DE L&apos;EUROPE – 59223 RONCQ<br />
              Tél : <a href="tel:0760057247" className="text-gold/70 hover:text-gold transition-colors">07 60 05 72 47</a><br />
              Email : <a href="mailto:FCRlocation@gmail.com" className="text-gold/70 hover:text-gold transition-colors">FCRlocation@gmail.com</a>
            </p>
          </div>

          {/* Back bottom */}
          <div className="mt-16 pt-8 border-t border-white/8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/30 hover:text-gold text-xs uppercase tracking-widest transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              ← Retour au site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
