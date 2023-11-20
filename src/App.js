/*
 * Sass = npm i sass
 * Router = npm i react-router-dom
 * Helmet = npm install --save react-helmet
 * Icons = npm install react-icons --save
 * Motion = npm install framer-motion
 * Markdown = npm install react-markdown
 * HashLink = npm install --save react-router-hash-linknpm
 * npm install react-scroll
 * npm install axios
 * npm install emoji-mart
 * npm install react-scroll-parallax



 * npm install remark-parse remark-rehype rehype-stringify unified unist-util-visit

 *
 * react = Control + C
 * react npm start
 *
 * Strapi npm run develop
 */
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "./Context/ThemeContext.tsx";
import { ParallaxProvider } from "react-scroll-parallax";

import PageLoading from "./components/performance/pageLoading.js";
import Settings from "./hooks/settings.js";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/Home"));
const Design = lazy(() => import("./pages/Design"));
const Project = lazy(() => import("./pages/Project"));
const Cinema = lazy(() => import("./pages/Cinema.js"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Maintenance = lazy(() => import("./pages/Maintenance"));

export default function App() {
  // Stato del tema
  const [stateTheme, setStateTheme] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  // Per il framer-motion
  const location = useLocation();

  // MAINTENANCE
  const isMaintenance = Settings();

  if (isMaintenance) {
    return (
      <>
        <ThemeContext.Provider value={{ stateTheme, setStateTheme }}>
          <Suspense fallback={<PageLoading />}>
            <Maintenance />
          </Suspense>
        </ThemeContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <ThemeContext.Provider value={{ stateTheme, setStateTheme }}>
          <ParallaxProvider>
            <Navbar />
            <Suspense fallback={<PageLoading />}>
              <AnimatePresence mode="wait">
                {/* Solo per il framer-motion*/}
                <Routes key={location.pathname} location={location}>
                  {/* Da key in poi, solo per il framer-motion*/}
                  <Route path="/" element={<Home />} />
                  <Route path="/design" element={<Design />} />
                  <Route path="/project/:slug" element={<Project />} />
                  <Route path="/cinema" element={<Cinema />} />
                  <Route path="*" element={<Notfound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
            <Footer />
          </ParallaxProvider>
        </ThemeContext.Provider>
      </>
    );
  }
}
