import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div className="animated"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: .3, ease: "easeInOut"}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
