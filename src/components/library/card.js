import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { localhost } from "../../hooks/config";
import { Webp } from "../../hooks/config";
const LazyBackground = lazy(() => import("../performance/LazyBackground"));

export default function Card({ project }) {
  return (
    <>
      <div className="Card">
        <div className="row">
          <div className="col-12-xs col-9-s col-5-l head">
            <Link to={"/project/" + project.attributes.slug}>
              <Suspense>
                <LazyBackground
                  className="image"
                  src={
                    localhost +
                    project.attributes.smallCover.data.attributes.url +
                    Webp()
                  }
                  placeholder={
                    localhost +
                    project.attributes.smallCover.data.attributes.formats
                      .thumbnail.url +
                    Webp()
                  }
                  color={project.attributes.darkAccent}
                />
              </Suspense>
            </Link>
          </div>
          <div className="col-12-xs col-3-s col-3-l body">
            <div className="details">
              <p className="duration">{project.attributes.duration}</p>
              <h3>{project.attributes.title}</h3>
              <p className="description">{project.attributes.description}</p>
              <p className="role"><strong>Role: </strong>{project.attributes.role}</p>
              <p className="tools"><strong>Tools: </strong>{project.attributes.tools}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
