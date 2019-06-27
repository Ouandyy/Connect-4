import React from 'react';
import Table from './Table.jsx';
//make this a class so it is smart and can rerender everytime there is a change in app
//this is going App where everything comes together and goes to index
//parent component where everything is pass to it, or down from this.


//Think about what state should be doing so it can cause a rerender.
// should my state contain the pieces? and position


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div><Table/></div>
    )
  }
}

export default App;

