import React from "react";

const MoviesList=(props)=>{
   return(
   <div>
   {props.data.map((e)=>{
   return (
   <div>
    
   
   
   
   <div class="card">
  <div class="image_container">
    <img  id="img5" src={e.image}/>
  </div>
  <div class="name">
    <strong id="name1">Name:{e.name} </strong>
  </div>
  <div class="genre">
    <strong id="genre1" >Genre:{e.genre}</strong>
    
  </div>
  <div class="action">
    
    <button class="cart-button" id="button_details" onClick={()=>props.changeView('MoviesDetails',e)}>
     
      <span>More Details</span>
    </button>
  </div>
</div>

   
   </div>
   )

   })}



   </div>



   ) 
 

}

export default MoviesList