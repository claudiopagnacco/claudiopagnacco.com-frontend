import { motion } from "framer-motion";

export default function Logo() {
  return (
    <>
      <div className="Logo">
        <motion.svg
          width="63"
          height="56"
          viewBox="0 0 63 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.15 }}
          whileTap={{scale: 0.9}}
          transition={{ type: "spring" }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{
              duration: 2,
              type: "easeInOut",
            }}
            strokeWidth={6}
            strokeDasharray="0"
            fill="none"
            d="M19.5 3H18.6724C7.00552 3 -0.148164 15.7873 5.95669 25.7295V25.7295C13.198 37.5225 31.2 33.9598 33.4036 20.2976L34.4717 13.6756C35.7589 5.69479 44.1818 1.02848 51.6306 4.16951V4.16951C61.7424 8.43353 61.8152 22.7368 51.7473 27.1036L45.2905 29.9041C40.1679 32.126 36.6385 36.934 36.054 42.487L35 52.5"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </>
  );
}
