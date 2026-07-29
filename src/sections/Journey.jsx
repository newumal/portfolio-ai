import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { journey } from '../data/content';

const Journey = () => {
  return (
    <Section id="journey" kicker={journey.kicker} heading={journey.heading}>
      <div className="relative">
        {/* vertical rail */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[calc(9rem+7px)]"
        />
        <ol className="space-y-10">
          {journey.items.map((item, i) => (
            <Reveal as="li" key={`${item.org}-${item.period}`} delay={i * 0.06}>
              <div className="relative flex flex-col gap-4 pl-8 md:flex-row md:gap-8 md:pl-0">
                {/* period */}
                <div className="md:w-36 md:shrink-0 md:text-right">
                  <span className="text-sm font-semibold text-fog">{item.period}</span>
                </div>

                {/* dot */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink md:left-[calc(9rem+1px)]"
                />

                {/* content */}
                <div className="md:pl-8">
                  <h3 className="font-display text-lg font-bold text-chalk">
                    {item.role}{' '}
                    <span className="font-sans text-base font-medium text-accent">
                      · {item.org}
                    </span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">
                    {item.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-fog"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Journey;
