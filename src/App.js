// src/App.js
import React from 'react';
import './App.css';
import PorscheCard from './components/PorscheCard';
import porsche911 from './assets/porsche-911.jpg';
import porsche718 from './assets/porsche-718.jpg';
import porscheTaycan from './assets/porsche-taycan.jpg';

function App() {
  return (
    <div className="app">
      <h1 className="title">Porsche: 3 Modèles Iconiques</h1>
      <div className="cards-container">
        <PorscheCard
          image={porsche911}
          title="Porsche 911"
          description="La Porsche 911 est un modèle iconique qui a redéfini les standards du sport automobile depuis sa création."
        />
        <PorscheCard
          image={porsche718}
          title="Porsche 718"
          description="La Porsche 718 combine une dynamique de conduite exceptionnelle et un design épuré, pour une expérience de conduite sans égale."
        />
        <PorscheCard
          image={porscheTaycan}
          title="Porsche Taycan"
          description="Le Taycan est la première voiture entièrement électrique de Porsche, offrant une performance sportive inégalée et un design futuriste."
        />
      </div>
    </div>
  );
}

export default App;
