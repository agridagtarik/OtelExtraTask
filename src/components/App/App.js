import "./App.css";
import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Heading from "../Heading/Heading.js";
import FilterArea from "../FilterArea/FilterArea.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <div className="content">
        <div>
          <FilterArea />
        </div>
      </div>
    </div>
  );
}

export default App;
