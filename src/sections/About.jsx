import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { about } from '../data/content';

const About = () => {
  return (
    <Section id="about" kicker={about.kicker} heading={about.heading}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7" delay={0.05}>
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-fog sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {about.stats.map((stat) => (
              <div key={stat.label} className="bg-panel p-6">
                <dt className="font-display text-2xl font-bold text-chalk sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-fog">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
};

export default About;
