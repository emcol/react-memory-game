import React from "react";
import {heroes} from "../data/heroes";
import { DisplayCards } from "./DisplayCards";
import './CardPicker.scss';

export const CardPicker = ({playingCards, onCardClick, onNextSubmit}) => {

    const handleCardClick = ({target}) => {
        onCardClick(target.getAttribute('data-hero'));
    };

    const startGame = () => {
        onNextSubmit();
    }

    const submit = <button onClick={startGame}>Inizia</button>;

    return (
        <>
            <ul>
                {heroes.map(hero => <li
                    onClick={handleCardClick}
                    key={hero.name}
                    data-hero={hero.name}
                    className="card-item">{hero.name}</li>)}
            </ul>
            <DisplayCards playingCards={playingCards}/>
            {playingCards.length === 5 && submit}
        </>
    );
}