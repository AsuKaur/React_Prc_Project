import React, { Component } from 'react';



const Items=(props)=>{
    const {img,name,rate,amt}=props;
    return (<React.Fragment>
        <div className='item'>
        <div><img src={img} alt='Img'></img>
        </div>
        <div>
            <h1 className='text'>{name}</h1>
            <button type='button' onClick={()=>amt=amt+1}>+</button>
            {amt}            
            <button type='button' onClick={()=>amt=amt-1}>-</button>
        </div>
        <div>{rate}</div>
        </div>
        </React.Fragment>);



}

export default Items;