import { Link as ScrollLink } from 'react-scroll';
import { resume, site } from '../data/content';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-line px-6 py-14 sm:px-8">
      <div className="mx-auto max-w-editorial">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="cursor-pointer font-display text-lg font-bold text-chalk"
            >
              {site.shortName}
              <span className="text-accent">.</span>
            </ScrollLink>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-fog">{site.role}</p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-fog">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-chalk">
                {site.email}
              </a>
              <span>{site.location}</span>
            </div>
            <a
              href={resume.file}
              download={resume.fileName}
              className="link-underline mt-5"
            >
              Resume
            </a>
          </div>
          <SocialLinks />
        </div>
        <p className="mt-10 text-xs text-fog/70">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
