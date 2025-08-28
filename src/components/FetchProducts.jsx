import { useEffect, useState } from "react";

const FetchProducts = () => {

    //let products = [];//array of objects, name,id,price
    const [products,setProducts]=useState([]);
    const [isLoading,setLoading]=useState(true);

    useEffect(() => {
//Async
setLoading(true);
        fetch("./products.json")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setProducts(response);//async
            console.log(response);
            setLoading(false);
        })
        //re-render

    },[])//only once
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
            <table>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>

                            )
                        })

                    }
                </tbody>

            </table>

        </>
    )
}
export default FetchProducts;