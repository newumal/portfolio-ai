import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fade / slide-up on scroll into view. Subtle and senior — no bounce.
 * Respects prefers-reduced-motion (renders static when set).
 */
const Reveal = ({ children, delay = 0, y = 16, className = '', as = 'div', ...rest }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
