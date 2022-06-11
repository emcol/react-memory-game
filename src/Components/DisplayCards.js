import React from "react";
import { Card } from "./Card";

export const DisplayCards = ({playingCards}) => {
    
    return (
        <div>
            {playingCards.map(hero => <Card hero={playingCards} />)};
        </div>
    );
}