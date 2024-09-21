//! USE STATE HOOK
import React, {useState} from "react";
const initialState = false;

const initialData = {
    name : '',
    city : '',
}
export default function One(){
    const [value,setValue] = useState(initialState);
    const [formData,setForm] = useState(initialData);

    const handleNameChange = (event)=>{
        setForm({
            ...formData,
            name : event.target.value
        })
    }

    // function handleCityChange(event){
    //     setForm({
    //         ...formData,
    //         city : event.target.value
    //     })
    // }
    return(

        <div style={{textAlign : "center", margin : "10px", padding:"10px"}}>
            <h1>useState Hook</h1>
          {(value)? <h1>Hello Adarsh Gupta!</h1>:<h1>I am millionare.</h1>}
           
            <button onClick={()=>setValue(!value)} style={{padding : '5px', marginTop:"5px", backgroundColor:"yellow", fontSize:"18px", borderRadius : "3px", margin:"20px"}}>Toggle text</button>

            <hr/>
        <input type="text" name="name" placeholder="Enter Name" onChange={handleNameChange}/>
        <select name="city" onChange={(event)=>{
        setForm({
            ...formData,
           [event.target.name] : event.target.value
        })
    }}>
            <option value={""} id="">Select city</option>
            <option value={"Bengaluru"} id="bengaluru">Bengaluru</option>
            <option value={"Noida"} id="noida">Noida</option>
            <option value={"Singapore"} id="singapore">Singapore</option>
        </select>
        <h3>Name is: {formData.name}</h3>
        <h3>City is: {formData.city}</h3>
        </div>
    );
}