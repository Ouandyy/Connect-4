import React from 'react';
import Square from './Square.jsx';

 class Rows extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
     }
   }


   render() {

    return (
      <tbody>
          <tr>
          <Square row = {this.props.row} 
            col = {1} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
          <Square row = {this.props.row} 
            col = {2} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
          <Square row = {this.props.row} 
            col = {3} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
          <Square row = {this.props.row} 
            col = {4} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
          <Square row = {this.props.row} 
            col = {5} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
          <Square row = {this.props.row} 
            col = {6} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
          <Square row = {this.props.row} 
            col = {7} turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            isNull = {this.props.isNull} 
            columnToggler = {this.props.columnToggler}/>
        </tr>
      </tbody>)
   }
  
}

export default Rows;