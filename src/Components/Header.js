import React from "react";
import { StartGamePage } from "./StartGamePage";
import './Header.scss';

export const Header = ({handleUserChange, onNextSubmit, user, game}) => {

    const handleGameSubmit = () => {
        onNextSubmit();
    };

    if(game === 0) {
        return (
            <header className="Header">
                <h1>Benvenuto al Gioco del Memory</h1>
                <h2>Con i personaggi del gruppo di disagiati di merda</h2>
                <StartGamePage onUserChange={handleUserChange} onSubmit_game={handleGameSubmit} />
            </header>
        );
    } else if(game === 1) {
        return (
            <header className="Header">
                <h1>Ciao {user}!</h1>
                <p>Prima di giocare, scegli i tuoi personaggi:</p>
            </header>
        );
    } else if(game === 2) {
        return (
            <header className="Header">
                <h1>Giocatore: {user}</h1>
            </header>
        );
    }
};