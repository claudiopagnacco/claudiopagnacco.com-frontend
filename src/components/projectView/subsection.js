import Markdown from "./markdown";
import ScrollEffect from "../animations/scrollEffect";

export default function Subsection({ title, main, accent }) {
  return (
    <>
      <ScrollEffect className="container subsection">
        <div className="row">
          <div className="col-12-xs title">
            <h3 style={{ color: accent }}>{title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12-xs subsection-main">
            <Markdown main={main} />
          </div>
        </div>
      </ScrollEffect>
    </>
  );
}
