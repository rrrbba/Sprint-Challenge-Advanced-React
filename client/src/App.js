import React from 'react';
import axios from 'axios';
import './App.css';
// import { runInThisContext } from 'vm';

class App extends React.Component {

  state = {
    playerlist: [],
    player: {}
  };

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(response.data)
      this.setState({
        playerlist: response.data
      })
    })

  }

  render(){
    return(
    <div className="App">
      <h1>Server data</h1>
      {this.state.playerlist.map(player => (
        <div key = {player.id}>
        <h1>{player.name}</h1>
        <h3>{player.country}</h3>
        <p>{player.searches}</p>
        </div>
      ))}
    </div>
    )
  }

}

export default App;
