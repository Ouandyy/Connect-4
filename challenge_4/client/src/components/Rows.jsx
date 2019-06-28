import React from 'react';
import Square from './Square.jsx';

 class Rows extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      col1: 1,
      col2: 2,
      col3: 3,
      col4: 4,
      col5: 5,
      col6: 6,
      col7: 7
       
     }
    //  this.colToggler = this.colToggler.bind(this)
   }

  //    colToggler() {
  //   if (this.state.col7 === false) {
  //       this.setState({ col7: '1' }, () => { console.log('toggl', this.state)});
      
  //     ;

  //   } else if (this.state.col6 === false) {
  //       this.setState({ col6: '1' });
  //       console.log('toggle' + this.props.row + 'col6')
      
  //     ;

  //   } else if (this.state.col5 === false) {
  //       this.setState({ col5: '1' });
  //       console.log('toggle', this.props.row, 'col5')
      
  //     ;

  //   } else if (this.state.col4 === false) {
  //       this.setState({ col4: '1' });
  //       console.log('toggle', this.props.row, 'col4')
      
  //     ;

  //   } else if (this.state.col3 === false) {
  //       this.setState({ col3: '1' });
  //       console.log('toggle', this.props.row, 'col3')
      
  //     ;

  //   } else if (this.state.col2 === false) {
  //       this.setState({ col2: '1' });
  //       console.log('toggle', this.props.row, 'col2')
      
  //     ;

  //   }else if (this.state.col1 === false) {
  //       this.setState({ col1: '1' });
  //       console.log('toggle', this.props.row, 'col1')
  //   } else {
  //     alert('NO MORE FOR COL')
  //   }

  // }
   

   render() {

    return (
      <tbody>
          <tr>
          <Square 
            row = {this.props.row}
            col = {this.state.col1} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
          <Square 
            row = {this.props.row}
            col = {this.state.col2} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
          <Square 
            row = {this.props.row}
            col = {this.state.col3} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
          <Square 
            row = {this.props.row}
            col = {this.state.col4} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
          <Square 
            row = {this.props.row}
            col = {this.state.col5} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
          <Square 
            row = {this.props.row}
            col = {this.state.col6} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
          <Square 
            row = {this.props.row}
            col = {this.state.col7} 
            turnCounter = {this.props.turnCounter} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest} />
        </tr>
      </tbody>)
   }
  
}

export default Rows;