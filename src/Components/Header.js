import React from "react";
import { StartGamePage } from "./StartGamePage";

export const Header = ({onSubmit_user, onSubmit_game, player, gameState}) => {
    if(gameState === 0) {
        return (
            <header>
                <h1>Benvenuto al Gioco del Memory</h1>
                <h2>Con i personaggi del gruppo di disagiati di merda</h2>
                <StartGamePage onSubmit_user={onSubmit_user} onSubmit_game={onSubmit_game} />
            </header>
        );
    } else if(gameState === 1) {
        return (
            <header>
                <h1>Ciao {player}!</h1>
                <p>Prima di giocare, scegli i tuoi personaggi:</p>
            </header>
        );
    } else if(gameState === 2) {
        return (
            <header>
                <h1>Giocatore: {player}</h1>
            </header>
        );
    }
};