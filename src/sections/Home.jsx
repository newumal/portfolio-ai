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
      className="relative flex flex-col overflow-hidden lg:block lg:min-h-[100svh]"
    >
      {/* Photo: a top band below lg; its own right-hand lane on large screens so it never sits under the text */}
      <div
        aria-hidden
        className="relative h-[44svh] w-full shrink-0 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[46%]"
      >
        <img
          src="/profile.jpg"
          alt=""
          fetchpriority="high"
          className="h-full w-full object-cover object-[52%_8%]"
        />
        {/* Stacked (mobile + tablet) scrims: fade the photo into solid ink so text below reads at full contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-[0%] via-ink/80 via-[18%] to-ink/10 to-[72%] lg:hidden" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/50 to-transparent lg:hidden" />
        {/* Large-screen scrims: soften the lane's left edge into ink, plus top (nav) and a gentle base */}
        <div className="hidden lg:absolute lg:inset-0 lg:block lg:bg-gradient-to-r lg:from-ink lg:via-ink/25 lg:via-[20%] lg:to-transparent lg:to-[52%]" />
        <div className="hidden lg:absolute lg:inset-x-0 lg:top-0 lg:block lg:h-28 lg:bg-gradient-to-b lg:from-ink/60 lg:to-transparent" />
        <div className="hidden lg:absolute lg:inset-x-0 lg:bottom-0 lg:block lg:h-1/4 lg:bg-gradient-to-t lg:from-ink/50 lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-editorial px-6 pb-16 pt-7 sm:px-8 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-20 lg:pr-[50%] lg:pt-28">
        <motion.div {...rise(0)} className="w-full">
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

          <div className="mt-10 max-w-md border-t border-line pt-7">
            <span className="kicker">{hero.now.label}</span>
            <h2 className="mt-4 font-display text-lg font-semibold text-chalk">
              {hero.now.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{hero.now.body}</p>
            <SocialLinks className="mt-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
