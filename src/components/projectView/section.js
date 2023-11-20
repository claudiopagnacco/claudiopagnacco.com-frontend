import ScrollEffect from "../animations/scrollEffect";
import PingPongList from "./pingponglist";
import SubsectionList from "./subsectionlist";
import Markdown from "./markdown";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext.tsx";

export default function Section({ i, project, section }) {
  const { stateTheme } = useContext(ThemeContext);
  const accent = stateTheme
    ? project.attributes.darkAccent
    : project.attributes.lightAccent;

  const sectionClass = section.isPingpong ? "ping-pong" : "sub-section";
  return (
    <>
      <div
        className={"section " + sectionClass}
        key={i}
        id={section.sectionTag}
      >
        <ScrollEffect className="container">
          <div className="row">
            <div className="col-12-xs horizontal-centered">
              <div className="section-title">
                <h2>- {section.title} -</h2>
              </div>
            </div>
          </div>
          {section.main && (
            <div className="row">
              <div className="col-12-xs horizontal-centered">
                <div className="section-main">
                  <Markdown main={section.main} />
                </div>
              </div>
            </div>
          )}
        </ScrollEffect>

        {section.isPingpong ? (
          <PingPongList i={i} accent={accent} />
        ) : (
          <SubsectionList i={i} accent={accent} />
        )}
      </div>
    </>
  );
}
