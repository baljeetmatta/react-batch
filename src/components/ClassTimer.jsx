import { Component } from "react";

export default class ClassTimer extends Component
{
    constructor(props)
    {
        super(props);
        //setInterval(this.changeHandler,500);

    }
    changeHandler=()=>{
        this.setState({counter:this.state.counter+1});

    }
    componentDidMount()
    {
        setInterval(this.changeHandler,500);

    }
    state={
        counter:1
    }
    render=()=>{

        return (
            <>
            Counter:{this.state.counter}
            <button onClick={this.changeHandler}>Change</button>
            </>
        )
    }

}