import React, { useEffect, useState } from "react";
import axios from "axios";

function Db() {
  const [items, setItems] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/");
        console.log(result.data);
        setItems(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You might want to handle the error more gracefully, e.g., show an error message to the user
      }
    };

    fetchData();
  }, []);

  // Check if items have been fetched or not
  if (items === null) {
    return <p>Loading...</p>; // You can return a loading state while data is being fetched
  }

  return (
    <div>
      {/* Render your component based on the fetched data */}
      {items.map((item) => (
        <div key={item.id}>
          {item.name} - {item.description}
        </div>
      ))}
    </div>
  );
}

export default Db;
