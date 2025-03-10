import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import UpdateItem from "./components/UpdateItem";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    // Fetch the data from the server
    fetch(API_URI)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ItemList items={items} />
      <UpdateItem item={items} />
    </div>
  );
}

export default App;
