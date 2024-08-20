import "./App.css";
import Hero from "./pages/Hero"; 
import Pages from "./pages/Pages"; 
import './custom.css'
import React, { useState } from "react";

function App() {
  const [showPages, setShowPages] = useState(false);

  const handleButtonClick = () => {
    setShowPages(true);
  }
  return (
    <div>
      {!showPages ? (
        <Hero onButtonClick={handleButtonClick} />
      ) : (
        <Pages />
      )}
    </div>


    // <div>
    //   <Hero />
    //   <Pages />
    // </div>
  );
  // <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
}

export default App;
