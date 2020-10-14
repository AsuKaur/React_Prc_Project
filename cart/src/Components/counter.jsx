import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count:0
     };
     format()
     {
         const {c}=this.state;
         return c===0?<h1>Zero</h1>:c;
     }
    render() { 
        return ( <h1>{this.format}</h1> );
    }
}
 
export default Counter;