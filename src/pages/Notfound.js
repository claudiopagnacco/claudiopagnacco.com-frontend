import AnimatedPage from "../components/animations/AnimatedPage";
import HelmetData from "../components/helmet";
import { Spacer, Container, Row, Col } from "../components/Responsive/Layout";
import "./Notfound.scss";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Notfound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <>
      <HelmetData
        title="404 Not found"
        description="Oops, looks like the page you were looking for doesn't exist. Try checking that the address is correct."
      />
      <AnimatedPage>
        <Spacer />
        <Spacer />
        <div className="notfound-page">
          <Container>
            <Row>
              <Col classes={{ xs: 12, m: 9, l: 6 }}>
                <h2>
                  The page you tried to search for does not exist or has been
                  moved 🧐
                </h2>
                <p className="tip">
                  Try to check if the url is correct
                </p>
                <h3>
                  You will be redirected to the home page in
                  <span className="seconds">{countdown}</span>seconds.
                </h3>
              </Col>
              <Col classes={{ xs: 12, m: 3, l: 6 }}></Col>
            </Row>
          </Container>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Notfound;
