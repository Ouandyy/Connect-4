import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placement: [this.props.row, this.props.col],
       

    }
    this.clicker = this.clicker.bind(this);
  }

  clicker(e) {
    this.props.turnCounter();
    this.setState({piece: 1});
    this.props.findLowest(this.state.placement);
    // console.log('asd')

    console.log("this is row", this.state.placement)
  }

  

  

  render() {
    return (
      <td onClick = { this.clicker } > {this.state.piece} </td>
    )
  }
}

// const Square = function (props) {
//   return (
//     <td> {props.isNull} </td>
//   )
// }

export default Square;