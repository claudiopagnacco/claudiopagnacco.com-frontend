import HelmetData from "../components/helmet";
import AnimatedPage from "../components/animations/AnimatedPage";
import PageLoading from "../components/performance/pageLoading.js";
import { lazy, Suspense } from "react";
import "./Cinema.scss";

const CinemaSection = lazy(() => import("../components/Cinema/cinemaSection"));
const InstagramSection = lazy(() =>
  import("../components/Cinema/instagramSection")
);

function Cinema() {
  return (
    <>
      <HelmetData
        title="Cinema"
        description="Explore my art content, watch my videos, and browse the image gallery for a visual journey like no other."
      />
      <AnimatedPage>
        <div className="creativity-page">
          <div className="spacer"></div>
          <div className="spacer"></div>
          <Suspense fallback={<PageLoading />}>
            <CinemaSection />
          </Suspense>
          <div className="spacer"></div>
          <Suspense fallback={<PageLoading />}>
            <InstagramSection />
          </Suspense>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Cinema;
