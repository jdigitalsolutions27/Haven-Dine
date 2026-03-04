import { ChefSection } from "@/components/chef-section";
import { ExperienceSection } from "@/components/experience-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Haven Dine, the luxury fine dining restaurant in Tacloban City shaped by elegant hospitality, curated service, and chef-led cuisine.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Haven Dine"
        title="A restaurant built around grace, flavor, and atmosphere."
        description="Haven Dine restaurant in Tacloban City was created to feel both exceptional and deeply welcoming, offering elevated dining with warmth and polish."
      />
      <section className="py-16 md:py-24">
        <div className="shell grid gap-6 lg:grid-cols-3">
          <div className="soft-card p-8">
            <p className="gold-label">Philosophy</p>
            <h2 className="mt-4 text-4xl text-white">Elegant restraint</h2>
            <p className="mt-4">
              Our dining experience is guided by composure: layered flavor, thoughtful pacing,
              and an atmosphere that lets guests settle into the evening without distraction.
            </p>
          </div>
          <div className="soft-card p-8">
            <p className="gold-label">Hospitality</p>
            <h2 className="mt-4 text-4xl text-white">Personal, never performative</h2>
            <p className="mt-4">
              Service at Haven Dine is polished yet intuitive. Recommendations are tailored,
              preferences are remembered, and each table is treated with understated care.
            </p>
          </div>
          <div className="soft-card p-8">
            <p className="gold-label">Local Presence</p>
            <h2 className="mt-4 text-4xl text-white">Tacloban City, elevated</h2>
            <p className="mt-4">
              We bring a globally informed dining perspective to Tacloban City, pairing
              refined technique with seasonal ingredients and a calm luxury sensibility.
            </p>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <ChefSection />
    </>
  );
}
