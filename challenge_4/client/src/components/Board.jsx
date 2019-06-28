//Make class because reactjs square comp is class
// should have a grid layout

import React from 'react';
import Rows from './Rows.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: 1,
      row2: 2,
      row3: 3,
      row4: 4,
      row5: 5,
      row6: 6

    }
    // this.rowToggler = this.rowToggler.bind(this);
  }



  // rowToggler() {
  //   if (this.state.row6 === false) {
  //       this.setState({ row6: true })
      
  //     ;

  //   } else if (this.state.row5 === false) {
  //       this.setState({ row5: true })
      
  //     ;

  //   } else if (this.state.row4 === false) {
  //       this.setState({ row4: true })
      
  //     ;

  //   } else if (this.state.row3 === false) {
  //       this.setState({ row3: true })
      
  //     ;

  //   } else if (this.state.row2 === false) {
  //       this.setState({ row2: true })
      
  //     ;

  //   } else if (this.state.row1 === false) {
  //       this.setState({ row1: true })
      
  //     ;

  //   } else {
  //     alert('NO MORE FOR COL')
  //   }

  // }


  render() {
    return (
      <table>
        <Rows 
          row={this.state.row1}
          turnCounter={this.props.turnCounter}
          rowToggler = {this.rowToggler}
          findLowest = {this.props.findLowest} />
        <Rows 
          row={this.state.row2}
          turnCounter={this.props.turnCounter} 
          rowToggler = {this.rowToggler}
          findLowest = {this.props.findLowest} />
        <Rows 
          row={this.state.row3}
          turnCounter={this.props.turnCounter} 
          rowToggler = {this.rowToggler}
          findLowest = {this.props.findLowest} />
        <Rows 
          row={this.state.row4}
          turnCounter={this.props.turnCounter} 
          rowToggler = {this.rowToggler}
          findLowest = {this.props.findLowest} />
        <Rows 
          row={this.state.row5}
          turnCounter={this.props.turnCounter} 
          rowToggler = {this.rowToggler}
          findLowest = {this.props.findLowest} />
        <Rows 
          row={this.state.row6}
          turnCounter={this.props.turnCounter} 
          rowToggler = {this.rowToggler}
          findLowest = {this.props.findLowest} />
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