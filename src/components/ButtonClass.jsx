import { Component } from "react";

class ButtonClass extends Component {

    clickHandler = () => {
        alert("called");
        this.props.name = "Test";
        console.log(this.props.name);



    }
    render = () => {
        return (
            <><button onClick={this.clickHandler} >{this.props.value}</button></>
        )
    }
}
export default ButtonClass;
//Regular ,                 Arrow Functions
//this->current object      no this is defined, this->parent