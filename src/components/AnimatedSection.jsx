import { motion as Motion, useReducedMotion } from "framer-motion";

const AnimatedSection = ({ as = "div", children, className = "", delay = 0 }) => {
  const reduceMotion = useReducedMotion();
  const Component = Motion[as] || Motion.div;

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;

