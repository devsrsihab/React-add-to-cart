import { useState, useEffect } from "react";
import Watches from "./components/Watch/Watches";

function App() {
  // Define a state
  const [watches, setWatches] = useState([]);

  // Define a useEffect
  useEffect(() => {
    const getWatches = async () => {
      try {
        const URL = "/api/WatchApi.json";
        const req = await fetch(URL);
        const data = await req.json();
        setWatches(data);
      } catch (error) {
        console.error("Error fetching watch data:", error);
      }
    };
    getWatches();
  }, []);

  console.log("watches", watches);

  return (
    <div>
      <h2 className="text-3xl text-white my-10">Watch List:{watches.length}</h2>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {watches.map((watch) => (
          <Watches key={watch.id} watch={watch}></Watches>
        ))}
      </div>
    </div>
  );
}

export default App;
