import React from 'react';
import {data} from './data';
import Items from './item';


function Card(){
    return (<React.Fragment>
        <div>
            {data.map((pdt)=>{
                return <>
                <div className='card'>
                    <Items key={pdt.id} {...pdt}></Items>
                    </div>
                    </>
            })};
        </div>
        </React.Fragment>);



}


export default Card;