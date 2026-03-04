import { PageHeader } from "@/components/page-header";
import { menuCategories } from "@/data/menu";
import { formatCurrency } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Menu",
  description:
    "Explore the Haven Dine menu featuring premium starters, refined mains, chef specials, desserts, and curated drinks in Tacloban City.",
  path: "/menu"
});

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Menu"
        title="Refined courses for elegant evenings."
        description="Our menu balances precision and comfort, combining premium ingredients, contemporary technique, and a calm, luxurious rhythm of service."
      />
      <section className="py-16 md:py-24">
        <div className="shell grid gap-8">
          {menuCategories.map((category) => (
            <article key={category.title} className="soft-card p-8 md:p-10">
              <div className="mb-8 max-w-3xl space-y-4">
                <p className="gold-label">{category.title}</p>
                <h2 className="text-4xl text-white md:text-5xl">{category.title}</h2>
                <p>{category.blurb}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl text-white">{item.name}</h3>
                      <span className="text-sm uppercase tracking-[0.22em] text-[#e6cf9d]">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                    <p className="mt-3">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
