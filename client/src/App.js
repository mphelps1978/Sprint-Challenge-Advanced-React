import React from "react";
import "./App.css";
import Axios from "axios";
import PlayerTable from "./components/PlayerTable";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(res => {
        // console.log("Result: ", res.data);
        this.setState({
          players: res.data,
        });
        // console.log("One record: ", this.state.players[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PlayerTable key={this.state.players.id} players={this.state.players} />
      </div>
    );
  }
}

export default App;
