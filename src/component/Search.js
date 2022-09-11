import React from 'react';
import { useGlobalContext } from './Contex';


const Search = () => {
  const {query ,setQuery ,isError} = useGlobalContext();
  
  return (

    <>
        <section className='search-section'>
    <h2>Search your favourite movie</h2>
    <form action='#' onSubmit={(e) => e.preventDefault()}>
<div>
  <input type="text" placeholder='search Here' value={query} onChange={(e) =>setQuery(e.target.value)} />
</div>
    </form>
    <div>
      <p>
   {isError.show && isError.msg}
      </p>
    </div>
  </section>
    </>
  );
};

export default Search;