import { render } from '@testing-library/react';
import React,{Component} from 'react';

class Address extends Component{
   
    render(){
        const {address, email, phone} = this.props;
        return(
            <div>
                Adress: {address} , Email: {email}, Phone: {phone}
            </div>
        )
    }
}

export default Address;