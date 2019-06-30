import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

// import counterAReducer, { increment as incrementA, addFive } from "./reducers/counterA";
// import counterBReducer, { increment as incrementB, addTwo } from "./reducers/counterB";

class App extends Component {
  state = {
  }

  render() {
    console.log(this.props)
    console.log(this.props.todos)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          { this.props &&

          <div>
            <h2>Counter Values</h2>
            <ul>
              <li>
                <b>Counter A</b>: {this.props.counterA}
              </li>
              <li>
                <b>Counter B</b>: {this.props.counterB}
              </li>
            </ul>

            <div>
              <button onClick={() => this.props.incrementA()}>Increment A</button>
              <button onClick={() => this.props.incrementB()}>Increment B</button>
              <button onClick={() => this.props.addTwo()}>Add Two to Both</button>
              <button onClick={() => this.props.addFive()}>Add Five to Both</button>
              <button onClick={() => this.props.fetchTodos()}>fetch Todos</button>
            </div>
          </div>

          }

        </header>
      </div>
    );
  }
}

export default App;
