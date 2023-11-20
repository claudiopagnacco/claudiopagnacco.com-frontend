import "./Maintenance.scss";
import HelmetData from "../components/helmet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Components
import Button from "../components/library/button";
import Footer from "../components/footer";
import DarkMode from "../components/darkmode";
import AnimatedPage from "../components/animations/AnimatedPage";


function Maintenance() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gear_big = screenWidth / 6;
  const gear_small = screenWidth / 12;

  return (
    <>
      <HelmetData
        title="Website under maintenance"
        description="Ops. Sembra che il sito sia in manutenzione. Prova ad accedere più tardi, grazie."
      />
      <AnimatedPage>
        <div className="maintenance-page">
          <div className="darkmode">
            <DarkMode />
          </div>

          <div className="container full-height">
            <div className="row vertical-centered full-height">
              <div className="col-12-xs col-7-m col-7-xl">
                <div className="row">
                  <div className=" col-12-xs">
                    <h1>Website under maintenance</h1>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12-xs">
                    <h2>However, you can do the essential stuff</h2>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12-xs button-100 auto-align">
                    <Button
                      label="Download my resume"
                      to="pdf/resume-claudio-pagnacco.pdf"
                      variant="contained primary"
                      icon="download"
                      iconPosition="right"
                      blank={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-5-m col-5-xl view-from-m">
                <div className="row horizontal-centered">
                  <Gear size={gear_big} direction={"right"} />
                  <Gear size={gear_small} direction={"left"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </AnimatedPage>
    </>
  );
}

function Gear({ size, direction }) {
  const radius = direction === "left" ? [0, -360] : [0, 360];

  return (
    <>
      <motion.svg
        animate={{
          rotate: radius,
          scale: [1.1, 1.1],
        }}
        transition={{
          duration: 5,
          type: "spring",
          times: [0, 1],
          repeat: Infinity,
        }}
        width={size}
        height={size}
        viewBox="0 0 340 339"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "none",
        }}
      >
        <path
          d="M308.2 169.5C308.2 245.826 246.326 307.7 170 307.7C93.6741 307.7 31.7998 245.826 31.7998 169.5C31.7998 93.1742 93.6741 31.2998 170 31.2998C246.326 31.2998 308.2 93.1742 308.2 169.5ZM87.3378 169.5C87.3378 215.153 124.347 252.162 170 252.162C215.653 252.162 252.662 215.153 252.662 169.5C252.662 123.847 215.653 86.8378 170 86.8378C124.347 86.8378 87.3378 123.847 87.3378 169.5Z"
          fill="#F2F2F7"
        />
        <rect
          x="126.18"
          y="6.10352e-05"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          fill="#F2F2F7"
        />
        <rect
          x="258.869"
          y="18.6603"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          transform="rotate(45 258.869 18.6603)"
          fill="#F2F2F7"
        />
        <rect
          x="63.4247"
          y="214.105"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          transform="rotate(45 63.4247 214.105)"
          fill="#F2F2F7"
        />
        <rect
          x="19.1603"
          y="80.6306"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          transform="rotate(-45 19.1603 80.6306)"
          fill="#F2F2F7"
        />
        <rect
          x="214.605"
          y="276.075"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          transform="rotate(-45 214.605 276.075)"
          fill="#F2F2F7"
        />
        <rect
          x="339.5"
          y="125.68"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          transform="rotate(90 339.5 125.68)"
          fill="#F2F2F7"
        />
        <rect
          x="63.0995"
          y="125.68"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          transform="rotate(90 63.0995 125.68)"
          fill="#F2F2F7"
        />
        <rect
          x="126.18"
          y="276.401"
          width="87.6392"
          height="62.5994"
          rx="19.2614"
          fill="#F2F2F7"
        />
      </motion.svg>
    </>
  );
}

export default Maintenance;
