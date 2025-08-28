import { useEffect, useState } from "react";

const Requests = () => {

    //let products = [];//array of objects, name,id,price
    const [products,setProducts]=useState([]);
const [isLoading,setLoading]=useState(true);
//let page=1;
const [page,setPage]=useState(1);

    useEffect(() => {
        setLoading(true);
        //Async
        fetch(`https://reqres.in/api/users?page=${page}`,{
            headers:{
                 'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setProducts(response.data);//async
            console.log(response.data);
            setLoading(false);
        })
        //re-render

    },[page])//only once
    //for , forEach, filter, map
    //map->return
    if(isLoading)
    {
        return(
            <>Loading...</>
        )
    }

    return (
        <>
            Products
            <button onClick={()=>setPage(page+1)}>Next</button>
            <table>
                <thead>
                    <tr><th>ID</th><th>Title</th><th>Body</th></tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                </tr>

                            )
                        })

                    }
                </tbody>

            </table>

        </>
    )
}
export default Requests;