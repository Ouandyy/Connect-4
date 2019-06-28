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
      turns: 0,
      rowToggle: [[0, 0]]
    }
    this.turnCounter = this.turnCounter.bind(this);
    this.findLowest = this.findLowest.bind(this);
  }

  turnCounter() {
    this.setState({ turns: this.state.turns + 1 })
  }

  findLowest(arr) {
    let currentState = this.state.rowToggle.slice(0);
    for (let i = 1; i <= 7; i++) {
      let row = i;
      let col = arr[1];
      // [row, col] == arr set up
      for (let j = 0; j < currentState.length; j++) {
        let exsistRow = currentState[j][0];
        let exsistCol = currentState[j][1];

        if (exsistRow === 1 && col === exsistCol) {
          return alert('row is full')
        } else if ((row === exsistRow && col === exsistCol)) {
          this.turnCounter();
          currentState.push([row - 1, col]);
          return this.setState({ rowToggle: currentState });
        } else if (row === 7) {
          currentState.push([row - 1, col]);
          this.turnCounter();
          return this.setState({ rowToggle: currentState });
        }

      }
    }


  }

  render() {
    return (
      <div><Board
        turn={this.state.turns}
        findLowest={this.findLowest}
        exsistPiece={this.state.rowToggle} /></div>
    )
  }
}

export default App;

