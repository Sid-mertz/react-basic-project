import React,{ Component } from 'react';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            list:[]
        }
    }
    // addData=(e)=>{
    //     e.preventDefault();
    // }
    todoDate=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addDate=(e)=>{
        e.preventDefault();
        this.setState(state=>({
            list:[...state.list, this.state.data]
        }),()=>{
            return this.setState({date:""})
        })
    }
    render(){
        return(
            <div>
                <h3>To Do List</h3>
                <form onSubmit={this.addDate}> 
                    <input type="text" name="data" value={this.state.data} onChange={this.todoDate}/>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default Todolist;