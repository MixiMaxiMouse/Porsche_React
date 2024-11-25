// src/App.js
import React from 'react';
import './App.css';
import PorscheCard from './components/PorscheCard';
import porsche911 from './assets/porsche-911.jpg';
import porsche718 from './assets/porsche-718.jpg';
import porscheTaycan from './assets/porsche-taycan.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Porsche />} />
        <Route path="/911" element={<Page911 />} />
        <Route path="/taycan" element={<PageTaycan />} />
        <Route path="/718" element={<Page718 />} />
      </Routes>
    </Router>
  )
}

function Porsche() {
  return (
    <div className="app">
      <h1 className="title">Porsche: 3 Modèles Iconiques</h1>
      <div className="cards-container">
        <Link to="/911">
          <PorscheCard
            image={porsche911}
            title="Porsche 911"
            description="La Porsche 911 est un modèle iconique qui a redéfini les standards du sport automobile depuis sa création."
          />
        </Link>
        <Link to="/718">
          <PorscheCard
            image={porsche718}
            title="Porsche 718"
            description="La Porsche 718 combine une dynamique de conduite exceptionnelle et un design épuré, pour une expérience de conduite sans égale."
          />
        </Link>
        <Link to="/taycan">
          <PorscheCard
            image={porscheTaycan}
            title="Porsche Taycan"
            description="Le Taycan est la première voiture entièrement électrique de Porsche, offrant une performance sportive inégalée et un design futuriste."
          />
        </Link>
      </div>
    </div>
  );
}

function Page911() {
  return (
    <h1>Bonjour React !</h1>
  )
}

function Page718() {
  return (
    <h1>Bonjour React !</h1>
  )
}

function PageTaycan() {
  return (
    <h1>Bonjour React !</h1>
  )
}

export default App;
