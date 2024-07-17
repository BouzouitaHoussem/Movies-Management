import React,{useState} from "react";
import axios from "axios";

const UpdateMovie=({id})=>{
  const [name,setName]=useState('')
  const [genre,setGenre]=useState('')
  const [image,setImage]=useState('')
  const [description,setDescription]=useState('')
  const [awards,setAwards]=useState(0)
  const [actors,setActors]=useState('')
  const [year,setYear]=useState(0)
  
const Modify=()=>{
    axios.put(`http://localhost:8080/movies/Modify/${id}`,{name:name,genre:genre,image:image,description:description,awards:awards,actors:actors,year:year}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })

}
return(
    <div>
    <div className="card2"> 
    <div className="Modify-Form">
        
    Name:   
    <input onChange={(e)=>setName(e.target.value)}/>
    Genre:   
    <input onChange={(e)=>setGenre(e.target.value)}/>
    image:   
    <input onChange={(e)=>setImage(e.target.value)}/>
    Description:   
    <textarea  onChange={(e)=>setDescription(e.target.value)}/>
    Awards:   
    <input  onChange={(e)=>setAwards(e.target.value)}/>
    Actors:   
    <input  onChange={(e)=>setActors(e.target.value)}/>
    Year:   
    <input  onChange={(e)=>setYear(e.target.value)}/>
    <div><button class="cart-button" id="button_details"  onClick={()=>{
        Modify()
    }}>Modify</button></div>

    </div>
    </div>
    </div>
)

}

export default UpdateMovie