
function DisplayMessage(props) {
  // const isEnabled = this.state.showMessage;
  if (!props.show) {
    return null;
  } 
  return (
    <div>You are amazing :v</div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMessage: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.state.showMessage)
    this.setState({ showMessage: !this.state.showMessage });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me</button>
        <DisplayMessage show={this.state.showMessage} />
      </div>
    )
  }
}
