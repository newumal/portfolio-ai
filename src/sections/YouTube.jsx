import { FaPlay, FaYoutube } from 'react-icons/fa';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { youtube } from '../data/content';

const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

const Thumb = ({ id, title, duration, compact = false }) => (
  <div
    className={`relative overflow-hidden bg-ink ${
      compact ? 'aspect-video w-[8.5rem] shrink-0 rounded-md' : 'aspect-video w-full rounded-lg'
    }`}
  >
    <img
      src={thumb(id)}
      alt=""
      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/10" />
    <span
      className={`absolute grid place-items-center rounded-full bg-chalk text-ink ${
        compact ? 'inset-0 m-auto h-8 w-8' : 'bottom-3 left-3 h-10 w-10'
      }`}
    >
      <FaPlay className={compact ? 'ml-0.5 h-2.5 w-2.5' : 'ml-0.5 h-3 w-3'} />
    </span>
    {duration && (
      <span className="absolute bottom-2 right-2 rounded bg-ink/80 px-1.5 py-0.5 font-mono text-[11px] text-chalk">
        {duration}
      </span>
    )}
    <span className="sr-only">Watch {title} on YouTube</span>
  </div>
);

const YouTube = () => {
  const [featured, ...rest] = youtube.items;

  return (
    <Section
      id="sessions"
      kicker={youtube.kicker}
      heading={youtube.heading}
      intro={youtube.intro}
    >
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <a
            href={watchUrl(featured.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Thumb
              id={featured.id}
              title={featured.title}
              duration={featured.duration}
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-kicker text-fog">
              {featured.topic}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-chalk transition-colors group-hover:text-mist sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
              {featured.blurb}
            </p>
          </a>
        </Reveal>

        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-kicker text-fog">
            More sessions
          </p>
          <ul className="divide-y divide-line border-y border-line">
            {rest.map((item, i) => (
              <Reveal as="li" key={item.id} delay={0.06 + i * 0.05}>
                <a
                  href={watchUrl(item.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 py-4"
                >
                  <Thumb id={item.id} title={item.title} duration={item.duration} compact />
                  <div className="min-w-0 self-center">
                    <p className="text-xs font-semibold uppercase tracking-kicker text-fog">
                      {item.topic}
                    </p>
                    <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-chalk transition-colors group-hover:text-mist">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>

          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-6"
          >
            <FaYoutube className="h-3.5 w-3.5" />
            {youtube.channelLabel}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default YouTube;
