export default function Img({ localhost, img }) {
  const image = {
    name: img.name,
    alt: img.alternativeText,
    caption: img.capition,
    width: img.width,
    height: img.height,
    formats: {
        thumbnail: {
          width: img.formats.thumbnail.width,
          height: img.formats.thumbnail.height,
          size: img.formats.thumbnail.size,
          url: img.formats.thumbnail.url,
          cssUrl: "url('" + img.formats.thumbnail.url + "')"
        }
      },
      ext: img.ext, // .gif
      mime: img.mine, // image/gif
      size: img.size,
      url: img.url
  }

  const css = {
    //backgroundImage: "url('" + img.formats.thumbnail.url + "')",
    backgroundColor: "blue",
    height: image.height,
    width: "auto"
  }
  return (
    <>
      <img
        src={localhost + image.url}
        alt={img.alt}
        loading="lazy"
        style={css}
      />
    </>
  );
}

