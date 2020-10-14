import React, { Component } from 'react';
import data from './data';
import Items from './item';



class Card extends Component {
   constructor(){
       super();
       this.state={
           pdt:data,
       };
   }
   
   removeCard(removeid) {
       const datas=this.state.pdt.filter(pdt=>pdt.id!==removeid);
        this.setState({
            pdt:datas
        });
       
   } 
        
     
    
    render() { 
        return (
        <div>
            {this.state.pdt.map((pdt)=>
                <div className='card' key={pdt.id}>
                    <Items key={pdt.id} {...pdt} onDelete={()=>this.removeCard(pdt.id)}></Items>
                    {console.log(pdt.id)}
                </div>
                
            )}
        </div>  );
    }
}
 
export default Card;
 