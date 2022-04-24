import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./components/User";
import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Profil from "./components/Profil";

function App() {
  return (
    <>
      <Inscription />
      <Connexion />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/profil" element={<Profil />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
