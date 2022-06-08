import React, { useState } from "react";
import MovieTicket from "../movie-ticket/movie-ticket";
const ThemeContext = React.createContext();
const MovieApp = ()=> {
    const movieData = [
        {
            name: "movie1",
            id:"movie-1",
            description: "Best Horror Movie"
        },
        {
            name: "movie2",
            id:"movie-2",
            description: "Best Comedy Movie"
        },
        {
            name: "movie3",
            id:"movie-3",
            description: "Best Action Movie"
        }
]
const [themeState, setThemeState] = useState(false);
const toggleTheme = ()=> {
    setThemeState(!themeState)
}
const buyTicket = (movieName)=>{
    console.log(movieName + "booked")
}
    return (
        <>
        <div>Movie App</div>
        <button onClick={toggleTheme}>Change Theme</button>
         {movieData.map((movie,i)=> {

             return (
                 <ThemeContext.Provider value={{themeState,toggleTheme}}>
                      <MovieTicket key={i} movieData={movie} buyTicket={buyTicket}/>
                 </ThemeContext.Provider>
            
             )
         })}
         {movieData.map((movie,i)=> {
             return <MovieTicket key={i} movieData={movie} buyTicket={buyTicket}/>
         })}
        
        </>
    )
}
export {MovieApp, ThemeContext};