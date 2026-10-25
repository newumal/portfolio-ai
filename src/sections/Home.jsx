import { motion, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
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

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <img
          src="/profile.jpg"
          alt=""
          fetchpriority="high"
          className="h-full w-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-[10%] via-ink/70 via-[36%] to-transparent to-[70%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 via-[30%] to-ink/35 md:via-ink/15 md:to-ink/50" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-editorial items-end px-6 pb-16 pt-28 sm:px-8 md:items-center md:pb-20">
        <div className="grid w-full grid-cols-1 items-end gap-14 md:grid-cols-12 md:items-center">
          <motion.div {...rise(0)} className="md:col-span-7 lg:col-span-6">
            <p className="text-sm font-medium text-mist">{site.name}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-kicker text-fog">
              {hero.kicker}
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-chalk sm:text-5xl lg:text-[3.25rem]">
              {hero.headline}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ScrollLink
                to={hero.primaryCta.to}
                href={`#${hero.primaryCta.to}`}
                smooth
                offset={-90}
                duration={500}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {hero.primaryCta.label}
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </ScrollLink>
              <a
                href={hero.resumeCta.href}
                download={hero.resumeCta.download}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 px-5 py-2.5 text-sm font-semibold text-chalk backdrop-blur-sm transition-colors hover:border-chalk/40"
              >
                <FaDownload className="h-3 w-3" />
                {hero.resumeCta.label}
              </a>
            </div>
          </motion.div>

          <div className="hidden md:col-span-1 md:block lg:col-span-3" />

          <motion.div
            {...rise(0.15)}
            className="rounded-xl bg-ink/75 p-4 backdrop-blur-md md:col-span-4 md:bg-transparent md:p-0 md:backdrop-blur-none lg:col-span-3"
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
