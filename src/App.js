import React, {useState} from 'react';
import {Game} from './Components/Game';
import { PickYourCards } from './Components/PickYourCards';
import { Header } from './Components/Header';

function App() {
  const [appState, setAppState] = useState({
    gameState: 0,
    cards: [],
    player: null
  });

  //imposta il nome del giocatore nello stato dell'app
  const setUser = player => setAppState(prevAppState => {
    const newAppState = {...prevAppState};
    newAppState.player = player;
    return newAppState;
  });
  //lo stato del gioco passa al livello successivo
  const changeGameState = () => setAppState(prevAppState => {
    const newAppState = {...prevAppState};
    newAppState.gameState++;
    return newAppState;
  });
  
  return (
    <main>
      <Header
        onSubmit_user={setUser}
        onSubmit_game={changeGameState}
        player={appState.player} 
        gameState={appState.gameState} />

        {appState.gameState === 2 && (<PickYourCards/>)}
        {appState.gameState === 1 && (<Game/>)}

    </main>
  );
}

export default App;
