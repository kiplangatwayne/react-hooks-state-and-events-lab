import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false); // State variable for Dark Mode

  // Function to handle Dark Mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Conditionally set the className based on the darkMode state
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button> {/* Toggle button */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
