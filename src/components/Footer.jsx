import { Link as ScrollLink } from 'react-scroll';
import { site, socials } from '../data/content';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-line px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-editorial flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <ScrollLink
            to="home"
            smooth
            duration={500}
            className="cursor-pointer font-display text-lg font-bold text-chalk"
          >
            {site.shortName}
            <span className="text-accent">.</span>
          </ScrollLink>
          <p className="mt-1 text-sm text-fog">
            {site.role} · Building with AI, {socials.youtubeHandle}
          </p>
        </div>

        <SocialLinks />
      </div>
      <p className="mx-auto mt-8 max-w-editorial text-center text-xs text-fog/70 md:text-left">
        © {new Date().getFullYear()} {site.name}. Designed & built dark-first.
      </p>
    </footer>
  );
};

export default Footer;
