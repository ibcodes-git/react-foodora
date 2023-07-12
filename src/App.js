import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Cards from "./Components/Cards";
import Food from "./Components/Food";
import Category from "./Components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Cards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
