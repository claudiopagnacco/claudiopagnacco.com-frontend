import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_project_urls } from "../../hooks/config";
import { localhost } from "../../hooks/config.js";
import axios from "axios";
import PingPong from "./pingpong";

export default function PingPongList({ i, accent }) {
  const [pingpongs, setPingpongs] = useState([]);
  const [error, setError] = useState();

  const { slug } = useParams();
  const project_urls = get_project_urls(slug);
  useEffect(() => {
    axios
      .get(project_urls.ping_sections)
      .then(({ data }) => setPingpongs(data.data))
      .catch((error) => setError(error));
  }, [project_urls.ping_sections]);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  const listPingpong = pingpongs.map((pingpong) => {
    return pingpong.attributes.section[i].pingpongSection.map((ping, i) => {
      return (
        <PingPong
          localhost={localhost}
          title={ping.title}
          img={ping.img.data.attributes}
          description={ping.description}
          accent={accent}
          i={i}
          key={ping.id}
        />
      );
    });
  });

  return <>{listPingpong}</>;
}
