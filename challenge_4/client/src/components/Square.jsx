import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placement: [this.props.row, this.props.col],
      piece: null
       

    }
    this.clicker = this.clicker.bind(this);
  }

  clicker(e) {
    this.props.findLowest(this.state.placement);
    console.log(this.props.turn)
  }

  
  
  

  render() {
    let exsistPiece = this.props.exsistPiece
    // console.log(this.props.exsistPiece)
    if(this.state.piece === null) {
      for (let i = 0; i < exsistPiece.length; i++) {
        let row = exsistPiece[i][0]
        let col = exsistPiece[i][1]
          if ((row === this.state.placement[0] && col === this.state.placement[1]) && (this.props.turn % 2 === 0) ) {
            this.setState({piece: <img id="resize" src="data:image/png;base64,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"></img>})
          } else if ((row === this.state.placement[0] && col === this.state.placement[1]) && (this.props.turn % 2 !== 0)) {
            this.setState({piece: <img id="resize" src= "data:image/png;base64,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"></img>})
          }
      }
    }

    return (
      <td onClick = { this.clicker } > {this.state.piece}  </td>
    )
  }
}


export default Square;