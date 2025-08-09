//1. Functional - plain javascript function return JSX
//2. Class
//props->object
// export default function Greet(props){
//     console.log(props);

//     return (
//         <div>Greeing Component</div>
//     )
// }

// export function GreetTest()
// {
//     return <div>Test Greeting</div>
// }
const  Greet = (props) => {

    let i = 1;

    return (
        <>
            <div>
                Welcome to {props.name} {props.wish}
                <button>{props.value}</button>
            </div> </>
    )
}
export default Greet;
