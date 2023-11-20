import { motion } from "framer-motion";
export default function ScrollEffect({ children, height, className}) {
  const amount = height ? height : 0.2;
  const mo = {
    y: 0,
    scale: 0.9,
    type: "spring",
    duration: 0.8,
    once: false,
    amount: amount,
  };

  return (
    <motion.div
      initial={{ y: mo.y, opacity: 0, scale: mo.scale }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: mo.type,
          duration: mo.duration,
        },
      }}
      viewport={{ once: mo.once, amount: mo.amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
