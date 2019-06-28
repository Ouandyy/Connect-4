import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: null

    }
    this.clicker = this.clicker.bind(this);
    this.nullChanger = this.nullChanger.bind(this);
  }

  clicker(e) {
    this.props.turnCounter();
    this.props.columnToggler();
    this.nullChanger();
  }

  nullChanger() {
    if (this.props.isNull !== null) {
      this.setState({piece: this.props.isNull})
    }
  }
  

  

  render() {
    return (
      <td onClick = { this.clicker } > {this.state.piece} </td>
    )
  }
}

export default Square;