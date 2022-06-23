import { memo } from "react";
const Pure = ()=> {
    console.log("Pure")
    return (
        <>Pure</>
    )
}
export default memo(Pure);