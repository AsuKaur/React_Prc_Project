import React, { Component } from 'react';
import './style.css';
import Nav from './Components/nav';
import Card from './Components/card';


class Final extends Component {
  state = {  }
  render() { 
    return (  <div className="main">
      <Nav/>
      <Card/>
    </div> );
  }
}
 
export default Final;
