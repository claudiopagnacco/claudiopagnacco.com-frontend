import "./Project.scss";
import axios from "axios";
import { get_project_urls } from "../hooks/config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedPage from "../components/animations/AnimatedPage";

import { useNavigate } from 'react-router-dom';

import Header from "../components/projectView/header";
import HelmetData from "../components/helmet";
import Extras from "../components/projectView/extras";
import Section from "../components/projectView/section";
import SideNav from "../components/projectView/sidenav";
import Next from "../components/projectView/next";
import Back from "../components/projectView/back";

function Project() {
  const [project, setProject] = useState([]);
  const [error, setError] = useState();

  const { slug } = useParams();
  const navigate = useNavigate();
  const project_urls = get_project_urls(slug);
  useEffect(() => {
    axios
      .get(project_urls.project)
      .then(({ data }) => setProject(data.data))
      .catch((error) => setError(error));
  }, [project_urls.project]);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  if (project.length === 0) {
    navigate('/404-not-found');
  } 

  const listHelmet = project.map((project) => {
    return (
      <HelmetData
        title={project.attributes.title}
        description={project.attributes.description}
        key={project.id}
      />
    );
  });

  const listHeader = project.map((project) => {
    return <Header project={project} key={project.id} />;
  });

  const listExtras = project.map((project) => {
    return <Extras project={project} key={project.id} />;
  });

  const listSections = project.map((project) => {
    return project.attributes.section.map((section, i) => {
      return (
        <Section project={project} section={section} i={i} key={section.id} />
      );
    });
  });

  const liSideNav = project.map((project) => {
    return <SideNav project={project} key={project.id} />;
  });

  return (
    <>
      {listHelmet}
      <AnimatedPage>
        <div className="project-page">
          {listHeader}

          {listExtras}

          {listSections}

          {liSideNav}

          <div className="pjNav">
            <Back slug={slug} />
            <Next slug={slug} />
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Project;
