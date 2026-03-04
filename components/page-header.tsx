type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,138,0.14),transparent_30%)]" />
      <div className="shell relative py-20 md:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="gold-label">{eyebrow}</p>
          <h1 className="text-5xl leading-none text-white md:text-7xl">{title}</h1>
          <p className="max-w-2xl text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
