import React, {useState} from 'react';
import { heroes } from '../data/heroes';
import { Card } from './Card';
import './Game.css';

export const Game = () => {

    return (
        <div id="game">
            {heroes.map((hero, index) => <div id={'item-' + index} key={'item-' + index}><Card /></div>)}
        </div>
    );
}