import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { skills } from '../data/content';

const TIERS = [
  { key: 'core', label: 'Core depth' },
  { key: 'working', label: 'Working knowledge' },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      kicker={skills.kicker}
      heading={skills.heading}
      className="bg-panel/40"
    >
      <div className="space-y-12">
        {TIERS.map((tier) => {
          const groups = skills.groups.filter((g) => g.tier === tier.key);
          if (!groups.length) return null;
          return (
            <div key={tier.key}>
              <p className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fog">
                {tier.label}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {groups.map((group, i) => (
                  <Reveal
                    key={group.title}
                    delay={(i % 3) * 0.08}
                    className="rounded-2xl border border-line bg-panel p-6"
                  >
                    <h3 className="kicker !text-chalk before:bg-accent">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-line bg-ink/40 px-3 py-1.5 text-sm text-fog transition-colors hover:border-chalk/40 hover:text-chalk"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
