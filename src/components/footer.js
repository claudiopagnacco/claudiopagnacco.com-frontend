import Button from"./library/button";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row horizontal-centered">
            <div>
                <Button
                  variant="contained secondary margin-right"
                  to="https://www.instagram.com/claudio.pagnacco/"
                  blank={true}
                  icon="instagram"
                />
                <Button
                  variant="contained secondary"
                  to="https://www.linkedin.com/in/claudio-pagnacco/"
                  blank={true}
                  icon="linkedin"
                />
                <Button
                  variant="contained secondary margin-left"
                  to="mailto:claudio.pagnacco@gmail.com"
                  blank={true}
                  icon="mail"
                />
            </div>
            <div className="flex-right">
              <span>Designed & Code by Claudio Pagnacco</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
