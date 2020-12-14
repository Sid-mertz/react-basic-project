import React,{Component} from 'react';
import homeBackground from '../../assets/images/p1.jpg';
import './home.css';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            number:3, //key and : value
            fullname:"",
            email:"",
            errors:{}
        } 
    }
    incrementNumber=()=> {
        // let num = this.state.number;
        this.setState(state=>({
            number:++state.number
          }));
    }
    decrementNumber=()=>{
        this.setState((state)=>({
            number:--state.number
        }));
    }
    handleInputChange=(e)=>{
        this.setState({
            number: e.target.value
        });
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleFormValidation = () =>{
        let formError = {}; //formerror object
        // const emailRegex = /^[A-Za-z0-9\.\-\_]+[\@]{1}[A-Za-z]+[\.]{1}[a-z]{2,}$/;
        if(!this.state.fullname) formError.fullname="Enter Fullname";
        if(!this.state.email) formError.email="Enter Email";
    //    if(!emailRegex.text(this.state.email))formError.email="Invalid Email Address";
        return formError;
    } 

    handleSubmit = (e) =>{
        e.preventDefault();
        const errors = this.handleFormValidation();
        console.log(errors);
        this.setState({
            errors
        })
        if(Object.keys(errors).length){
            // alert("There is an error")
        }else{
            alert("Your are good to go")
        }
        // alert("submitted");
    }
    
    render(){
        // const {errors} = this.state;
        // this.state.errors
        return (
            <div> 
               {/* <h2>Increment Button here</h2>
                <div>
                    <button onClick={this.decrementNumber}>-</button>
                    <input type="text" value={this.state.number} onChange={this.handleInputChange}/>
                    <button onClick={this.incrementNumber}>+</button>
                </div><br/>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="fullname" onChange={this.handleInputChange}/><br/>
                        {errors?.fullname && <span>{errors.fullname}</span>}
                    </div>
                    
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" name="email" onChange={this.handleInputChange}/><br/>
                        <span>Error</span>
                    </div>
                    <button type="submit">Submit</button>
                </form> */}
                <div className="container">
                    <img alt="Homepage" src={homeBackground}/>
                <p>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>
                </div>
            </div>
        ); 
    }
}
export default HomePage; 