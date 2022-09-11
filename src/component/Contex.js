


import React, {useContext, useEffect, useState} from "react";

export const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=675ec2d7&`;

const AppContext = React.createContext();

const AppProvider =({children}) =>
{
    const [isLoading, setIsLoading]= useState(true);
    const [movie , setMovie] = useState([]);
    const [isError,setIsError]= useState({show:"false",msg:""});
    const [query ,setQuery] =useState("Titanic")
   const a= "ahsan";
const getMovie = async (url) =>{
  setIsLoading(true);
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        if (data.Response === "True") {
            setIsLoading(false);
            setMovie(data.Search);
            setIsError({ show: "false", msg: "" });
          } else {
            setIsError({ show: "true", msg: data.Error });
          }
        } catch (error) {
          console.log(error);
        }
    
   
   

};
    useEffect(() =>
    {

      let timer = setTimeout(() =>
      {
        getMovie(`${API_URL}&s=${query}`);
      },800);
return () =>clearTimeout(timer);
    },[query]);

return <AppContext.Provider value={{isLoading,isError,movie,a,query ,setQuery} }>{children}</AppContext.Provider>;


};

const useGlobalContext =() =>
{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};