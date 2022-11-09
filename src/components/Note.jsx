import React, {useContext} from 'react';
import {NoteContext} from '../context/NoteContext';

const Note = () => {
  const { currNote, noteList, setNoteList } = useContext(NoteContext);

   const handleDelete = () =>{
    let tempList = noteList;
    let index = tempList.indexOf(currNote);
    tempList.splice(index, 1);
    localStorage.setItem("Notes", JSON.stringify(tempList));
    setNoteList(tempList);
    window.location.reload();
  }

  return (
    <div className='note'>
        <h4 className='note'>My Note</h4>
        {!currNote ? 
            <p className='content'>Select a note in the right side to view its content</p> 
            :
            <div className='content'>
                <h6 className='category'> Category ~ Date</h6>
                <div className='icons'>
                  <i className='far fa-edit mr-3' style={{'color':'#5DC250', 'cursor':'pointer'}}></i>
                  <i onClick={handleDelete} className='far fa-trash-alt ml-3' style={{'color':'#5DC250', 'marginRight':'5px', 'cursor':'pointer'}}></i>
                </div>
              <p>{currNote.Content}</p>
            </div>
        }
    </div>
  )
}

export default Note;