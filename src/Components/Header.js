import React from "react";
import { Form } from "./Form";
import './Header.scss';

export const Header = ({handleUserChange, onNextSubmit, user, game}) => {

    const handleGameSubmit = () => {
        onNextSubmit();
    };

    if(game === 0) {
        return (
            <header className="Header">
                <h2>Benvenuto al Gioco del Memory</h2>
                <p>Con i personaggi del gruppo di disagiati di merda</p>
                <Form onUserChange={handleUserChange} onSubmit_game={handleGameSubmit} />
            </header>
        );
    } else if(game === 1) {
        return (
            <header className="Header">
                <h1>Ciao {user}!</h1>
                <p>Prima di giocare, scegli i tuoi eroi:</p>
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