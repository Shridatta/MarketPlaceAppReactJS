import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StorePicker from './StorePicker.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import Header from './Header.js';
import sampleFishes from './sample-fishes';
import Fish from './Fish';
import base from './base'

class App extends Component {
  constructor()
  {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples=this.loadSamples.bind(this);
    this.addToOrder=this.addToOrder.bind(this);
    //initial state
    this.state={
      fishes:{},
      order:{}
    };
  }

/*
  componentWillMount()
  {
    this.ref = base.synState(`${this.props.params.storeId}/fishes`
    ,{
      context:this,
      state:'fishes'
    });
  }

  componentWillUnmount()
  {
    base.removeBinding(this.ref);
  }
*/
addFish(fish)
{
  //update state
  const fishes ={...this.state.fishes};
  //add item
  const timestamp = Date.now();
  fishes[`fish-${timestamp}`]=fish;
  //set state
  this.setState({fishes})
}

loadSamples(){
  this.setState({
    fishes:sampleFishes
  });
}

addToOrder(key)
{
  //take copy of our state
  const order = {...this.state.order};
  //update
  order[key]=order[key]+ 1 || 1;
  this.setState({order})
}

  render() {
    return (
        <div className="App">
          <div className="firstPara"> <h1>MARKET PLACE </h1></div>
          <div className="divtop">
          <Header tagline="Fresh Sea Food Market" age="5000" cool={true} />
              <ul className="list-of-fishes">
                {
                  Object
                    .keys(this.state.fishes)
                    .map(key=> <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                }
              </ul>
          </div>
          <Order fishes={this.state.fishes} order={this.state.order}/>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
        { /* <StorePicker/> */}
        </div>

    );
  }
}

export default App;
