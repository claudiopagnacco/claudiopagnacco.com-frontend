import { useState, useEffect } from "react";
import { homeTexts_url } from "../hooks/config";
import axios from "axios";

import HelmetData from "../components/helmet";
import AnimatedPage from "../components/animations/AnimatedPage";
import TextWrittenAnimation from "../components/animations/textWrittenAnimation";
import { Spacer } from "../components/Responsive/Layout";
import "./Home.scss";

import HomeSection from "../components/Home/HomeSection";

export default function Home() {
  const frasi = [
    { id: 0, text: "Hi, I'm Claudio!", emoji: "👋" },
    { id: 1, text: "I am a UX/UI designer", emoji: "🧑‍🎨" },
    { id: 2, text: "and a coding enthusiast", emoji: "👨‍💻" },
    { id: 3, text: "I have a diverse range of experiences", emoji: "" },
    { id: 4, text: "including auditory accessibility", emoji: "🦻" },
    { id: 5, text: "and cinematography", emoji: "🎥" },
    { id: 6, text: "Feel free to explore my work.\n Have fun!", emoji: "🌈" },
  ];

  const height = 0.5;

  const [homeText, setHomeText] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(homeTexts_url)
      .then(({ data }) => setHomeText(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <HelmetData
        title="Claudo Pagnacco | UX/UI Designer"
        description="Welcome to my portfolio. Discover the world of UX/UI design and web development through my captivating and user-centered creations. Explore my work for interactive, useful, and delightful user experiences."
      />
      <AnimatedPage>
        <div className="home-page">
          <div className="head-section">
            <div className="container" style={{ position: "relative" }}>
              <TextWrittenAnimation frasi={frasi} />
            </div>
          </div>
          <Spacer />
          <Spacer />
          {homeText.map((section, i) => {
            return (
              <HomeSection
                data={section}
                key={section.id}
                i={i}
                height={height}
              />
            );
          })}
        </div>
      </AnimatedPage>
    </>
  );
}
