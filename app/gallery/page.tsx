import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Browse the Haven Dine gallery featuring fine dining plates, elegant interiors, and premium restaurant moments in Tacloban City.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A visual taste of Haven Dine."
        description="Browse food, interior, and dining atmosphere imagery from our luxury fine dining restaurant in Tacloban City."
      />
      <section className="py-16 md:py-24">
        <div className="shell">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
