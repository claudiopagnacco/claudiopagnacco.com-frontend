import { useState, useEffect } from "react";
import { settings_url } from "./config";
import axios from "axios";

export default function Settings() {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [error, setError] = useState();

  const fetchMaintenanceStatus = () => {
    axios
      .get(settings_url)
      .then(({ data }) => {
        setIsMaintenance(data.data.attributes.isMaintenance);
      })
      .catch((error) => {
        setError(error)
        console.error(
          "An error occurred while fetching maintenance status:",
          error
        );
      });
  };

  useEffect(() => {
    fetchMaintenanceStatus();
    const interval = setInterval(fetchMaintenanceStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return isMaintenance;
}
