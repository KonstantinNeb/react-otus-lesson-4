import React, { Component } from "react";
import Field from "../field/field"
import './App.css';

interface AppProps {
  vertCellCount: number;
  horizCellCount: number;
}

interface AppState {
  x?: number;
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      x: undefined
    };
  }

  componentDidMount = () => {
    window.addEventListener("mousemove", this.handlerMouseEvent);
  }

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.handlerMouseEvent);
  }

  handlerMouseEvent = (e: MouseEvent) => {
    const hoveredElement = e.target as HTMLDivElement;
    const x1: number = +hoveredElement.id;
    this.setState({ x: x1 });
  };

  static defaultProps = {
    vertCellCount: 10,
    horizCellCount: 10
  }

  render() {
    const {
      x
    } = this.state;
    const text = (this.state.x === 0) ? "No cell or border" : `Hovered cell: ${x}`;    // {x && `Hovered cell: ${x}`}

    return (
      <div className="App">
        <Field vertCellCount={this.props.vertCellCount} horizCellCount={this.props.horizCellCount} />
        <div>
          {x && text}
        </div>
      </div>
    )
  }
}

export default App;