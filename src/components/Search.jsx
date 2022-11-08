import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';

const Search = () => {

  const searchRef = useRef(null);

  useEffect(()=>{
    searchRef.current.focus();
  },[])
  
  return (
    <div className="search">
      <div className="searchForm">
        <input ref={searchRef}
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