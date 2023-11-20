import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

import Button from "./library/button";
import DarkMode from "./darkmode";
import Logo from "./logo";

function PreButton() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project");
  if (isProjectPage) {
    return (
      <Button variant="contained secondary small" icon="back" to="/design" />
    );
  }
}

const Navbar = () => {
  //Effetto scrolla
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 70);
      setShadow(currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div className="Navbar">
        <div
          className={
            visible
              ? shadow
                ? "navbar visible shadow"
                : "navbar visible"
              : "navbar"
          }
        >
          <div className="container">
            <div className="row horizontal-centered">
              <div className="nav-top-left">
                <PreButton />
              </div>

              <NavLink to={"/design"}>
                <Button variant="text small" label={"Design"} />
              </NavLink>

              <NavLink to={"/"}>
                <Logo />
              </NavLink>

              <NavLink to={"/cinema"}>
                <Button variant="text small" label={"Cinema"} />
              </NavLink>

              <div className="nav-top-right">
                <DarkMode
                  onClick={() => {
                    this.handleTheme();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
