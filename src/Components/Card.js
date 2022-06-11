import React from "react";
import './Card.css';

export const Card = ({playinCards}) => {
    return (
        <div className="card">
            <div className="content">
                <div className="front">
                    {}
                </div>
                <div className="back">
                    Back!
                </div>
            </div>
        </div>
    );
};