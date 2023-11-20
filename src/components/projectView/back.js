import { projects_url } from "../../hooks/config";
import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Icon from "../library/icon";

export default function Back({ slug }) {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(projects_url)
      .then(({ data }) => setProjects(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  const currentIndex = projects.findIndex(
    (item) => item.attributes.slug === slug
  ); // Trova l'indice dell'oggetto corrente

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1; // Indice dell'oggetto precedente

  const listPrev = projects.map((project, i) => {
    if (i === prevIndex) {
      return (
        <Button
          slug={project.attributes.slug}
          title={project.attributes.title}
          key={project.id}
        />
      );
    } else return null;
  });

  return listPrev;
}

function Button({ slug, title }) {
  return (
    <>
      <Link to={"/project/" + slug} className="back arrow">
        <Icon icon="back" />
        <span>
          Previous: <u>{title}</u>
        </span>
      </Link>
    </>
  );
}
