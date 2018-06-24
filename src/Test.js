import React, { Component } from 'react';



class Test extends Component {
constructor(){
  super( )
  this.state={counter:0, open:true, name:'Nisha'}
}
  runFunc=()=>{
    this.setState({counter:this.state.counter +1, open:!this.state.open})
    this.props.totalCount()
  }
  changeName=()=>{
    this.setState({name: this.state.name === 'Nisha'?'Sneha':'Nisha'})
  }
  render() {
    return (
      <React.Fragment>
      <div>
<h1>Hello {`${this.state.counter}`}</h1>
      </div>
      <h2>hi {`${this.state.open}`}</h2>
      <button onClick={this.runFunc} >Yo!!</button>
      <input type="checkbox"/>
      <button onClick={this.changeName}>{`${this.state.name}`}</button>
      </React.Fragment>
    );
  }
}

export default Test;
