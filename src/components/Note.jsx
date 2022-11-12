import React, {useContext, useState} from 'react';
import {NoteContext} from '../context/NoteContext';
import EditNote from '../modals/EditNote'
import { Collapse, Button } from 'reactstrap';

const Note = () => {
  const { currNote, noteList, setNoteList, setEditModal } = useContext(NoteContext);

  const [delNote, setDeleteNote] = useState(false);

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
                  <i onClick={()=> {setDeleteNote(!delNote)}} className='far fa-trash-alt ml-3' style={{'color':'#5DC250', 'marginRight':'5px', 'cursor':'pointer'}}></i>
                </div>
                <Collapse isOpen={delNote}>
                    <p>Are you sure you want to delete "{currNote.Subject}"?</p>
                      <Button color="primary" onClick={handleDelete}>Yes</Button>{' '}
                      <Button color="secondary" onClick={()=>{setDeleteNote(!delNote)}}>No</Button>{' '}
                </Collapse>
                <br/>
                <h6 className='category'> Category  ~ <b>{currNote.Category}</b></h6>
                <h6 className='category'> Date ~ <b>{currNote.Date}</b></h6>
                <p>Content ~ {currNote.Content}</p>
            </div>
        }
        <EditNote/>
    </div>
  )
}

export default Note;