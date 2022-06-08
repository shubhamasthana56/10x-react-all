import { useContext } from "react";
import { DarkThemeContext } from "./Dark-mode-provider";
const App = ()=> {
  const {darkTheme, toggleDarkTheme} = useContext(DarkThemeContext);
  const classDark = {backgroundColor: "black", color: "white"}
  const classLight = {backgroundColor: "white", color: "black"}
  
  return (
    <div>
      <div style={darkTheme ? classDark : classLight}>Context</div>
      <button onClick={toggleDarkTheme}>{darkTheme ? "switch to light": "switch to dark"}</button>
    </div>
  )
}
export default App;