import { HashLink } from "react-router-hash-link";
import { Link as LiLink } from "react-scroll";
import Icon from "../library/icon";

export default function SideNav({ project }) {
  function SideLink({ section }) {
    return (
      <>
        <li>
          <LiLink
            activeClass="active"
            offset={-50}
            smooth
            spy
            to={section.sectionTag}
          >
            {section.sectionTag}
          </LiLink>
        </li>
      </>
    );
  }

  return (
    <>
      <ul className="sideNav">
        {project.attributes.section.map((section, i) => {
          return <SideLink section={section} key={i} />;
        })}
        <HashLink smooth to="#top">
          Back to Top <Icon icon="up" />
        </HashLink>
      </ul>
    </>
  );
}
