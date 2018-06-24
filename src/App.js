import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';


class App extends Component {
  constructor(){
    super()
    this.state={totalCounter:0, counter:8}

  }
  totalCount=()=>{
    this.setState({totalCounter:this.state.totalCounter+1})
  }
  render() {
    return (
      <div className="App">
      <h1>Total count:{`${this.state.totalCounter}`}</h1>
      <Test totalCount={this.totalCount} counter={this.state.counter}/>
      <Test totalCount={this.totalCount}/>
      </div>
    );
  }
}

export default App;
