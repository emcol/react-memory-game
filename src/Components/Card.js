import React from "react";
import './Card.css';

export const Card = () => {
    return (
        <div className="card">
            <div className="content">
                <div className="front">
                    Front
                </div>
                <div className="back">
                    Back!
                </div>
            </div>
        </div>
    );
};