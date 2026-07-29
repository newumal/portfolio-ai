import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { contact, site } from '../data/content';

const Contact = () => {
  return (
    <Section id="contact" kicker={contact.kicker} heading={contact.heading}>
      <Reveal className="max-w-xl" delay={0.05}>
        <p className="text-base leading-relaxed text-fog sm:text-lg">{contact.blurb}</p>

        <div className="mt-8 space-y-4">
          <a
            href={site.email ? `mailto:${site.email}` : undefined}
            className="flex items-center gap-3 text-sm text-fog transition-colors hover:text-accent"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-accent">
              <FaEnvelope className="h-4 w-4" />
            </span>
            {site.email}
          </a>
          <div className="flex items-center gap-3 text-sm text-fog">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-accent">
              <FaMapMarkerAlt className="h-4 w-4" />
            </span>
            {site.location}
          </div>
        </div>

        <div className="mt-10">
          <span className="kicker">Elsewhere</span>
          <SocialLinks className="mt-4" />
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
