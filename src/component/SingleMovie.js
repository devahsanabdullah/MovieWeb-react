import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './Contex';
import { NavLink } from "react-router-dom";


const SingleMovie = () => {
    const { id } = useParams();
const api_url =`http://www.omdbapi.com/?apikey=675ec2d7&`
console.log(id);

    const [isLoading, setIsLoading]= useState(true);
    const [movie , setMovie] = useState("");
    const idmi = movie.imdbID;
    console.log( idmi);

    
const getMovie = async (url) =>{
  setIsLoading(true);
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        if (data.Response === "True") {
            setIsLoading(false);
            setMovie(data);
            
          }
        } catch (error) {
          console.log(error);
        }
    
   
   

};
    useEffect(() =>
    {

      let timer = setTimeout(() =>
      {
        getMovie(`${api_url}&i=${id}`);
      },800);
return () =>clearTimeout(timer);
    },[id]);
if(isLoading)
{
  return(
    <div className='movie-section'>
      <div className='loading'> Loading....</div>
    </div>
  );
}
console.log(movie);

  return (
 
    <section className="movie-section">
      
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title">{movie.Title}</p>
        <p className=""></p>
        <p className="card-text">{movie.Released}</p>
        <p className="card-text">{movie.Genre}</p>
        <p className="card-text">{movie.imdbRating} / 10</p>
        <p className="card-text">{movie.Country}</p>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  </section>
  );
};

export default SingleMovie;