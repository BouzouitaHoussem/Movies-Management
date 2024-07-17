import React,{useState,useEffect} from "react";
import axios from "axios";
import MoviesList from "./Components/MoviesList.jsx"
import MoviesDetails from "./Components/MoviesDetails.jsx"
import "./App.css";
import CreateMovie from "./Components/CreateMovie.jsx";
import UpdateMovie from "./Components/UpdateMovie.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  const [view,setview]=useState('AllMovies')
  const [data,setData]=useState([])
  const [details,setDetails]=useState(null)




 useEffect(()=>{ 
  axios.get('http://localhost:8080/movies/getall')
  .then((res)=>{
    console.log(res.data);
    setData(res.data.reverse())

  })
  .catch((err)=>{
    console.log(err);
  })
 },[])
  const changeView=(newView,obj)=>{
    setview(newView)
    setDetails(obj)

  }
   const render=()=>{
    if(view=='Alldata'){
      return <MoviesList data={data} changeView={changeView} />
    }
    else if(view==='MoviesDetails'){
      return <MoviesDetails details={details} changeView={changeView} />
    }
    else if(view==='Create'){
      return <CreateMovie />
    }
    else if(view==='Update'){
      return <UpdateMovie />
    }
    else if(view==='Contact'){
      return <Contact />
    }

    
  
   }



  return (
    <div>
      <ul id="ul1">
       <li> 
      <img id="img2" src="https://bestsimilar.com/img/movie/thumb/fa/69923.jpg" /></li>
  <li id="li1"><a class="active" href="#Movies" onClick={()=>{
        changeView('Alldata')
      }}>Movies</a></li>
  <li id="li2"><a href="#Add Movie" onClick={()=>{
        changeView('Create')
      }}>Add Movie</a></li>
  <li id="li3"><a href="#Contact" onClick={()=>{
    changeView('Contact')
  }}>About Us</a></li>
  
</ul>
      
      

      {render()}
    </div>
  )
}

export default App;
