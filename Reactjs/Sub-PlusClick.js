class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0 }
    this.subClick = this.subClick.bind(this);
    this.plusClick = this.plusClick.bind(this);
  }
  subClick() {
    this.setState(prevState => ({
      currentValue: this.state.currentValue--
    }));
    console.log(this.state.currentValue);
  }
  plusClick() {
    this.setState(prevState => ({
      currentValue: this.state.currentValue++
    }));
    console.log(this.state.currentValue);
  }
  render() {
    let numberPreview = this.state.currentValue;
    return (
      <div className="App">
        <h2>Step number</h2>
        <button onClick={this.subClick}>-</button>
        <span>{numberPreview}</span>
        <button onClick={this.plusClick}>+</button>
      </div>
    )
  }
}
