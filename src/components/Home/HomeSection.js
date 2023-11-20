import ScrollEffect from "../animations/scrollEffect";
import { localhost } from "../../hooks/config";
import { Webp } from "../../hooks/config";
import Button from "../library/button";
import Markdown from "../projectView/markdown";

import { Section, Container, Row, Col } from "../Responsive/Layout";
import { Parallax } from "react-scroll-parallax";

const parallax = {
  translateY: [
    [-10, 10],
    [10, -10],
  ],
  rotateX: [-5, 15],
  rotateY: [5, -15],
  scale: [0.9, 1.1],
};

export default function HomeSection({ data, i, height }) {
  let layout = {
    small: { xs: 12, s: 12, m: 12, l: 5, xl: 5, xxl: 4, class: "" },
    big: { xs: 12, s: 12, m: 12, l: 7, xl: 7, xxl: 8, class: "" },
  };
  let classes = {
    section: i % 2 === 0 ? "zig" : "zag",
    col_left: i % 2 === 0 ? layout.big : layout.small,
    col_right: i % 2 === 0 ? layout.small : layout.big,
  };
  classes.col_right.class = "extra-padding-left";

  const text = data.attributes.HomeSection.map((section) => {
    return <Subsection data={section} height={height} key={section.id} />;
  });

  return (
    <>
      <Parallax translateY={parallax.translateY[0]}>
        <Section
          classes={{ class: classes.section + (i === 0 ? " no-margin" : "") }}
          id={data.attributes.class}
        >
          <Container>
            <h2>
              {data.attributes.title}
              <div />
            </h2>
            <Row>
              <Col
                css={{ alignSelf: "center", perspective: "500px" }}
                classes={classes.col_left}
              >
                {i % 2 === 0 ? (
                  text
                ) : data.attributes.isImages ? (
                  <>
                    <Images
                      data={data.attributes.images.data}
                      height={height}
                      zig
                    />
                  </>
                ) : null}
              </Col>
              <Col
                css={{ alignSelf: "center", perspective: "500px" }}
                classes={classes.col_right}
              >
                {i % 2 !== 0 ? (
                  text
                ) : i === 0 ? (
                  <HomeCard zag type="info" />
                ) : data.attributes.isImages ? (
                  <>
                    <Images
                      data={data.attributes.images.data}
                      height={height}
                      zag
                    />
                  </>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Section>
      </Parallax>
    </>
  );
}

function Subsection({ data, height }) {
  return (
    <>
      <div className="subsection">
        <ScrollEffect height={height}>
          {data.title ? <h3>{data.title}</h3> : null}
          <Markdown main={data.description} />
          {data.isImages && <Images data={data.images.data} height={height} />}
          {data.isCTA && <Buttons data={data.cta.cta} height={height} />}
        </ScrollEffect>
      </div>
    </>
  );
}

function Images({ data, height, zig }) {
  return (
    <>
      {data.map((image) => {
        return (
          <ScrollEffect height={height} key={image.id}>
            <HomeCard zig={zig}>
              <img
                alt={image.attributes.alternativeText}
                src={localhost + image.attributes.url + Webp()}
                loading="lazy"
                key={image.id}
              />
            </HomeCard>
          </ScrollEffect>
        );
      })}
    </>
  );
}

function Buttons({ data }) {
  return (
    <>
      {data.map((button, i) => {
        return (
          <Button
            variant={button.type + " margin-" + button.margin}
            to={button.to}
            blank={false}
            icon="forward"
            iconPosition="right"
            label={button.title}
            key={i}
          />
        );
      })}
    </>
  );
}

function HomeCard({ type, zig, children }) {
  return (
    <Parallax
      scale={parallax.scale}
      rotateY={
        zig
          ? parallax.rotateY.map((elemento) => -1 * elemento)
          : parallax.rotateY
      }
      rotateX={parallax.rotateX}
      translateY={parallax.translateY[0]}
    >
      <div className="more-container">
        <div className="more" style={type === "info" ? {padding: "1rem"} : null }>
          {type === "info" ? (
            <>
              <h4 style={{ textAlign: "center" }}>Claudio Pagnacco</h4>
              <h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.16personalities.com/enfp-personality"
                >
                  ENFP-T
                </a>
              </h3>
              <div className="row avatarRow">
                <div className="avatar"></div>
              </div>
              <div className="text-centered" style={{ marginBottom: "1rem" }}>
                <Button
                  label="Resume"
                  to="pdf/resume-claudio-pagnacco.pdf"
                  variant="contained primary small"
                  icon="download"
                  iconPosition="left"
                  blank={true}
                />
              </div>
              <div className="text-centered">
                <Button
                  variant="outlined secondary margin-right small"
                  to="https://www.instagram.com/claudio.pagnacco/"
                  blank={true}
                  icon="instagram"
                />
                <Button
                  variant="outlined secondary small"
                  to="https://www.linkedin.com/in/claudio-pagnacco/"
                  blank={true}
                  icon="linkedin"
                />
                <Button
                  variant="outlined secondary margin-left small"
                  to="mailto:claudio.pagnacco@gmail.com"
                  blank={true}
                  icon="mail"
                />
              </div>
            </>
          ) : (
            children
          )}
        </div>
      </div>
    </Parallax>
  );
}
