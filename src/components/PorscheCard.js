// src/components/PorscheCard.js
import React from 'react';
import './PorscheCard.css';

function PorscheCard({ image, title, description }) {
    return (
        <div className="porsche-card">
            <img src={image} alt={title} className="porsche-image" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default PorscheCard;
