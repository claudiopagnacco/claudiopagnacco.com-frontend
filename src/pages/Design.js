import { useState, useEffect } from "react";
import axios from "axios";
import { projects_url } from "../hooks/config";

import Card from "../components/library/card";
import HelmetData from "../components/helmet";
import AnimatedPage from "../components/animations/AnimatedPage";

import "./Design.scss";

function Design() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(projects_url)
      .then(({ data }) => setProjects(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  const listCard = projects.map((project) => {
    return <Card project={project} key={project.id} />;
  });

  return (
    <>
      <HelmetData
        title="Design"
        description="Explore my curated collection of projects! Immerse yourself in captivating designs and user-centric experiences. Get inspired and discover the art of UX/UI design at its finest."
      />
      <AnimatedPage>
        <div className="design-page">
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="container">
            <div className="row">
              <div className="col-12-xs col-9-s col-5-l head">
                <h2>
                  Selected Projects <div />
                </h2>
                <p>
                  As a designer, I strive to ensure that design decisions are
                  the result of a human-centered process. I continuously learn
                  new tools and stay updated with the latest trends, always
                  keeping in mind that the user provides the most valuable
                  insights. I strongly believe that teamwork is the key to
                  success.
                </p>
              </div>
            </div>
            {listCard}
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Design;
