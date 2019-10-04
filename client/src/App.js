import React from 'react';
// import axios from 'axios';
import './App.css';
// import { runInThisContext } from 'vm';
import Player from './components/Player'
import { useDarkMode } from './hooks/useDarkMode';

function App() {

  const [darkMode, setDarkMode] = useDarkMode();
    return(
    <div className="App">
      <h1>Player Data</h1>
      <button onClick = {setDarkMode}>Set Pink Mode!</button>
     <Player />
    </div>
    )
  }



export default App;
