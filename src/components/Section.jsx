import Reveal from './Reveal';

/**
 * Consistent section shell: id anchor, vertical rhythm, editorial max-width,
 * and an optional letter-spaced kicker + heading header.
 */
const Section = ({ id, kicker, heading, intro, children, className = '', headerAlign = 'left' }) => {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-16 sm:px-8 md:py-20 ${className}`}>
      <div className="mx-auto max-w-editorial">
        {(kicker || heading) && (
          <Reveal className={`mb-8 md:mb-10 ${headerAlign === 'center' ? 'text-center' : 'max-w-2xl'}`}>
            {kicker && <span className="kicker">{kicker}</span>}
            {heading && (
              <h2 className="section-heading mt-3 text-balance">{heading}</h2>
            )}
            {intro && (
              <p className={`mt-4 text-base leading-relaxed text-fog sm:text-lg ${headerAlign === 'center' ? 'mx-auto max-w-2xl' : ''}`}>
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
