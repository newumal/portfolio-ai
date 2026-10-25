import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { contact, site } from '../data/content';

const Contact = () => {
  return (
    <Section id="contact" kicker={contact.kicker} heading={contact.heading}>
      <Reveal className="max-w-xl" delay={0.05}>
        <p className="text-base leading-relaxed text-fog sm:text-lg">{contact.blurb}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <FaEnvelope className="h-3.5 w-3.5" />
            {contact.ctaLabel}
            <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-fog transition-colors hover:text-chalk"
          >
            {site.email}
          </a>
        </div>

        <p className="mt-6 text-sm text-fog">{site.location}</p>

        <div className="mt-10">
          <span className="kicker">Elsewhere</span>
          <SocialLinks className="mt-4" />
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
