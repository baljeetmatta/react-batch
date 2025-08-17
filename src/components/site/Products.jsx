import { useParams } from "react-router-dom"

const Products=()=>{
    const params=useParams();

    return (
        <div>Category: {params.category}</div>
    )
}
export default Products;