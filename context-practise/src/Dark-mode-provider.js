import { useState, createContext } from "react";
const DarkThemeContext = createContext();
const DarkModeProvider =(props)=> {
    
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleDarkTheme = ()=> {
        setDarkTheme(!darkTheme);
    }
    return (
        <DarkThemeContext.Provider value={{darkTheme, toggleDarkTheme}}>{props.children}</DarkThemeContext.Provider>
    )
}
export {DarkModeProvider, DarkThemeContext};