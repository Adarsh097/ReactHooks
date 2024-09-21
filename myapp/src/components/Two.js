//! USE EFFECT HOOK
import React, {useState,useEffect} from "react";

export default function Two(){
    const [count,setCount] = useState(0);
    const [text,setText] = useState(false);
    const [productList, setProductList] = useState([]);


async function fetchAll(){
    try{
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();

        if(result && result.products) setProductList(result.products);

    }catch(err){
        console.log(err);
    }
}

    useEffect(()=>{

        fetchAll();
        return ()=>{
            //? clean up
        }
    },[])//* with empty dependency-> only once when the page loads

    useEffect(()=>{
        console.log("Hello World");
    })// no dependency -> run every time when the component rerenders itself

    // I will make the text to appear when the count value is even
    useEffect(()=>{
        if((count&1 )===0) setText(true);
    },[count])


    useEffect(()=>{
        if((count&1) === 1)setText(false);
    },[count]);
    return(
        <div style={{textAlign : 'center'}}>
            <h3>Count value is: {count}</h3>
            {(text)?<h4>Load when the count value is even.</h4>: null}
            <button onClick={()=>setCount(count+1)} style={{padding : '5px', marginTop:"5px", backgroundColor:"yellow", fontSize:"18px", borderRadius : "3px", margin:"20px"}}>Increase Count</button>

            <h3>
               { (productList && productList.length > 0 && ((count&1)===1)) ?
                productList.map((item) => <li>{item.title} : {item.price}</li>) : null}
            </h3>
        
        </div>
    );
}



/* 
        Your usage of useEffect is correct and demonstrates two common scenarios for the useEffect hook in React:

Run once when the component mounts (on initial load):

The empty dependency array ([]) ensures the effect runs only once when the component is first rendered (mounted). It's useful for initializing values or making API calls when the component is first loaded.
Example:

js
Copy code
useEffect(() => {
    console.log("Run only once when the page loads.");
}, []);  // Runs only once when the component mounts
Run on every re-render:

With no dependency array provided, the effect will run every time the component re-renders, which can happen whenever state or props change.
Example:

js
Copy code
useEffect(() => {
    console.log("Hello World"); // This will run every time the component re-renders
});
 */