import { FaPlay, FaYoutube } from 'react-icons/fa';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { youtube } from '../data/content';

const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

const YouTube = () => {
  return (
    <Section
      id="sessions"
      kicker={youtube.kicker}
      heading={youtube.heading}
      intro={youtube.intro}
      className="bg-panel/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {youtube.items.map((item, i) => (
          <Reveal
            key={item.id}
            delay={(i % 2) * 0.08}
            className="h-full"
          >
            <a
              href={watchUrl(item.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-accent/50"
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                <img
                  src={thumb(item.id)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/10" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-transform group-hover:scale-110">
                    <FaPlay className="ml-0.5 h-4 w-4" />
                  </span>
                </span>
                <span className="absolute bottom-3 right-3 rounded bg-ink/80 px-2 py-0.5 text-xs font-semibold text-chalk">
                  {item.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-kicker text-accent">
                  {item.topic}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-chalk">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fog">
                  {item.blurb}
                </p>
                <span className="link-underline mt-5">
                  Watch on YouTube <FaYoutube className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 flex justify-center md:justify-start">
        <a
          href={youtube.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/40 px-6 py-3 text-sm font-semibold text-chalk transition-colors hover:border-accent/60 hover:text-accent"
        >
          <FaYoutube className="h-4 w-4" />
          {youtube.channelLabel}
        </a>
      </Reveal>
    </Section>
  );
};

export default YouTube;
