import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { philosophy } from '../data/content';

const Philosophy = () => {
  return (
    <Section
      id="philosophy"
      kicker={philosophy.kicker}
      heading={philosophy.heading}
      intro={philosophy.intro}
      className="bg-panel/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {philosophy.cards.map((card, i) => (
          <Reveal
            key={card.no}
            delay={i * 0.1}
            className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-8 transition-colors duration-300 hover:border-accent/50"
          >
            <span className="font-display text-sm font-semibold text-accent">
              {card.no}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold leading-snug text-chalk">
              {card.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-fog">{card.body}</p>
            <span className="mt-6 h-px w-10 bg-line transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Philosophy;
