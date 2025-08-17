import { useParams } from "react-router-dom";

const Details=()=>{
   const params= useParams();//object for all the parameters- key

    return (
            <div>Details Page {params.city} {params.state}</div>
    )
}
export default Details;