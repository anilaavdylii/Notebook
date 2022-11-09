import React, { useEffect, useRef, useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import Button from 'react-bootstrap/Button';

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
        <Button className='btn-search'>Search</Button>
      </div>
    </div>
  );
};

export default Search;