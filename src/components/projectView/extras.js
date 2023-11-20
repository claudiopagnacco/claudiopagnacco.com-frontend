import ScrollEffect from "../animations/scrollEffect";

export default function Extras({ project }) {
  return (
    <>
      <ScrollEffect className="container extras">
        <div className="row">
          <div className="col-12-xs col-6-m extra-label horizontal-centered">
            Role:
          </div>
          <div className="col-12-xs col-6-m extra-text horizontal-centered extra-text">
            {project.attributes.role}
          </div>
        </div>
        <div className="row">
          <div className="col-12-xs col-6-m extra-label horizontal-centered">
            Tools:
          </div>
          <div className="col-12-xs col-6-m extra-text horizontal-centered extra-text">
            {project.attributes.tools}
          </div>
        </div>
        <div className="row">
          <div className="col-12-xs col-6-m extra-label horizontal-centered">
            Duration:
          </div>
          <div className="col-12-xs col-6-m extra-text horizontal-centered extra-text">
            {project.attributes.duration}
          </div>
        </div>
      </ScrollEffect>
    </>
  );
}
