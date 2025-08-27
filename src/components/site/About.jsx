import { useLoaderData } from "react-router-dom";

const About=()=>{
   const data= useLoaderData();
    return (

        <>
        <ul>
        {
            data.map((item)=>{
                    return <li>{item.name}</li>
            })
        }
        </ul>
        </> 
           )
}
export default About;
