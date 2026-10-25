import { motion, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { hero, site } from '../data/content';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        };

  const renderHeadline = () => {
    const part = hero.headlineAccent;
    if (!part || !hero.headline.includes(part)) return hero.headline;
    const [before, after] = hero.headline.split(part);
    return (
      <>
        {before}
        <span className="relative whitespace-nowrap">
          {part}
          <span
            aria-hidden
            className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-accent sm:-bottom-1 sm:h-[4px]"
          />
        </span>
        {after}
      </>
    );
  };

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden md:block md:min-h-[100svh]"
    >
      {/* Photo: stacked at the top on mobile (fades to solid ink), full-bleed on desktop */}
      <div
        aria-hidden
        className="relative h-[44svh] w-full shrink-0 md:absolute md:inset-0 md:h-full"
      >
        <img
          src="/profile.jpg"
          alt=""
          fetchpriority="high"
          className="h-full w-full object-cover object-[58%_8%]"
        />
        {/* Mobile scrims: fade the photo into solid ink so text below reads at full contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-[0%] via-ink/80 via-[18%] to-ink/10 to-[72%] md:hidden" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/50 to-transparent md:hidden" />
        {/* Desktop scrims: left scrim keeps the headline on true ink; lower third drops the shirt into shadow */}
        <div className="hidden md:absolute md:inset-0 md:block md:bg-gradient-to-r md:from-ink md:from-[10%] md:via-ink/70 md:via-[36%] md:to-transparent md:to-[72%]" />
        <div className="hidden md:absolute md:inset-0 md:block md:bg-gradient-to-t md:from-ink md:from-[2%] md:via-ink/55 md:via-[26%] md:to-transparent md:to-[58%]" />
        <div className="hidden md:absolute md:inset-x-0 md:top-0 md:block md:h-32 md:bg-gradient-to-b md:from-ink/70 md:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-editorial px-6 pb-16 pt-7 sm:px-8 md:flex md:min-h-[100svh] md:items-center md:pb-20 md:pt-28">
        <div className="grid w-full grid-cols-1 items-end gap-10 md:grid-cols-12 md:items-center md:gap-14">
          <motion.div {...rise(0)} className="md:col-span-7 lg:col-span-6">
            <p className="text-sm font-medium text-mist">{site.name}</p>
            <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fog">
              {hero.kicker}
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-chalk sm:text-5xl lg:text-[3.35rem]">
              {renderHeadline()}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ScrollLink
                to={hero.primaryCta.to}
                href={`#${hero.primaryCta.to}`}
                smooth
                offset={-90}
                duration={500}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover"
              >
                {hero.primaryCta.label}
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </ScrollLink>
              <a
                href={hero.resumeCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 px-5 py-2.5 text-sm font-semibold text-chalk backdrop-blur-sm transition-colors hover:border-chalk/40"
              >
                {hero.resumeCta.label}
                <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          <div className="hidden md:col-span-1 md:block lg:col-span-3" />

          <motion.div
            {...rise(0.15)}
            className="rounded-xl border border-line bg-panel/50 p-5 md:col-span-4 md:border-0 md:bg-transparent md:p-0 lg:col-span-3"
          >
            <span className="kicker">{hero.now.label}</span>
            <h2 className="mt-4 font-display text-lg font-semibold text-chalk">
              {hero.now.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{hero.now.body}</p>
            <SocialLinks className="mt-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
