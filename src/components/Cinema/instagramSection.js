import InstagramCarousel from "./instagramCarousel";
export default function InstagramSection() {
  return (
    <>
      <div className="instagram section">
        <div className="container">
          <div className="row">
            <div className="col-12-xs text-centered">
              <h2>Photography</h2>
              <p>
              Over the years, I've nurtured a passion for photography, capturing unforgettable <b>moments</b>.<br />
              And with my trusty drone, every <b>adventure</b> becomes a perfect companion.
                <br /><br />
                <a href="https://www.instagram.com/claudio.pagnacco/">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
        <InstagramCarousel />
      </div>
    </>
  );
}
