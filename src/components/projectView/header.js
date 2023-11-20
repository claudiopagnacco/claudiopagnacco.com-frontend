import { localhost } from "../../hooks/config.js";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext.tsx";
import { Webp } from "../../hooks/config.js";

export default function Header({ project }) {
  const { stateTheme } = useContext(ThemeContext);
  const foreground = stateTheme
    ? project.attributes.darkColor
    : project.attributes.lightColor;

  return (
    <>
      <div
        className="headSection"
        style={{
          backgroundColor: foreground,
        }}
      >
        <div
          className="image"
          style={{
            backgroundImage:
              "url(" +
              localhost +
              project.attributes.bigCover.data.attributes.url +
              Webp(1500) +
              ")",
          }}
        ></div>
      </div>
    </>
  );
}
