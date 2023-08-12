import { useEffect, useState } from "react";
import { getThingsboard } from "./API";

const DataDisplay = () => {
  const [realtimeData, setRealtimeData] = useState({});

  console.log(realtimeData);
  useEffect(() => {
    const fetchData = () => {
      const response = getThingsboard();
      setRealtimeData(response);
    };

    const interval = setInterval(fetchData, 3000); // Fetch data every 3 seconds
    fetchData(); // Initial fetch

    return () => {
      clearInterval(interval);
    };
    
  }, []);

  return (
    <>
      <h1>HAIII</h1>
    </>
  )
}

export default DataDisplay;