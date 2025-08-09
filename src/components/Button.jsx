

const Button=(props)=>{


    const clickHandler=(e)=>{
        alert(e.target.innerText);

    }
    return (
        <div>
            <div>{props.title}</div>
        <button onClick={props.click}>{props.value}</button>
        </div>
    )

}
export default Button;