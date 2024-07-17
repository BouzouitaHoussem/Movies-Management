import React,{useState} from "react";
import axios from "axios";
import UpdateMovie from "./UpdateMovie.jsx";
const MoviesDetails=(props)=>{
    
    
    const Remove=(id)=>{
        axios.delete(`http://localhost:8080/movies/delete/${id}`).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        }) 
    }

    return(
        <div>
         <div className="card1"> 
         <div class="image_container">
        <img id="img5" src={props.details.image}/></div>
        <div>
          <strong id="description1">Description:{props.details.description}</strong></div>
        <div>
        <strong id="awards1">Awards:{props.details.awards}</strong></div>
        <div>
        <strong id="actors1">Actors:{props.details.actors}</strong></div>
        <div>
        <strong id="year1">Year:{props.details.year}</strong></div>
        <button class="cart-button" id="button_details" onClick={()=>{
            Remove(props.details.idmovies)
        }}>Delete</button>
        <h2 id="h2-modify">You can modify here</h2>
        {<UpdateMovie id={props.details.idmovies}/>}
        </div>
        
        </div>
        
    )
}

export default MoviesDetails