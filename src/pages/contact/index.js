// import { render } from '@testing-library/react';
import React,{Component} from 'react';

class Address extends Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        const{id, name} = this.props.match.params;
        return(
            <div>
                
                Contact Us Page
                    <p>ID: {id} </p>
                    <p>Name: {name} </p>
                    {/* <p>Name: {name}</p> */}
            </div>
        ) 
    }
}

export default Address;