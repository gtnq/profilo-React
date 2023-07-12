import "./styles.css";
import Header from "./header";
import Project from "./project";
import Footer from "./footer";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}
