import { motion, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { hero, site } from '../data/content';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-24 md:pb-0"
    >
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 right-[8%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute bottom-0 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-editorial grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Left — headline */}
        <motion.div {...rise(0)} className="lg:col-span-5">
          <span className="kicker">{hero.kicker}</span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-chalk sm:text-5xl lg:text-[3.75rem]">
            I&apos;m {site.shortName} —{' '}
            <span className="text-fog">{hero.headline}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fog sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ScrollLink
              to={hero.primaryCta.to}
              smooth
              offset={-90}
              duration={500}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover"
            >
              {hero.primaryCta.label}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </ScrollLink>
            <ScrollLink
              to={hero.secondaryCta.to}
              smooth
              offset={-90}
              duration={500}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-chalk transition-colors hover:border-accent/60 hover:text-accent"
            >
              {hero.secondaryCta.label}
            </ScrollLink>
          </div>

          <div className="mt-10 hidden lg:block">
            <ScrollLink
              to="about"
              smooth
              offset={-90}
              duration={600}
              aria-label="Scroll to about"
              className="grid h-14 w-14 cursor-pointer place-items-center rounded-full bg-accent text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              <FaChevronDown className="h-4 w-4 animate-scroll-bob" />
            </ScrollLink>
          </div>
        </motion.div>

        {/* Center — portrait */}
        <motion.div {...rise(0.15)} className="order-first lg:order-none lg:col-span-4">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2rem] bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel">
              <img
                src="/profile.jpg"
                alt="Portrait of Newumal Weerasinghe"
                width={1400}
                height={1400}
                fetchpriority="high"
                className="h-full w-full object-cover"
              />
              {/* Bottom fade into the page */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Right — sidebar */}
        <motion.div {...rise(0.3)} className="lg:col-span-3">
          <div className="space-y-8 lg:border-l lg:border-line lg:pl-8">
            <div>
              <span className="kicker">{hero.sidebar.now.label}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-chalk">
                {hero.sidebar.now.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">
                {hero.sidebar.now.body}
              </p>
              <ScrollLink
                to="projects"
                smooth
                offset={-90}
                duration={500}
                className="link-underline mt-4 cursor-pointer"
              >
                See the work <FaArrowRight className="h-3 w-3" />
              </ScrollLink>
            </div>

            <div className="hairline border-t pt-8">
              <span className="kicker">{hero.sidebar.focus.label}</span>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                {hero.sidebar.focus.body}
              </p>
            </div>

            <div className="hairline border-t pt-8">
              <span className="kicker">Follow me</span>
              <SocialLinks className="mt-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
