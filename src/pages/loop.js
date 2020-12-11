import React from 'react';
import './app.css';

import bg from '../assets/images/bg.jpg';

class ReactLoop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            start:0,
            end:4,
            email:"", 
            name:"",
            lists:[
                {
                    id:"",
                    name:""
                }
            ],
            hobbies:["Football", "Basketball", "Cycling", "Dancing"],
            users:[
                {
                    id:1,
                    name:"Sagun",
                    email:"sagun@catchsquare.com"
                },
                {
                    id:2,
                    name:"Ashok",
                    email:"ashok@catchsquare.com"
                },
                {
                    id:3,
                    name:"Ved Prakash",
                    email:"ved.prakash@catchsquare.com"
                },
                {
                    id:4,
                    name:"Siddhartha",
                    email:"siddhartha.mertz@catchsquare.com"
                },
                {
                    id:5,
                    name:"Ashok",
                    email:"ashok@catchsquare.com"
                },
                {
                    id:6,
                    name:"Ved Prakash",
                    email:"ved.prakash@catchsquare.com"
                },
                {
                    id:7,
                    name:"Siddhartha",
                    email:"siddhartha.mertz@catchsquare.com"
                }
                ,
                {
                    id:8,
                    name:"Gopal Krishna",
                    email:"siddhartha.mertz@catchsquare.com"
                }

            ]
        }
    }
    handleInput=(e)=>{ 
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    listInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addTask=(e)=>{
        e.preventDefault();
        
        this.setState(state=>({
            lists:[...state.lists,{name:this.state.name}],

        }))
        console.log(lists);

    }
    addUser=(e)=>{
        e.preventDefault();
        // const oldUsers = this.state.users;
        // const newUsers = [{
        //     name:this.state.name, 
        //     email:this.state.email
        // }]
        // const joinUsers = oldUsers.concat(newUsers)
        // // console.log(joinUsers);
        // this.setState({
        //     users:joinUsers
        // }) 
        const usersLength = this.state.users.length;
        this.setState(state=>({
           users:[...state.users,{id:usersLength+1,name:this.state.name,email:this.state.email}]
        }))
    }
    render(){
        const {hobbies, users, list}= this.state;
        // this.state.hobbies
        // for(var i=0 ; i<hobbies.length; i++){}

        return(
            <div>
                <form onSubmit={this.addUser}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Add User</button>
                    </div>
                </form>
                <h1>List: Hobbies</h1>
                {
                    hobbies.map((hobby,i)=>{
                        return hobby;
                        // return hobby+ " " + i 
                    })
                } 
                <h2>List Users</h2>
                <ul> 
                {
                    users.map((user,index)=>{
                        return(
                        <li key={index}>{user.name} {user.email}</li>
                        )
                    })
                }
                </ul>
                <form onSubmit={this.addTask}>
                    <div className="toDoList">
                        <h3>Mertz To Do List</h3>
                        <input type="text" name="name" onChange={this.listInput}/> 
                        <button type="submit">Add</button>
                    </div>
                </form>

                {/* <ul>
                   {
                       list.map((list,index)=>{
                           return(
                               <li key={index}>{list.name}</li>
                           )
                       })
                   }
                </ul> */}
                <h2>List: Users</h2> 
                <table width="400" border="1"> 
                    <tbody>
                        {
                            users.map((user,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <img src={bg}/> 
            </div>
        )
    }
}
export default ReactLoop;