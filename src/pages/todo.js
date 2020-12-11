import React, { Component } from 'react';
import './app.css';

import bg from '../assets/images/bg.jpg';


class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            list:[
               
            ]
        }
    }

    todoData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addData=(e)=>{
        e.preventDefault();
        this.setState(state=>({
            list:[...state.list,this.state.data]
        }), ()=>{
            return this.setState({data:""})
        })
        // console.log(list);
    } 

    render(){
        return(
            <div className="toDoList">
                <h3>To Do List</h3>
                <form onSubmit={this.addData}>
                    <input type="text" placeholder="Enter your task list" name="data" value={this.state.data} onChange={this.todoData}/>
                    <button type="submit">Submit</button>
                </form>
                <ul className="todolisting">
                    {
                        this.state.list.map((item,i)=>{
                            return(
                                <li key={i}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <img alt="background" className="bg" src={bg} /> 
            </div>
        )
        
    }
}



export default Todolist;