// Framer Motion settings used across the site.
// Use them like: <motion.section {...fadeUp}>

// Fades in and slides up when it scrolls into view (only the first time)
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Lifts a card a little when the mouse is over it
export const lift = {
  whileHover: { y: -8 },
  transition: { type: "spring", stiffness: 300 },
};
