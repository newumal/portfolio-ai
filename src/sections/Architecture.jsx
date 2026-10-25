import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { architecture } from '../data/content';

const Architecture = () => {
  return (
    <Section
      id="architecture"
      kicker={architecture.kicker}
      heading={architecture.heading}
      intro={architecture.intro}
    >
      {/* Flow: trigger → runtime → router → tools → gate → plan → review.
          Vertical on small screens (arrows point down), horizontal row on large. */}
      <Reveal>
        <ol className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-stretch">
          {architecture.flow.map((node, i) => (
            <li key={node.label} className="flex items-stretch gap-3 lg:flex-1 lg:basis-[150px]">
              {i > 0 && (
                <span
                  aria-hidden
                  className="flex shrink-0 items-center justify-center self-center text-fog"
                >
                  <span className="rotate-90 lg:rotate-0">→</span>
                </span>
              )}
              <div className="flex-1 rounded-xl border border-line bg-panel p-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-fog">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-1.5 font-display text-sm font-semibold leading-snug text-chalk">
                  {node.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-fog">{node.sub}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Supporting notes */}
      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {architecture.notes.map((note, i) => (
          <Reveal as="li" key={note.title} delay={(i % 3) * 0.06}>
            <h3 className="font-display text-base font-semibold text-chalk">{note.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">{note.body}</p>
          </Reveal>
        ))}
      </ul>

      {/* Stack */}
      <Reveal delay={0.1} className="mt-12 border-t border-line pt-6">
        <ul className="flex flex-wrap gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-fog">
          {architecture.stack.map((item) => (
            <li key={item} className="rounded-full border border-line px-2.5 py-1">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};

export default Architecture;
