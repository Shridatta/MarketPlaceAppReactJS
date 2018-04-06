import React from 'react';

class StorePicker extends React.Component
{
  gotostore(event)
  {
    event.preventDefault();
    console.log('you changed the URL');
    console.log(this);

  }
  render()
  {
    return(
      <form className="StorePickerMain" onSubmit={this.gotostore.bind(this)} >
        <h1>Enter a Store</h1>
        <input type="text" value="Enter a Store Name" />
        <button type="submit">Visit Store-></button>
      </form>
    );
  }
}



export default StorePicker;
