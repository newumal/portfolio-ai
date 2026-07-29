import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { contact, site } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name || 'someone'}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-chalk placeholder:text-fog/60 transition-colors focus:border-accent focus:outline-none';

  return (
    <Section id="contact" kicker={contact.kicker} heading={contact.heading}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — invitation + details */}
        <Reveal className="lg:col-span-5" delay={0.05}>
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

        {/* Right — form */}
        <Reveal className="lg:col-span-7" delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-chalk">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-chalk">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-chalk">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-hover"
            >
              {sent ? 'Opening your mail app…' : 'Send message'}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
