import React from "react";
import './Card.scss';

export const Card = ({playinCards, hero}) => {


    return (
        <div className="Card">
            <div className="content">
                <div className="front">
                    {hero}
                </div>
                <div className="back">
                    Back!
                </div>
            </div>
        </div>
    );
};