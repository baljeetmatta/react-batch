import { useEffect, useState } from "react";

const Posts = () => {

    //let products = [];//array of objects, name,id,price
    const [products,setProducts]=useState([]);

    useEffect(() => {
//Async
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setProducts(response);//async
            console.log(response);
        })
        //re-render

    },[])//only once
    //for , forEach, filter, map
    //map->return
    return (
        <>
            Products
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
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>

                            )
                        })

                    }
                </tbody>

            </table>

        </>
    )
}
export default Posts;