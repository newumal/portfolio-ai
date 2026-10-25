import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { qualification } from '../data/content';

const Qualification = () => {
  return (
    <Section id="qualification" kicker={qualification.kicker} heading={qualification.heading}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Education & certs */}
        <Reveal className="lg:col-span-7" delay={0.05}>
          <h3 className="kicker !text-chalk before:bg-accent">
            <FaGraduationCap className="h-4 w-4 text-accent" /> Education
          </h3>
          <ul className="mt-6 space-y-4">
            {qualification.education.map((item) => (
              <li
                key={item.title}
                className="flex items-start justify-between gap-4 rounded-xl border border-line bg-panel p-5"
              >
                <div>
                  <p className="font-display font-semibold text-chalk">{item.title}</p>
                  <p className="mt-1 text-sm text-fog">{item.org}</p>
                </div>
                <span className="shrink-0 text-sm text-fog">{item.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Achievements */}
        <Reveal className="lg:col-span-5" delay={0.15}>
          <h3 className="kicker !text-chalk before:bg-accent">
            <FaTrophy className="h-4 w-4 text-accent" /> Recognition
          </h3>
          <ul className="mt-6 space-y-4">
            {qualification.achievements.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-fog">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default Qualification;
