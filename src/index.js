import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StorePicker from './StorePicker.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import Header from './Header.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const Root = () =>
{
  return(
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/StorePicker" component={StorePicker}/>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
