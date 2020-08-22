import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Project from "./views/MainArea/Project";
import Header from "./views/Header/Header";
import Footer from "f:/portfolio/frontent/src/views/footer/footer";

function App() {
  return (
    <main className="site-main ">
      <Header />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
