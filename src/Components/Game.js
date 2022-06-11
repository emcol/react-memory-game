import React, {useState} from 'react';
import { heroes } from '../data/heroes';
import { Card } from './Card';
import './Game.css';

export const Game = () => {

    return (
        <div id="game">
            {heroes.map((hero, index) => <div id={'card-' + index} key={'card-' + index}><Card /></div>)}
        </div>
    );
}