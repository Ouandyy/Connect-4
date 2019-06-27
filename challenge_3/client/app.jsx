
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      creditCard: '',
      expDate: '',
      cvv: '',
      billingZip: ''
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.clickHandler2 = this.clickHandler2.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }



  clickHandler(e) {
    e.preventDefault();
    if (this.state.page < 4) {
      this.setState({ page: this.state.page + 1 });
    } else {
      this.setState({
        page: 0
      });
    }

    e.target.reset()
  }

  changeHandler(e) {
    let id = e.target.id
    this.setState({ [id]: e.target.value })
  }

  clickHandler2() {

    if (this.state.page === 0) {
      this.setState({ page: this.state.page + 1 });
    } else {

      axios
        .post('/', {
          name: this.state.name
        })
        .then(console.log('hello from axios'))
        .catch('Oh no axios failed')

      this.setState({
        page: 0,
        name: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        creditCard: '',
        expDate: '',
        cvv: '',
        billingZip: ''
      });
    }
  }






  render() {
    if (this.state.page === 0) {
      return (
        <div>
          <div>

          </div>

          <button onClick={this.clickHandler2}>Checkout</button>
        </div>
      )
    } else if (this.state.page === 1) {
      return (
        <div>
          <div>
            <form onChange={this.changeHandler} onSubmit={this.clickHandler}>
              Full name:<br></br>
              <input type="text" id="name" ></input> <br></br>
              Email: <br></br>
              <input type="text" id="email" ></input> <br></br>
              Password: <br></br>
              <input type="text" id="password" ></input> <br></br>

              <button>Next</button>
            </form>
          </div>
        </div>
      )

    } else if (this.state.page === 2) {
      return (
        <div>
          <div>
            <div>
              <form onChange={this.changeHandler} onSubmit={this.clickHandler}>
                Address line 1 <br></br>
                <input type="text" id="address1" ></input><br></br>
                Address line 2 <br></br>
                <input type="text" id="address2" ></input><br></br>
                City <br></br>
                <input type="text" id="city" ></input><br></br>
                State <br></br>
                <input type="text" id="state" ></input><br></br>
                Zip Code <br></br>
                <input type="text" id="zipCode" ></input><br></br>
                <button>Next</button>
              </form>
            </div>
          </div>
        </div>
      )
    } else if (this.state.page === 3) {
      return (
        <div>
          <div>
            <div>
              <form onChange={this.changeHandler} onSubmit={this.clickHandler}>
                CreditCard # <br></br>
                <input type="text" id="creditCard" ></input><br></br>
                Exp Date <br></br>
                <input type="text" id="expDate" ></input><br></br>
                CVV <br></br>
                <input type="text" id="cvv" ></input><br></br>
                Billing Zip <br></br>
                <input type="text" id="billingZip" ></input><br></br>
                <button>Thank you!</button>
              </form>
            </div>
          </div>
        </div>
      )
    } else if (this.state.page === 4) {
      return (
        <div>
          <div> {}</div>
          <button onClick={this.clickHandler2}>Purchase!</button>
        </div>
      )
    }
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
