import { useState } from "react"

export default function Counter(){
    const [count,setCount]= useState(0);
    const [customeValue, setCustomValue]=useState(1)

    function handleIncrement(){
        
        setCount(count+parseInt(customeValue))
    }
    function handleDecrement(){
        setCount(count-parseInt(customeValue))
    }
    function reset(){
        setCount(0)
    }

    function handleCustomChange(e){
        setCustomValue(e.target.value)
    }

    return <>
            <h1>My count id {count}</h1>
            <input type="number" value={customeValue} onChange={(e)=>{handleCustomChange(e)}} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button type="reset" onClick={reset}>Reset</button>
    </>
}