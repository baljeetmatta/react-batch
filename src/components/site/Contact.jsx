import { useLocation } from "react-router-dom";

const Contact=()=>{
    const location=useLocation();

    return (
        <div>Contact Page {location.state.name} {location.state.age}</div>
    )
}
export default Contact;
