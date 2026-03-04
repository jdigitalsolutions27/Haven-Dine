import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  eyebrow,
  title,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="shell space-y-12">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? <p className="gold-label">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="max-w-2xl text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
