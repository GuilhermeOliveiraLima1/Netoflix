import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/details/MovieDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
