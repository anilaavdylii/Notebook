import React from 'react';
import Search from './Search';
import Notes from './Notes';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Search />
      <Notes />
    </div>
  )
}

export default Sidebar