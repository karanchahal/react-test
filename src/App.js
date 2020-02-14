import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { valueToNode } from '@babel/types';


// class Component {

// }

//  <App props={key : valueToNode, key2: value2} />

class App extends Component {

  constructor(props) {
    super(props)
    // console.log(props)

    this.state = {
      number : 1
    }
    console.log(this.state)

    this.changeSomething = this.changeSomething.bind(this)
  }

  changeSomething() {
    // this.state.number += 1
    this.setState({
      number : this.state.number + 1
    })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

            <p>
              {this.state.number}
              </p>
              <p>
              <button onClick={this.changeSomething}>CLICK ME</button>
            </p>


            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
          
              {/* Learn React Quickly ! */}
              {/* <button onClick={onButtonClick()}></button> */}
            </a>
          </header>
        </div>
    );
  }
}

export default App;
