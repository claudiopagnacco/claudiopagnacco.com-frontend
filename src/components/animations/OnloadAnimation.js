import { motion } from "framer-motion";

export default function OnloadAnimation() {
  return (
    <>
      <motion.div
        style={{ transition: "none" }}
        className="OnloadAnimation"
        initial={{
          transform: "translate(-50%, -50%) scale(3)",
          top: "50vh",
          opacity: 1,
        }}
        animate={{
          transform: "translate(-50%, -50%) scale(0)",
          top: "30px",
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
}
