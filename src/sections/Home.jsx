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
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* ── Background layer: full-bleed portrait ── */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/profile.jpg"
          alt=""
          fetchpriority="high"
          className="h-full w-full object-cover object-[center_20%]"
        />
        {/* Reading scrims — dark gutters left & right, fade top & bottom,
            so the person stays lit in the centre while text stays legible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-15% via-ink/45 via-40% to-transparent to-62%" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink from-8% via-ink/45 via-27% to-transparent to-50%" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-8% via-transparent to-ink/60" />
        {/* extra veil on small screens where columns overlap the photo */}
        <div className="absolute inset-0 bg-ink/40 md:bg-transparent" />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-editorial items-center px-6 pt-28 pb-16 sm:px-8 md:pt-24 md:pb-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Left — headline */}
          <motion.div {...rise(0)} className="md:col-span-6 lg:col-span-5">
            <span className="kicker">{hero.kicker}</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-chalk drop-shadow-sm sm:text-5xl lg:text-[3.75rem]">
              I&apos;m {site.shortName} —{' '}
              <span className="text-fog">{hero.headline}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist sm:text-lg">
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
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-ink/40 px-6 py-3 text-sm font-semibold text-chalk backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
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

          {/* Spacer — the portrait shows through here on desktop */}
          <div className="hidden md:col-span-2 md:block lg:col-span-4" />

          {/* Right — sidebar */}
          <motion.div {...rise(0.3)} className="md:col-span-4 lg:col-span-3">
            <div className="space-y-8">
              <div>
                <span className="kicker">{hero.sidebar.now.label}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-chalk">
                  {hero.sidebar.now.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
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
                <p className="mt-4 text-sm leading-relaxed text-mist">
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
      </div>
    </section>
  );
};

export default Home;
