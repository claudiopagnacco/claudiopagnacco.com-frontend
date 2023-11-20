import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_project_urls } from "../../hooks/config";
import axios from "axios";
import Subsection from "./subsection";

export default function SubsectionList({ i, accent }) {
  const [subsections, setSubsections] = useState([]);
  const [error, setError] = useState();

  const { slug } = useParams();
  const project_urls = get_project_urls(slug);
  useEffect(() => {
    axios
      .get(project_urls.sub_sections)
      .then(({ data }) => setSubsections(data.data))
      .catch((error) => setError(error));
  }, [project_urls.sub_sections]);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  const listSubsection = subsections.map((subsection) => {
    return subsection.attributes.section[i].subsection.map((sub) => {
      return (
        <Subsection
          title={sub.title}
          main={sub.main}
          accent={accent}
          key={sub.id}
        />
      );
    });
  });

  return (
    <>
      {listSubsection}
    </>
  );
}
