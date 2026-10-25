import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { about } from '../data/content';

const About = () => {
  return (
    <Section id="about" kicker={about.kicker} heading={about.heading}>
      <div className="max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-base leading-relaxed text-fog sm:text-lg">{p}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.16} className="mt-10 max-w-2xl border-t border-line pt-8">
        <ul className="space-y-6">
          {about.principles.map((p) => (
            <li key={p.title}>
              <p className="font-display text-lg text-chalk sm:text-xl">{p.title}</p>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fog">{p.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};

export default About;
