import { useState } from "react"
const Forms=()=>{

    const [form,setForm]=useState({
        name:"",
        city:"",
        email:"",
        age:""
    })
    //changeHandler(key)
const changeHandler=(key,value)=>{
   //Duplicate - Deep Copy
    const obj={...form} //spread opeator->Object->key extract->{} Deep copy
    //const obj1=form;//Shallow Copy of an object
    obj[key]=value;
    setForm(obj);



}
    return (
        <div>
            <div>Name:<input value={form.name} type="text" onChange={(e)=>{
                changeHandler("name",e.target.value);

            }}/>
            </div>
             <div>City:<input value={form.city} type="text" onChange={(e)=>{
                changeHandler("city",e.target.value);

            }}/></div>
              <div>Email:<input value={form.email} type="text" onChange={(e)=>{
                changeHandler("email",e.target.value);

            }}/></div>
            <div>Age:<input value={form.age} type="text" onChange={(e)=>{
                changeHandler("age",e.target.value);

            }}/></div>
            <div>Name:{form.name}</div>
             <div>City:{form.city}</div>
              <div>Email:{form.email}</div>
               <div>Age:{form.age}</div>

        </div>
    )
}
export default Forms;
