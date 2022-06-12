import React from "react";
import { Card } from "./Card";
import './DisplayCards.scss';

export const DisplayCards = ({playingCards}) => {
    
    return (
        <div className="DisplayCards">
            {playingCards.map((hero, index) => <Card hero={hero} key={index} />)}
        </div>
    );
}