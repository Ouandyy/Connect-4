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
     this.click = this.click.bind(this)
   }

   click(e) {
     console.log('click', e.target)
   }
   

   render() {

    return (
      <tbody onClick = {this.click}>
          <tr>
          <Square 
            row = {this.props.row}
            col = {this.state.col1} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
          <Square 
            row = {this.props.row}
            col = {this.state.col2} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
          <Square 
            row = {this.props.row}
            col = {this.state.col3} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
          <Square 
            row = {this.props.row}
            col = {this.state.col4} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
          <Square 
            row = {this.props.row}
            col = {this.state.col5} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
          <Square 
            row = {this.props.row}
            col = {this.state.col6} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
          <Square 
            row = {this.props.row}
            col = {this.state.col7} 
            turn = {this.props.turn} 
            findLowest = {this.props.findLowest}
            exsistPiece = {this.props.exsistPiece} />
        </tr>
      </tbody>)
   }
  
}

export default Rows;


//  this.colToggler = this.colToggler.bind(this)
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