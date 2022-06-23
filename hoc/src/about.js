import Header from "./header";
import Sidebar from "./sidebar";
import Impure from "./impure";
import Pure from "./pure";
import { useState } from "react";
const About = ()=> {
    const [testState, setTestState] = useState(0);
    return (
        <>
            <div>
                About Works
            </div>
            <Impure/>
            {/* <Impure/> */}
            <Pure/>
            <button onClick={()=> {setTestState(testState + 1)}}>Update</button>
        </>
        
    )
}
export default About;