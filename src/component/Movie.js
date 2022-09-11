import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Contex";




const Movie = () => {
const {movie,isLoading} = useGlobalContext();

if(isLoading)
{
  return(
      <div className='loading'> Loading....</div>
  
  );
}

  return (
   <>
<section className="movie-page">
                  <div className="container grid grid-4-col">
 
          {movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);
               
                return (
                  <>
                 <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className="card">
                    <div className="card-info">
                      <h2>{movieName}</h2>
                      <img src={Poster} alt={imdbID} />

                    </div>
                  </div>

                 </NavLink>
                  </>
                );
              })
            };
          </div>
                  </section>
   </>
  );
};

export default Movie;