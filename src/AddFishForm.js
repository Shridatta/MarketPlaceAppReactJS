import React from 'react';

class AddFishForm extends React.Component
{
  createfish(event)
  {
    event.preventDefault();
    console.log("gonna make some fish");
    const fish= {
      name:this.name.value,
      price:this.price.value,
      status:this.status.value,
      desc:this.desc.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }
  render()
  {
    return(
      <form ref={(input)=> this.fishForm=input} className="fish-edit" onSubmit={this.createfish.bind(this)}>
       <input ref={(input)=> this.name = input} type="text" placeholder="Fish Name"/>
       <input  ref={(input)=> this.price = input} type="text" placeholder="Fish Price"/>
       <select  ref={(input)=> this.status = input}>
       <option value="available">Fresh</option>
       <option value="unavailable">Sold out</option>
       </select>
       <textarea  ref={(input)=> this.desc = input} placeholder="Fish Desc"></textarea>
       <button type="submit">+ Add Item </button>
      </form>
    )
  }
}


export default AddFishForm;
