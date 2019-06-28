import React from 'react';
import Board from './Board.jsx';
//make this a class so it is smart and can rerender everytime there is a change in app
//this is going App where everything comes together and goes to index
//parent component where everything is pass to it, or down from this.


//Think about what state should be doing so it can cause a rerender.
// should my state contain the pieces? and position


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turns: 0
    }
    this.turnCounter = this.turnCounter.bind(this);
  }

  turnCounter() {
    this.setState({turns : this.state.turns + 1})
    console.log(this.state.turns)
  }

  render() {
    return (
      <div><Board turnCounter = {this.turnCounter} turn = {this.state.turns}/></div>
    )
  }
}

export default App;

