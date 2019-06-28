//Make class because reactjs square comp is class
// should have a grid layout

import React from 'react';
import Rows from './Rows.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column1: null,
      column2: null,
      column3: null,
      column4: null,
      column5: null,
      column6: null,

    }
    this.columnToggler = this.columnToggler.bind(this);
    this.clicker = this.clicker.bind(this)
  }

  clicker(e) {
    this.props.turnCounter();
    this.props.columnToggler();
    this.nullChanger();
  }

  columnToggler () {
    if (this.state.column6 === null) {
      if (this.props.turn % 2 === 0) {
        this.setState({column6: '*'})
      }else {
        this.setState({column6: 'x'})
      };

    }else if (this.state.column5 === null) {
      if (this.props.turn % 2 === 0) {
        this.setState({column5: '*'})
      }else {
        this.setState({column5: 'x'})
      };
      
    }else if (this.state.column4 === null) {
      if (this.props.turn % 2 === 0) {
        this.setState({column4: '*'})
      }else {
        this.setState({column4: 'x'})
      };
      
   }else if (this.state.column3 === null) {
    if (this.props.turn % 2 === 0) {
      this.setState({column3: '*'})
    }else {
      this.setState({column3: 'x'})
    };
      
   }else if (this.state.column2 === null) {
    if (this.props.turn % 2 === 0) {
      this.setState({column2: '*'})
    }else {
      this.setState({column2: 'x'})
    };
      
   }else if (this.state.column1 === null) {
    if (this.props.turn % 2 === 0) {
      this.setState({column1: '*'})
    }else {
      this.setState({column1: 'x'})
    };
      
   }else {
     alert('NO MORE FOR ROW')
   }


  }

  render () {
    return (
    <table>
        <Rows row = {1} turnCounter = {this.props.turnCounter} 
              isNull = {this.state.column1} 
              columnToggler = {this.columnToggler}
              onClick = {this.clicker}/>
        <Rows row = {2} turnCounter = {this.props.turnCounter} 
              isNull = {this.state.column2} 
              columnToggler = {this.columnToggler}
              onClick = {this.clicker}/>
        <Rows row = {3} turnCounter = {this.props.turnCounter} 
              isNull = {this.state.column3} 
              columnToggler = {this.columnToggler}
              onClick = {this.clicker}/>
        <Rows row = {4} turnCounter = {this.props.turnCounter} 
              isNull = {this.state.column4} 
              columnToggler = {this.columnToggler}
              onClick = {this.clicker}/>
        <Rows row = {5} turnCounter = {this.props.turnCounter} 
              isNull = {this.state.column5} 
              columnToggler = {this.columnToggler}
              onClick = {this.clicker}/>
        <Rows row = {6} turnCounter = {this.props.turnCounter} 
              isNull = {this.state.column6} 
              columnToggler = {this.columnToggler}
              onClick = {this.clicker}/>
      </table>
      
  )
  }
  
}



  
//   render () {
//     return (
//       <table>
//         <Rows row = {1}/>
//         <Rows row = {2}/>
//         <Rows row = {3}/>
//         <Rows row = {4}/>
//         <Rows row = {5}/>
//         <Rows row = {6}/>
//       </table>
//     )
//   }
// }

export default Board;


  // return (
    // <Square x={0} y={0}/>
    // <Square x={1} y={0}/>
    // <Square x={2} y={0}/>
  //   )