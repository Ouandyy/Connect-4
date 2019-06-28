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
      rowToggle: [1]
    }
    this.turnCounter = this.turnCounter.bind(this);
    this.findLowest = this.findLowest.bind(this);
  }

  turnCounter() {
    this.setState({turns : this.state.turns + 1})
  }

  findLowest(arr) {
    let pieceToggled = this.state.rowToggle;
    if (pieceToggled.indexOf(arr) === -1) {
      console.log('missing')
      var lastPlaceHold = arr
      for (let i = arr[0]; i < 8; i++) {
        if (i === 7) {
          // this.setState({rowToggle: this.state.rowToggle.push([6,arr[1]])})
        }else {}
      }
    }
  }

  render() {
    return (
      <div><Board turnCounter = {this.turnCounter} turn = {this.state.turns} findLowest = {this.findLowest}/></div>
    )
  }
}

export default App;

