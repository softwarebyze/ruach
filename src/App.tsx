import { Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}
