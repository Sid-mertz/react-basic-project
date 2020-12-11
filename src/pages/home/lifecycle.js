import React from 'react';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        console.log("From Constructor");
    }
    componentDidMount(){
        console.log("From Component Did Mount");
    }
    render(){
        console.log("From Render");
        return(
            <div>Hello</div>
        )
    }
    
}
export default Lifecycle;