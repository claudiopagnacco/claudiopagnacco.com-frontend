import { Webp } from "../../hooks/config";

export default function Media({ localhost, img }) {
  const type = img.mime;

  switch (type) {
    case "video/quicktime":
      return <Video img={img} localhost={localhost} />;
    case "video/mp4":
      return <Video img={img} localhost={localhost} />;
    default:
      return <Img img={img} localhost={localhost} />;
  }
}

function Img({ localhost, img }) {
  const url = img.url;
  const alt = img.alternativeText;
  const caption = img.capition;
  return (
    <img
      caption={caption}
      src={localhost + url + Webp(500)}
      alt={alt}
      loading="lazy"
    />
  );
}

function Video({ localhost, img }) {
  const url = img.url;
  const alt = img.alternativeText;
  const caption = img.capition;
  return (
    <>
      <video
        alt={alt}
        capition={caption}
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={localhost + url} type="video/mp4" />
      </video>
    </>
  );
}
