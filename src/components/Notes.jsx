import React, { useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { BsPlus } from "react-icons/bs";
import { NoteContext } from '../context/NoteContext';
import CreateNote from '../modals/CreateNote';

const Notes = () => { 
  const {
    currNote, setCurrNote, searchTerm, noteList, setModal
  } = useContext(NoteContext);

  

  const handleChange = event =>{
    noteList.forEach((note)=>{
    const currSubject = event.target.value;  
      if(note.Subject === `${currSubject}`){
        setCurrNote(note);       
      }
      
    })
  }

  const handleClick = () => {
    setModal(true);
    console.log(noteList);
    
        console.log({currNote});
  }

 const j = Object.values(noteList);

  return (
     <div>
        <h4 className='all-notes'>
            All Notes
            <Button className='btn-create' onClick={handleClick}><BsPlus/></Button>
        </h4>
        <CreateNote />
        <nav className="main-nav">
          <ul className="main-nav-ul">
              {j.filter((val) => {
                  if(searchTerm === ''){
                    return val;
                  }else if(val.Subject.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val;
                    
                  }
              }).map((note, index) => {
                 return (
                  <li key={index}>
                    <input className="radio" type="radio" value={note.Subject} name="currName" onChange= {handleChange}/>{note.Subject}
                  </li>
                  );
               })}
          </ul>
          <ul />
        </nav>
      </div>
  )
}

export default Notes