import Link from "next/link";

export default function PageHero({ eyebrow, title, description, cta = true }: { eyebrow: string; title: string; description: string; cta?: boolean }) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero-copy">{description}</p>
        {cta && <Link className="button" href="/contact">Speak with an Advisor</Link>}
      </div>
    </section>
  );
}
