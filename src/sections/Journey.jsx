import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { journey } from '../data/content';

const Journey = () => {
  return (
    <Section id="experience" kicker={journey.kicker} heading={journey.heading}>
      <ol className="divide-y divide-line border-y border-line">
        {journey.items.map((item, i) => (
          <Reveal as="li" key={`${item.org}-${item.period}`} delay={i * 0.04}>
            <div className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
              <p className="text-sm text-fog sm:col-span-3">{item.period}</p>
              <div className="sm:col-span-9">
                <h3 className="font-display text-base font-semibold text-chalk">
                  {item.role}
                  <span className="font-sans font-medium text-fog">
                    {' '}
                    ·{' '}
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-chalk"
                      >
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-fog">{item.summary}</p>
                <p className="mt-2 text-xs text-fog/80">{item.tags.join('  ·  ')}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-kicker text-fog">Education</p>
          <ul className="mt-4 space-y-4">
            {journey.education.map((item) => (
              <li key={item.title}>
                <p className="font-display font-semibold text-chalk">{item.title}</p>
                <p className="mt-0.5 text-sm text-fog">
                  {item.org} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-xs font-semibold uppercase tracking-kicker text-fog">Recognition</p>
          <ul className="mt-4 space-y-3">
            {journey.recognition.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-fog">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default Journey;
