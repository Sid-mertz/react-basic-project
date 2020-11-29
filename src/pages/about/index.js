import React,{Component} from 'react';
import Address from '../contact';
import GreetPage from '../greet';

class AboutPage extends Component{
    render(){
        return (
            <div align="center"> 
                <h1 align="center">Hello world</h1> 
                <p>test</p> 
                <GreetPage fname="Siddhartha" lname="Maharjan"/>
                <GreetPage fname="Sujan" lname="Shrestha"/>
                <GreetPage fname="Sanjay" lname="shrestha"/>
                <h5> Here is Address Component</h5>
                <Address address="Bangemudha" email="mertz@gmail.com" phone="9841054107"/>
                <Address address="Ratopol" email="gausala@gmail.com" phone="9841054789"/>
            </div>
        );
    }
}
export default AboutPage; 