import { Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
import { FavoriteCitiesProvider } from "./contexts/FavoriteCitiesContext";

export default function App() {
  return (
    <Router basename="zack-ebenfeld-12-11-2023/">
      <Nav />
      <FavoriteCitiesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoriteCitiesProvider>
    </Router>
  );
}
