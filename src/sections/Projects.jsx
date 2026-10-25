import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projects, recommendations, spotlight } from '../data/content';

const Tags = ({ tags, className = '' }) => (
  <ul className={`flex flex-wrap gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-fog ${className}`}>
    {tags.map((tag) => (
      <li key={tag} className="rounded-full border border-line px-2.5 py-1">
        {tag}
      </li>
    ))}
  </ul>
);

const Projects = () => {
  return (
    <Section id="projects" kicker={projects.kicker} heading={projects.heading}>
      {/* Featured — card treatment above the metric rows */}
      <Reveal>
        <article className="rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-chalk/25 sm:p-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-chalk">
            Featured
          </p>
          <h3 className="mt-5 font-display text-2xl font-bold text-chalk sm:text-3xl">
            {projects.lead.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-fog">{projects.lead.what}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">{projects.lead.did}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-chalk">{projects.lead.outcome}</p>
          <Tags tags={projects.lead.tags} className="mt-6" />
        </article>
      </Reveal>

      {/* Metric-led rows — the number is the hero of each line */}
      <ol className="mt-10 divide-y divide-line border-y border-line">
        {projects.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.05} className="py-7">
            <div className="grid gap-4 sm:grid-cols-12 sm:items-center sm:gap-8">
              <div className="sm:col-span-3">
                <p className="font-mono text-[0.7rem] text-fog">
                  {String(i + 2).padStart(2, '0')}
                </p>
                <p className="mt-2 font-display text-4xl font-bold leading-none tracking-tight text-chalk sm:text-5xl">
                  {item.metric}
                </p>
                <p className="mt-2 text-xs text-fog">{item.metricLabel}</p>
              </div>
              <div className="sm:col-span-6">
                <h3 className="font-display text-lg font-semibold text-chalk sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fog">{item.desc}</p>
              </div>
              <div className="sm:col-span-3 sm:flex sm:justify-end">
                <Tags tags={item.tags} />
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal as="li" delay={0.16} className="py-7">
          <div className="grid gap-4 sm:grid-cols-12 sm:items-baseline sm:gap-8">
            <div className="sm:col-span-3">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fog">
                {projects.kiln.kicker}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-chalk">
                {projects.kiln.title}
              </h3>
            </div>
            <div className="sm:col-span-9">
              <p className="max-w-xl text-sm leading-relaxed text-fog">{projects.kiln.what}</p>
              <Tags tags={projects.kiln.tags} className="mt-3" />
              <a
                href={projects.kiln.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-chalk transition-colors hover:text-mist"
              >
                {projects.kiln.hrefLabel}
                <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
