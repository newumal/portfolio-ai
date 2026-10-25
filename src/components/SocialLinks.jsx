import { FaGithub, FaLinkedin, FaYoutube, FaMediumM, FaEnvelope } from 'react-icons/fa';
import { socials } from '../data/content';

const links = [
  { icon: FaLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: socials.github, label: 'GitHub' },
  { icon: FaYoutube, href: socials.youtube, label: 'YouTube' },
  { icon: FaMediumM, href: socials.medium, label: 'Medium' },
  { icon: FaEnvelope, href: socials.email, label: 'Email' },
];

/**
 * Row of social icons. `variant="ghost"` = bordered chips, `variant="plain"` = bare icons.
 */
const SocialLinks = ({ variant = 'ghost', className = '' }) => {
  const base =
    'transition-colors duration-300 text-fog hover:text-chalk focus-visible:text-chalk';
  const chip =
    variant === 'ghost'
      ? 'grid h-10 w-10 place-items-center rounded-full border border-line hover:border-chalk/40 bg-panel/40'
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
