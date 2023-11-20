import { Link } from "react-router-dom";
import { localhost, Webp } from "../../hooks/config";
import Images from "../../data/images.json";

export default function instagramCarousel() {
  //Devono essere pari, modificare il numero in Creativity.scss
  const images = Images.section.fotografia;

  /* Left => si riferisce all'inclinazione della prima card
   * Bis => si riferisce al numero di immagini da replicare oltre quelle dell'array images
   */
  let left = true;
  const bis = 5;
  let rotate;
  return (
    <>
      <div className="carousel">
        <div className="set-1">
          {images.map((image, i) => {
            if (i % 2 === 0) rotate = left;
            else rotate = !left;
            return (
              <Image
                key={image.id}
                src={localhost + image.src + Webp()}
                alt={image.id}
                rotate={rotate}
                to={image.url}
              />
            );
          })}
        </div>
        <div className="set-1-bis">
          {images.map((image, i) => {
            if (i + 1 <= bis) {
              if (i % 2 === 0) rotate = left;
              else rotate = !left;
              return (
                <Image
                  key={image.id}
                  src={localhost + image.src + Webp()}
                  alt={image.id}
                  rotate={rotate}
                  to={image.url}
                />
              );
            } else return null;
          })}
        </div>
      </div>
    </>
  );
}

function Image({ src, alt, rotate, to }) {
  return (
    <Link to={to} target="_blank">
      <div className={"image " + (rotate ? "rot-l" : "rot-r")} loading="lazy">
        <img src={src} alt={"Immagine " + alt} />
      </div>
    </Link>
  );
}
