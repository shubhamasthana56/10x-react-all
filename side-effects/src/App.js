import { useState } from "react";
import { getUserData } from "./side-effect";
import { useDebouncedEffect } from "./useDebouncedEffect";
const App = ()=> {
  const [counter, setCounter] = useState(0);
  const [userState, setUserState] = useState("");

  ///wrapper function
  //Hooks cant wrapped
  //Hooks needs to be on top of your component

  ///customs hooks
  useDebouncedEffect(()=>{
    getUserData(userState).then((data)=>{
            console.log(data);
          }).catch((err)=> {
            console.log(err);
          }).finally(()=> {
            console.log("Finally")
          });
  }, [userState], 2000)
  
  // useEffect(setTimeout(()=>{
  //     getUserData(userState).then((data)=>{
  //       console.log(data);
  //     }).catch((err)=> {
  //       console.log(err);
  //     }).finally(()=> {
  //       console.log("Finally")
  //     });
    
  // }, 200), [userState]);
  
  return (
    <div>
      <button onClick={()=> {setCounter(counter + 1)}}>Increment</button>
      <span>{counter}</span>
      <button onClick={()=> {setCounter(counter - 1)}}>Decrement</button>
      <label>Enter User</label>
      <input value={userState} onChange={(e)=>{setUserState(e.target.value)}}/>
    </div>
  )
}
export default App;
