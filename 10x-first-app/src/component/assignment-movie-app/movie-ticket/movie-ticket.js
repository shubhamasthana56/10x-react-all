import "./movie-ticket.css";
import { ThemeContext } from "../movie/movie";
import { useContext } from "react";
const MovieTicket = (props)=> {
    const movieCOntext = useContext(ThemeContext);
    console.log(movieCOntext);
    return (
      <>
        <div className="card">
            <div className="container">
                <h4><b>{props.movieData.name}</b></h4> 
                <p>{props.movieData.description}</p> 
            </div>
            <button onClick={()=>{props.buyTicket(props.movieData.name)}}>BuyNow</button>
        </div>
      </>
    )
}
export default MovieTicket;