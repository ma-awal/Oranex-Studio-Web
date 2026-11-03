import content from "@/data/content.json";
import projects from "@/data/projects.json";
import { SITE_URL, SEO, site, socials } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Tech from "@/components/Tech";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BackgroundFX from "@/components/BackgroundFX";

// Google er jonno structured data (business + FAQ). Sob JSON theke auto.
const business = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name, url: SITE_URL, image: `${SITE_URL}/og.png`, description: SEO.description,
  email: site.email, telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: site.location.split(",")[0].trim(), addressCountry: "BD" },
  sameAs: socials.map(([, url]) => url),
  makesOffer: content.services.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.text } })),
};
const faq = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: content.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const ld = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

// Pura page static (backend nai), tai sobcheye fast.
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(faq) }} />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work projects={projects} />
        <WhyUs />
        <Process />
        <Tech />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
