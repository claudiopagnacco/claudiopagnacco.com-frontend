import { Helmet } from "react-helmet-async";
export default function HelmetData({ title, description }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
}
