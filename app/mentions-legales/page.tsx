import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — First Class Location",
};

const labelCls = "text-[9px] font-bold tracking-[0.2em] uppercase text-gold";
const h2Cls = "text-gold font-bold text-lg md:text-xl mb-4 mt-10";
const pCls = "text-white/55 text-sm leading-relaxed mb-4";
const liCls = "text-white/55 text-sm leading-relaxed mb-1";

export default function MentionsLegales() {
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
            <p className={`${labelCls} mb-3`}>Informations légales</p>
            <h1
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mentions légales
            </h1>
          </div>

          {/* Identité */}
          <div className="bg-[#0d0d0d] border border-white/6 p-6 mb-10 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
            <p className={`${labelCls} mb-4`}>Intervenants</p>
            <ul className="space-y-2">
              <li className={liCls}><span className="text-white/30">Propriétaire :</span> <span className="text-white/70">FIRST CLASS – 82416608600010 – 12 RUE DE CALAIS 59200 TOURCOING</span></li>
              <li className={liCls}><span className="text-white/30">Responsable publication :</span> <span className="text-white/70">First Class – FCRlocation@gmail.com</span></li>
              <li className={liCls}><span className="text-white/30">Hébergeur :</span> <span className="text-white/70">Vercel Inc</span></li>
            </ul>
          </div>

          {/* Article 1 */}
          <h2 className={h2Cls}>1. Présentation du site.</h2>
          <p className={pCls}>
            En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site https://firstclass-location.com l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <p className={pCls}>
            Propriétaire : FIRST CLASS – 82416608600010 – 12 RUE DE CALAIS 59200 TOURCOING<br />
            Responsable publication : First Class – FCRlocation@gmail.com<br />
            Le responsable publication est une personne physique ou une personne morale.<br />
            Hébergeur : Vercel Inc<br />
            Crédits : Le modèle de mentions légales est offert par Subdelirium.com Générateur de mentions légales
          </p>

          {/* Article 2 */}
          <h2 className={h2Cls}>2. Conditions générales d&apos;utilisation du site et des services proposés.</h2>
          <p className={pCls}>
            L&apos;utilisation du site https://firstclass-location.com implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment, les utilisateurs du site https://firstclass-location.com sont donc invités à les consulter de manière régulière.
          </p>
          <p className={pCls}>
            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par FIRST CLASS, qui s&apos;efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l&apos;intervention.
          </p>
          <p className={pCls}>
            Le site https://firstclass-location.com est mis à jour régulièrement par FIRST CLASS. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s&apos;imposent néanmoins à l&apos;utilisateur qui est invité à s&apos;y référer le plus souvent possible afin d&apos;en prendre connaissance.
          </p>

          {/* Article 3 */}
          <h2 className={h2Cls}>3. Description des services fournis.</h2>
          <p className={pCls}>
            Le site https://firstclass-location.com a pour objet de fournir une information concernant l&apos;ensemble des activités de la société.
          </p>
          <p className={pCls}>
            FIRST CLASS s&apos;efforce de fournir sur le site https://firstclass-location.com des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p className={pCls}>
            Tous les informations indiquées sur le site https://firstclass-location.com sont données à titre indicatif, et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site https://firstclass-location.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          </p>

          {/* Article 4 */}
          <h2 className={h2Cls}>4. Limitations contractuelles sur les données techniques.</h2>
          <p className={pCls}>
            Le site utilise la technologie JavaScript.
          </p>
          <p className={pCls}>
            Le site Internet ne pourra être tenu responsable de dommages matériels liés à l&apos;utilisation du site. De plus, l&apos;utilisateur du site s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
          </p>

          {/* Article 5 */}
          <h2 className={h2Cls}>5. Propriété intellectuelle et contrefaçons.</h2>
          <p className={pCls}>
            FIRST CLASS est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
          </p>
          <p className={pCls}>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : FIRST CLASS.
          </p>
          <p className={pCls}>
            Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>

          {/* Article 6 */}
          <h2 className={h2Cls}>6. Limitations de responsabilité.</h2>
          <p className={pCls}>
            FIRST CLASS ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site https://firstclass-location.com, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
          </p>
          <p className={pCls}>
            FIRST CLASS ne pourra également être tenue responsable des dommages indirects (tels par exemple qu&apos;une perte de marché ou perte d&apos;une chance) consécutifs à l&apos;utilisation du site https://firstclass-location.com.
          </p>
          <p className={pCls}>
            Des espaces interactifs (possibilité de poser des questions dans l&apos;espace contact) sont à la disposition des utilisateurs. FIRST CLASS se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, FIRST CLASS se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
          </p>

          {/* Article 7 */}
          <h2 className={h2Cls}>7. Gestion des données personnelles.</h2>
          <p className={pCls}>
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l&apos;article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
          </p>
          <p className={pCls}>
            A l&apos;occasion de l&apos;utilisation du site https://firstclass-location.com, peuvent êtres recueillies : l&apos;URL des liens par l&apos;intermédiaire desquels l&apos;utilisateur a accédé au site https://firstclass-location.com, le fournisseur d&apos;accès de l&apos;utilisateur, l&apos;adresse de protocole Internet (IP) de l&apos;utilisateur.
          </p>
          <p className={pCls}>
            En tout état de cause FIRST CLASS ne collecte des informations personnelles relatives à l&apos;utilisateur que pour le besoin de certains services proposés par le site https://firstclass-location.com. L&apos;utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu&apos;il procède par lui-même à leur saisie. Il est alors précisé à l&apos;utilisateur du site https://firstclass-location.com l&apos;obligation ou non de fournir ces informations.
          </p>
          <p className={pCls}>
            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés, tout utilisateur dispose d&apos;un droit d&apos;accès, de rectification et d&apos;opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d&apos;une copie du titre d&apos;identité avec signature du titulaire de la pièce, en précisant l&apos;adresse à laquelle la réponse doit être envoyée.
          </p>
          <p className={pCls}>
            Aucune information personnelle de l&apos;utilisateur du site https://firstclass-location.com n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l&apos;hypothèse du rachat de FIRST CLASS et de ses droits permettrait la transmission des dites informations à l&apos;éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l&apos;utilisateur du site https://firstclass-location.com.
          </p>
          <p className={pCls}>
            Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
          </p>

          {/* Article 8 */}
          <h2 className={h2Cls}>8. Liens hypertextes et cookies.</h2>
          <p className={pCls}>
            Le site https://firstclass-location.com contient un certain nombre de liens hypertextes vers d&apos;autres sites, mis en place avec l&apos;autorisation de FIRST CLASS. Cependant, FIRST CLASS n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités, et n&apos;assumera en conséquence aucune responsabilité de ce fait.
          </p>
          <p className={pCls}>
            La navigation sur le site https://firstclass-location.com est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l&apos;identification de l&apos;utilisateur, mais qui enregistre des informations relatives à la navigation d&apos;un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
          </p>
          <p className={pCls}>
            Le refus d&apos;installation d&apos;un cookie peut entraîner l&apos;impossibilité d&apos;accéder à certains services. L&apos;utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l&apos;installation des cookies :
          </p>
          <ul className="list-none space-y-3 mb-6 pl-4 border-l border-white/8">
            <li className={liCls}><span className="text-white/40">Internet Explorer :</span> onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</li>
            <li className={liCls}><span className="text-white/40">Firefox :</span> en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l&apos;onglet Options. Cliquer sur l&apos;onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l&apos;historique. Enfin décochez-la pour désactiver les cookies.</li>
            <li className={liCls}><span className="text-white/40">Safari :</span> Cliquez en haut à droite du navigateur sur le pictogramme de menu. Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section &quot;Confidentialité&quot;, cliquez sur Paramètres de contenu. Dans la section &quot;Cookies&quot;, vous pouvez bloquer les cookies.</li>
            <li className={liCls}><span className="text-white/40">Chrome :</span> Cliquez en haut à droite du navigateur sur le pictogramme de menu. Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section &quot;Confidentialité&quot;, cliquez sur préférences. Dans l&apos;onglet &quot;Confidentialité&quot;, vous pouvez bloquer les cookies.</li>
          </ul>

          {/* Article 9 */}
          <h2 className={h2Cls}>9. Droit applicable et attribution de juridiction.</h2>
          <p className={pCls}>
            Tout litige en relation avec l&apos;utilisation du site https://firstclass-location.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
          </p>

          {/* Article 10 */}
          <h2 className={h2Cls}>10. Les principales lois concernées.</h2>
          <p className={pCls}>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l&apos;informatique, aux fichiers et aux libertés.
          </p>
          <p className={pCls}>
            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.
          </p>

          {/* Article 11 */}
          <h2 className={h2Cls}>11. Lexique.</h2>
          <p className={pCls}>
            <span className="text-white/70 font-semibold">Utilisateur :</span> Internaute se connectant, utilisant le site susnommé.
          </p>
          <p className={pCls}>
            <span className="text-white/70 font-semibold">Informations personnelles :</span> {" « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978)."}
          </p>

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
