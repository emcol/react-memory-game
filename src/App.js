import React, {useState} from 'react';
import {Game} from './Components/Game';
import { PickYourCards } from './Components/PickYourCards';
import { Header } from './Components/Header';
import './App.scss';

function App() {
  const [gameState, setGameState] = useState(0);
  const [user, setUser] =  useState('');
  const [playingCards, setPlayingCards] = useState([]);

  //imposta il nome del giocatore nello stato dell'app
  const handleUserChange = user => setUser(user);

  //lo stato del gioco passa al livello successivo
  const handleChangeGameState = () => setGameState(prevGameState => prevGameState + 1);
  
  const handleChoosingClick = chosenCard => {
    setPlayingCards(prevPlayingCards => [
      ...prevPlayingCards,
      chosenCard
    ]);
  };

  return (
    <main className='App'>
      <Header
        handleUserChange={handleUserChange}
        onNextSubmit={handleChangeGameState}
        user={user}
        game={gameState} />

      <div className='gameContainer'>
        {gameState === 1 && (<PickYourCards onNextSubmit={handleChangeGameState} onCardClick={handleChoosingClick} playingCards={playingCards}/>)}
        {gameState === 2 && (<Game/>)}
      </div>

    </main>
  );
}

export default App;
