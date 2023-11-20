import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReactMarkdown from "react-markdown";

import Youtube from "./youtube";
import Icon from "../library/icon";

import { localhost, Webp } from "../../hooks/config";

import { videos_url } from "../../hooks/config";
import axios from "axios";

export default function GetVideos() {
  const [getVideos, setGetVideos] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(videos_url);
        const data = response.data.data;
        setGetVideos(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  if (getVideos.length > 0) {
    return <CinemaSection getVideos={getVideos} />;
  }
}

function CinemaSection({ getVideos }) {
  const [[video, direction], setVideo] = useState([0, 0]);
  const [play, setPlay] = useState(false);

  let videos = getVideos;

  const handlePlay = () => {
    setPlay(!play);
  };

  const next = () => {
    if (!play) {
      if (video < videos.length - 1) {
        setVideo([video + 1, 1]);
      } else {
        setVideo([0, 1]);
      }
    } else return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next(); // Chiamata alla tua funzione Next()
    }, 3000000); // 60000 millisecondi = 1 minuto

    return () => {
      clearInterval(interval); // Pulizia dell'intervallo quando il componente viene smontato
    };
  });

  const variants = {
    enter: (direction) => {
      return {
        transform: direction > 0 ? "translateX(25%)" : "translateX(-25%)",
        opacity: 0,
        position: "absolute",
      };
    },
    center: {
      transform: "translateX(0%)",
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => {
      return {
        transform: direction < 0 ? "translateX(25%)" : "translateX(-25%)",
        opacity: 0,
        position: "absolute",
      };
    },
  };

  const navTo = (i) => {
    if (play) {
      setPlay(!play);
    }
    if (i < video) {
      setVideo([i, -1]);
    } else if (i > video) {
      setVideo([i, 1]);
    } else {
      setVideo([i, 0]);
    }
  };

  // Per qualche motivo devo dichiararlo prima altrimenti genera un errore !?
  const cover_url =
    localhost + videos[video].attributes.cover.data.attributes.url + Webp();

  return (
    <>
      <div className="cinema section">
        <Title play={play} />
        <div className="preview-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="header-preview"
              key={video}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={
                play
                  ? { backgroundColor: "black", height: "auto" }
                  : { height: "60vh" }
              }
              transition={{
                transform: { type: "spring", duration: 1 },
                opacity: { type: "spring", duration: 1 },
              }}
            >
              <div className="preview-card container">
                {play ? (
                  <button className="closeButton" onClick={handlePlay}>
                    <Icon icon="close" />
                  </button>
                ) : null}
                <div
                  style={
                    play
                      ? { backgroundColor: "black" }
                      : {
                          backgroundImage: "url('" + cover_url + "')",
                        }
                  }
                  className={play ? "row" : "row OnloadBackground"}
                  onClick={handlePlay}
                >
                  {!play && (
                    <Preview
                      title={videos[video].attributes.title}
                      description={videos[video].attributes.description}
                      role={videos[video].attributes.role}
                      duration={videos[video].attributes.duration}
                      awards={videos[video].attributes.awards}
                      handlePlay={handlePlay}
                    />
                  )}
                  {play && (
                    <Video
                      url={videos[video].attributes.url}
                      handlePlay={handlePlay}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="video-thumbs container">
          <div className="row">
            {videos.map((videoList, i) => {
              return (
                <ThumbCard
                  videoList={videoList.attributes}
                  video={video}
                  navTo={navTo}
                  key={videoList.id}
                  i={i}
                  play={play}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function Title({ play }) {
  return (
    <>
      <div
        className={play ? "container preview transparent" : "container preview"}
      >
        <div className="row">
          <div className="col-12-xs text-centered">
            <h2>
              Cinema
              <div />
            </h2>
            <p>
              From event coverage to commercials and the <b>big screen</b>,
              <br />I bring my love for <b>filmmaking</b> to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function ThumbCard({ videoList, video, navTo, i, play }) {
  return (
    <>
      <div className="flex-card-container col-6-xs col-6-s col-4-m col-4-l col-3-xl col-3-xxl">
        <div
          className={
            play
              ? "cine-card OnloadBackground transparent"
              : "OnloadBackground cine-card"
          }
          onClick={() => navTo(i)}
          style={{
            backgroundImage:
              "url('" +
              localhost +
              videoList.thumb.data.attributes.url +
              Webp() +
              "')",
          }}
        ></div>

        {i === video ? (
          <motion.div
            className={play ? "card-selected transparent" : "card-selected"}
            layoutId="card-selected"
          />
        ) : null}
      </div>
    </>
  );
}

function Preview({ title, description, role, duration, handlePlay, awards }) {
  return (
    <>
      <div className="info-video">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="role">
          <p>{role}</p>
        </div>
        <div className="duration">
          <p>{duration}</p>
        </div>
        <div className="description">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        {awards && (
          <div className="awards">
            <ReactMarkdown>{awards}</ReactMarkdown>
          </div>
        )}
      </div>
      <button className="playButton" onClick={handlePlay}>
        <Icon icon="play" />
      </button>
    </>
  );
}

function Video({ url }) {
  return (
    <>
      <Youtube url={url} autoplay="true" />
    </>
  );
}
