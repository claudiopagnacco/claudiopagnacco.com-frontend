import ScrollEffect from "../animations/scrollEffect";
import Media from "./media";
import Markdown from "./markdown";

export default function PingPong({
  i,
  title,
  description,
  localhost,
  img,
  accent,
}) {
  if (i % 2 === 0) {
    return (
      <>
        <ScrollEffect className="container ping-pong">
          <div className="row">
            <div className="col-12-xs  col-7-m ping left">
              <div className="sticky">
                <div className="title">
                  <h3 style={{ color: accent }}>{title}</h3>
                </div>
                <div className="description">
                  <Markdown main={description} />
                </div>
              </div>
            </div>
            <div className="col-12-xs col-5-m pong right">
              <Media localhost={localhost} img={img} />
            </div>
          </div>
        </ScrollEffect>
      </>
    );
  } else {
    return (
      <>
        <ScrollEffect className="container ping-pong">
          <div className="row">
            <div className="col-12-xs col-5-m pong left">
              <Media localhost={localhost} img={img} />
            </div>
            <div className="col-12-xs col-7-m ping right">
              <div className="sticky">
                <div className="title">
                  <h3 style={{ color: accent }}>{title}</h3>
                </div>
                <div className="description">
                  <Markdown main={description} />
                </div>
              </div>
            </div>
          </div>
        </ScrollEffect>
      </>
    );
  }
}
