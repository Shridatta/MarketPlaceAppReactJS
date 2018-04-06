import React from 'react';
import AddFishForm from './AddFishForm'
class Inventory extends React.Component{
  render(){
    return(
      <div className="Inventory">
          <h1 className="Inventoryheader"> Inventory </h1>
          <AddFishForm addFish={this.props.addFish}/>
          <button onClick={this.props.loadSamples}> Load Sample Fishes </button>
      </div>
    )
  }
}


export default Inventory;