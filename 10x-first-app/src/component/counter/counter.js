import { useState } from "react";
const Counter = ()=> {
    ///function useState(initialValue | callback) { return {value, function to update the value}}
    const[counter,setCounter] = useState(0);
    const handleIncrement = ()=> {
        //udateValue(callback) {calbback(prev)}

        //state updates asynchronously
        
       setCounter((prevCounter)=>{
        return prevCounter + 1;
    });
    setCounter((prevCounter)=>{
        return prevCounter + 1;
    });
    }
    const handleDecrement = ()=> {
        if(counter > 0) {
            setCounter(counter-1);
            setCounter(counter-1);
        }
        
        //counter = counter-1
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <div>{counter}</div>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
export default Counter;