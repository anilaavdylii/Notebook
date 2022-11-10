import React, {useContext} from 'react';
import {NoteContext} from '../context/NoteContext';
import EditNote from '../modals/EditNote'


const Note = () => {
  const { currNote, noteList, setNoteList, setEditModal } = useContext(NoteContext);

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
            <p className='content'>Select a note to view its content</p> 
            :
            <div className='content'>
              <div className='icons mb-4'>
                  <i onClick={()=> setEditModal(true)} className='far fa-edit me-3' style={{'color':'#5DC250', 'cursor':'pointer'}}></i>
                  <i onClick={handleDelete} className='far fa-trash-alt ml-3' style={{'color':'#5DC250', 'marginRight':'5px', 'cursor':'pointer'}}></i>
                </div>
                <h6 className='category'> Category  ~ <b>{currNote.Category}</b></h6>
                <h6 className='category'> Date ~ <b>{currNote.Date}</b></h6>
              <p>Content ~ <b>{currNote.Content}</b></p>
            </div>
        }
        <EditNote/>
    </div>
  )
}

export default Note;