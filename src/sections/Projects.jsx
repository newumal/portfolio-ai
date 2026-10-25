import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { projects, recommendations, spotlight } from '../data/content';

const Projects = () => {
  return (
    <>
      <Section
        id="projects"
        kicker={projects.kicker}
        heading={projects.heading}
        intro={projects.intro}
      >
        {projects.featured && (
          <Reveal
            delay={0.04}
            className="mb-6 flex flex-col rounded-2xl border border-accent/40 bg-accent/[0.06] p-8 transition-colors duration-300 hover:border-accent/70 sm:p-10 md:flex-row md:items-start md:gap-10"
          >
            <div className="flex-1">
              <span className="kicker">{projects.featured.kicker}</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-chalk sm:text-3xl">
                {projects.featured.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-fog">{projects.featured.what}</p>
              <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed">
                <p className="text-fog">
                  <span className="font-semibold text-chalk">What I did: </span>
                  {projects.featured.did}
                </p>
                <p className="text-chalk">
                  <span className="font-semibold text-accent">Outcome: </span>
                  {projects.featured.outcome}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {projects.featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={projects.featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-hover md:mt-12"
            >
              {projects.featured.hrefLabel}
              <FaArrowRight className="h-3 w-3" />
            </a>
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 0.08}
              className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-8 transition-colors duration-300 hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-chalk">
                  {project.title}
                </h3>
              </div>
              <p className="mt-2 text-sm font-medium text-fog">{project.what}</p>

              <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed">
                <p className="text-fog">
                  <span className="font-semibold text-chalk">What I did: </span>
                  {project.did}
                </p>
                <p className="text-chalk">
                  <span className="font-semibold text-accent">Outcome: </span>
                  {project.outcome}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Recognition spotlight — internal validation of the Copilot R&D */}
        <Reveal
          delay={0.1}
          className="relative mt-14 overflow-hidden rounded-3xl border border-accent/30 bg-accent/[0.06] p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-8 select-none font-display text-[9rem] leading-none text-accent/10"
          >
            &ldquo;
          </div>
          <span className="kicker">Recognition</span>
          <blockquote className="relative mt-5 max-w-3xl font-display text-xl font-semibold leading-snug text-chalk sm:text-2xl">
            {spotlight.quote}
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-accent">{spotlight.attribution}</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">{spotlight.context}</p>
        </Reveal>
      </Section>

      <Section
        id="recommendations"
        kicker={recommendations.kicker}
        heading={recommendations.heading}
        className="bg-panel/40"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {recommendations.items.map((rec, i) => (
            <Reveal
              key={rec.name}
              delay={i * 0.1}
              className="flex h-full flex-col rounded-2xl border border-line bg-panel p-8"
            >
              <FaQuoteLeft className="h-6 w-6 text-accent/40" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-fog">
                {rec.quote}
              </p>
              <div className="mt-6 border-t border-line pt-5">
                <p className="font-display font-semibold text-chalk">{rec.name}</p>
                <p className="mt-1 text-sm text-fog">{rec.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects;
