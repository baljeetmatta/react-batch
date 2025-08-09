import { Component } from "react";

// class StateClass extends Component
// {
//     counter=1;

//     clickHandler=()=>{
//         this.counter++;
//         console.log(this.counter);

//     }
//     render=()=>{
//         return(
            
//             <div>Counter : {this.counter}
            
//             <button onClick={this.clickHandler}>Change</button>
//             </div>
//         ) 
//     }
// }
class StateClass extends Component
{
    //props,state=>object,setState
    state={
        counter:1,
        
    }

    clickHandler=()=>{
       // this.state.counter++;
       this.setState({counter:this.state.counter+1})
        console.log(this.state.counter);

    }
    render=()=>{
        return(
            
            <div>Counter : {this.state.counter}
            
            <button onClick={this.clickHandler}>Change</button>
            </div>
        ) 
    }
}

export default StateClass;
