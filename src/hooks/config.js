import { useState, useEffect } from "react";

export const localhost = process.env.REACT_APP_API_URL;

// Projects url API
export const api_project = "/api/projects?";
export const sort_order = "sort[0]=order%3Adesc&";
export const projects_url = localhost + api_project + sort_order + "populate=*";
// Project url API
export function get_project_urls(slug) {
  if (slug) {
    const filter = "filters[slug][$eq]=" + slug + "&";
    const project_url =
      localhost + api_project + sort_order + filter + "populate=*";
    const ping_sections_url =
      localhost +
      api_project +
      sort_order +
      filter +
      "populate[0]=section&populate[1]=section.pingpongSection&populate[2]=section.pingpongSection.img";
    const sub_sections_url =
      localhost +
      api_project +
      sort_order +
      filter +
      "populate[0]=section&populate[1]=section.subsection&populate[2]=section.subsection.img";
    const project_urls = {
      project: project_url,
      ping_sections: ping_sections_url,
      sub_sections: sub_sections_url,
    };
    return project_urls;
  }
}

// HomeText url API
export const api_homeText = "/api/home-texts?";
export const home_sort_order = "sort[0]=order%3Aasc&";
export const home_deep = "populate[0]=images&populate[1]=HomeSection"
export const homeTexts_url = localhost + api_homeText + home_sort_order + home_deep;

// Cinema url API
export const videos = "/api/videos?";
export const video_sort_order = "sort[0]=order%3Aasc&";
export const videos_url = localhost + videos + video_sort_order + "populate=*";

// Setting url API
export const settings_url = localhost + "/api/setting?";


// Srapi img WEBP
//?format=webp&resize=200x200&embed
export function Webp(w, h) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calcola la larghezza dell'immagine in base alla larghezza dello schermo
  const imageWidth = Math.max(screenWidth*2, screenHeight*2);


  const quality = "&lossless=true"; //lossless
  const stuff = "?format=webp"
  if (w && h) return stuff + "&resize=" + imageWidth + "x" + h + quality;
  else if (w && !h) return stuff + "&width=" + imageWidth + quality;
  else if (!w && !h) return stuff + quality;
}
