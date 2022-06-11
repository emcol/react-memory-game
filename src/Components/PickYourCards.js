import React from "react";
import {heroes} from "../data/heroes";
import { DisplayCards } from "./DisplayCards";

export const PickYourCards = ({playingCards, handleChoosingClick, onNextSubmit}) => {

    const handleCardClick = ({target}) => {
        handleChoosingClick(target.key);
    };

    const startGame = () => {
        onNextSubmit();
    }

    const submit = <button onClick={startGame}>Inizia</button>;
    return (
        <>
            <ul>
                {heroes.map(hero => <li onClick={handleCardClick} key={hero.name}>({hero.name})</li>)}
            </ul>
            {playingCards.length === 4 && submit}
            <DisplayCards playingCards={playingCards}/>
        </>
    );
}