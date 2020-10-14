import React, { Component } from 'react';

class Items extends Component {
  constructor(props)
    {
        super(props);
        this.state={
            id:this.props.id,
            img:this.props.img,
            name:this.props.name,
            rate:this.props.rate,
            amt:this.props.amt,
            
        };

    }
    increase=()=>{
        this.setState({amt:this.state.amt+1});
        this.setState({rate:this.props.rate*(this.state.amt+1)});
    }
    
    decrease=()=>{
        
        this.setState({amt:this.state.amt-1});        
        this.setState({rate:this.props.rate*(this.state.amt-1)});
        if(this.state.amt<=0){
            this.setState({amt:0});             
            this.setState({rate:0}); 
        }
       
    }

     render() { 
        return ( <React.Fragment>
        <div className='item'>
            <div className='itemimage'>
                <img src={this.state.img} alt='Img' className='itemimg'>
                </img>
            </div>
            <div className='inner'>
                <div>
                <h1 className='text'>{this.state.name}</h1>
                <button type='button' onClick={this.increase} className='btn'>+</button>
                {this.state.amt}            
                <button type='button' onClick={this.decrease} className='btn'>-</button>
                </div>
                <div>   
                    <h1 className='text'>{'Rs'}{this.state.rate}</h1>
                    <button type='button' className='del' onClick={this.props.onDelete}>Delete</button>
                </div>
            </div>
        </div>
        </React.Fragment> );
    }
}
export default Items;