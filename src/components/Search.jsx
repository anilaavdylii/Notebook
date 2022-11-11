import React, { useEffect, useRef, useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const Search = () => {
  const { 
        setSearchTerm
    } = useContext(NoteContext);

  const searchRef = useRef(null);

  useEffect(()=>{
    searchRef.current.focus();
  },[])

  
  return (
    <div className="search">
      <div className="searchForm">
        <input ref={searchRef}
          onChange={event=> {setSearchTerm(event.target.value)}}
          className='btn-input'
          type="text"
          placeholder="Find a note"       
        />
        
      </div>
    </div>
  );
};

export default Search;