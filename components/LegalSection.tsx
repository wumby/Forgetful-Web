type LegalBlock = {
  title: string;
  items: string[];
};

type LegalSectionProps = {
  eyebrow: string;
  id: string;
  title: string;
  intro: string;
  blocks: LegalBlock[];
  contactLabel: string;
  contactValue: string;
};

export default function LegalSection({
  eyebrow,
  id,
  title,
  intro,
  blocks,
  contactLabel,
  contactValue,
}: LegalSectionProps) {
  return (
    <section className="legal-section" aria-labelledby={id}>
      <div className="legal-shell">
        <div className="legal-copy">
          <span className="legal-eyebrow">{eyebrow}</span>
          <h2 id={id} className="legal-heading">
            {title}
          </h2>
          <p className="legal-intro">{intro}</p>
        </div>

        <div className="legal-grid">
          {blocks.map((block) => (
            <article key={block.title} className="legal-card">
              <h3 className="legal-card-title">{block.title}</h3>
              <ul className="legal-list">
                {block.items.map((item) => (
                  <li key={item} className="legal-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="legal-contact">
          <span className="legal-contact-label">{contactLabel}</span>
          <a href={`mailto:${contactValue}`} className="legal-contact-value">
            {contactValue}
          </a>
        </div>
      </div>
    </section>
  );
}
