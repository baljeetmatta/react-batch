//1. create a class extends Component(React)
//2. Render

import { Component } from "react";
//this.props
class GreetClass extends Component
{
    
    render(){
        console.log(this.props);

        return (
            <div>Greeting from {this.props.name}</div>       
        )


    }
}
export default GreetClass;
