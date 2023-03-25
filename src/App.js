import "./App.css";
import React from "react";
import Category from "./Components/Category/Category";
import News from "./Components/News/News";
import NavBar from "./Components/NavBar/NavBar";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Category />
      <News />
    </div>
  );
}

export default App;
