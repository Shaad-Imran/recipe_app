import React from "react";
import Header from "./components/Header";
import RecipeLists from "./components/RecipeLists";
import Tabs from "./components/Tabs";
import "./App.scss";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists />
    </div>
  );
};

export default App;
