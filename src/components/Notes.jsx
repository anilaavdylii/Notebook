import React, { useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { BsPlus } from "react-icons/bs";
import { NoteContext } from '../context/NoteContext';
import CreateNote from '../modals/CreateNote';

const Notes = () => { 

  const {
      searchTerm,
      subject,
      noteList, setNoteList,
      content, setContent,
      category, setCategory,
      modal, setModal,
      toggle
  } = useContext(NoteContext);

  const handleClick = () => {
    setModal(true);
    console.log(noteList);
  }



  return (
     <div>
        <h4 className='all-notes'>
            All Notes
            <Button className='btn-create' onClick={handleClick}><BsPlus/></Button>
        </h4>
        <CreateNote />
        <nav className="main-nav">
          <ul className="main-nav-ul">
              {noteList.filter((val)=>{
                  if(searchTerm === ''){
                    return val;
                  }else if(val.Subject.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val;
                    
                  }
              }).map((note, index) => {
                 return (
                  <li key={index}>
                    <a href="#">{note.Subject}</a>
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