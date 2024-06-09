import { Component } from "react";

// on cree une interface pour definir le state
interface CounterState {
  // on definit le type de la propriete count
  count: number;
}

// on cree un composant de classe qui etend la classe Component de react
// et qui prend en parametre les props et le state
class Counter extends Component<{}, CounterState> {
  // on definit le state initial
  state: CounterState = {
    count: 0,
  };
  // on cree une methode qui incremente la valeur de count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
// on definit la methode render qui retourne un element react
  render() {
    return (
      <div className="container">
        <p className="count"> Count: {this.state.count}</p>
        <button className="button" onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
