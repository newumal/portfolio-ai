import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { socials } from '../data/content';

const links = [
  { icon: FaLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: socials.github, label: 'GitHub' },
  { icon: FaYoutube, href: socials.youtube, label: 'YouTube' },
  { icon: FaEnvelope, href: socials.email, label: 'Email' },
];

/**
 * Row of social icons. `variant="ghost"` = bordered chips, `variant="plain"` = bare icons.
 */
const SocialLinks = ({ variant = 'ghost', className = '' }) => {
  const base =
    'transition-colors duration-300 text-fog hover:text-accent focus-visible:text-accent';
  const chip =
    variant === 'ghost'
      ? 'grid h-11 w-11 place-items-center rounded-full border border-line hover:border-accent/60 bg-panel'
      : '';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => {
        const isMail = href.startsWith('mailto:');
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            className={`${base} ${chip}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
