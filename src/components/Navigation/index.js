import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {CgMenuRightAlt} from 'react-icons/cg';
const links = [
    {
        name:"Home",
        url:"/"
    },
    {
        name:"About",
        url:"/about"
    },
    {
        name:"Movies",
        url:"/movie"
    },
    {
        name:"Contact",
        url:"/contact"
    }
]
class ReactNavigation extends Component{
    constructor(props){
        super(props);
        this.state={
            isMenuActive:false
        }
    }
    handleMenuBarClick = () =>{
        this.setState(state => ({
            isMenuActive:!state.isMenuActive
        }), ()=>{
            if(this.state.isMenuActive){
                document.body.style.overflow="hidden"
            } else{
                document.body.style.overflow="auto"
            }
        
        });
    }
    render(){
        const {isMenuActive} = this.state;
        return( 
            <div className="c-nav">
                <div className="nav-toggler" onClick={this.handleMenuBarClick}>
                    <CgMenuRightAlt/>
                </div>
                <ul className={`nav-list ${ isMenuActive?'active':''}`}>
                    {links.map((link,i)=>(
                        <li key="i"><NavLink exact to={link.url}>{link.name}</NavLink></li>
                    ))}
                </ul>
                {isMenuActive && <div className="nav-overlay" onClick={this.handleMenuBarClick}></div> }
            </div> 
        )
    }
    
}
export default ReactNavigation;