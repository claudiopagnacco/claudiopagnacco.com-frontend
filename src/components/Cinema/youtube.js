export default function Youtube ({url, autoplay, className}) {
  const src = autoplay ? url + "?autoplay=1 " : url;
    return (
      <>
        <div className={"Youtube " + className}>
          <iframe
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
}
