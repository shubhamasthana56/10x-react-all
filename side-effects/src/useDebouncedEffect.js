import { cleanup } from "@testing-library/react";
import { useEffect } from "react"

export const useDebouncedEffect = (effect, depe, delay)=> {
    useEffect(()=> {
        const handlerId = setTimeout(()=> {
            effect();
        },delay);
        return ()=>clearTimeout(handlerId);
    },[...depe || [], delay ])
}
