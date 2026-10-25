import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projects, recommendations, spotlight } from '../data/content';

const TagLine = ({ tags }) => (
  <p className="mt-2 text-xs text-fog/80">{tags.join('  ·  ')}</p>
);

const Projects = () => {
  return (
    <Section id="projects" kicker={projects.kicker} heading={projects.heading}>
      <Reveal className="border-t border-line pt-8">
        <p className="text-xs font-semibold uppercase tracking-kicker text-fog">Featured</p>
        <h3 className="mt-3 font-display text-2xl font-bold text-chalk sm:text-3xl">
          {projects.lead.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-fog">{projects.lead.what}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">{projects.lead.did}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-chalk">{projects.lead.outcome}</p>
        <TagLine tags={projects.lead.tags} />
      </Reveal>

      <ol className="mt-12 divide-y divide-line border-y border-line">
        {projects.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.05} className="py-5">
            <div className="grid gap-2 sm:grid-cols-12 sm:items-baseline sm:gap-8">
              <h3 className="font-display text-base font-semibold text-chalk sm:col-span-4">
                {item.title}
              </h3>
              <div className="sm:col-span-8">
                <p className="text-sm leading-relaxed text-fog">{item.outcome}</p>
                <TagLine tags={item.tags} />
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal as="li" delay={0.16} className="py-5">
          <div className="grid gap-2 sm:grid-cols-12 sm:items-baseline sm:gap-8">
            <div className="sm:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-kicker text-fog">
                {projects.kiln.kicker}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold text-chalk">
                {projects.kiln.title}
              </h3>
            </div>
            <div className="sm:col-span-8">
              <p className="text-sm leading-relaxed text-fog">{projects.kiln.what}</p>
              <TagLine tags={projects.kiln.tags} />
              <a
                href={projects.kiln.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-chalk transition-colors hover:text-mist"
              >
                {projects.kiln.hrefLabel}
                <FaArrowUpRightFromSquare className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Reveal>
      </ol>

      <Reveal delay={0.1} className="mt-14 border-t border-line pt-8">
        <blockquote className="max-w-3xl font-display text-xl font-semibold leading-snug text-chalk sm:text-2xl">
          “{spotlight.quote}”
        </blockquote>
        <p className="mt-4 text-sm text-fog">{spotlight.attribution}</p>
      </Reveal>

      <ul className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
        {recommendations.items.map((rec, i) => (
          <Reveal as="li" key={rec.name} delay={0.08 + i * 0.05}>
            <p className="text-sm leading-relaxed text-fog">“{rec.quote}”</p>
            <p className="mt-3 font-display text-sm font-semibold text-chalk">{rec.name}</p>
            <p className="mt-0.5 text-xs text-fog">{rec.title}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
