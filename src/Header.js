import React from 'react';

class Header extends React.Component
{

  render(){
    return(
       <header className="top">
       <h1 className="catchheader"> Catch of the day</h1>
       <h3 className="tagline">{this.props.tagline}</h3>
       </header>

    )
  }
}

export default Header;
