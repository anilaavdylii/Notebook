import React, { useContext, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { NoteContext } from '../context/NoteContext';


function EditNote() {
    const {
        noteList, setNoteList,
        editModal,  editToggle,
        subject, setSubject,
        content, setContent,
        category, setCategory,
         currNote, categoryList
    } = useContext(NoteContext);


    useEffect(() => {
        if(currNote){
            setSubject(currNote.Subject);
            setContent(currNote.Content);
            setCategory(currNote.Category)
        }
    },[currNote])


    const updateNote = (obj) =>{
        let tempList = noteList;
        let index = tempList.indexOf(currNote);
        tempList[index] = obj;
        localStorage.setItem("Notes", JSON.stringify(tempList));
        setNoteList(noteList);
        window.location.reload();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'subject') {
            setSubject(value);
        }else if(name === 'category'){
            setCategory(value);
        }else {
            setContent(value);
        }
    }



    const handleUpdate = (event) => {
        event.preventDefault();
        
        let showDate = new Date();
        var date = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();

        let note = {};
        note["Subject"] = subject;
        note["Content"] = content;
        note["Category"]= category;
        note["Date"] = date
        updateNote(note);
    }

    return (
        <Modal isOpen={editModal} toggle={editToggle} >
            <ModalHeader toggle={editToggle}>Edit Note</ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter subject"
                            value={subject}
                            onChange={handleChange}
                            name='subject'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select  value={category.name} onChange={handleChange} name='category'>
                        {categoryList.map((category, index) => {
                            return (
                                <option key={index} value={category.name} name="category" >{category.name}</option>
                            );
                        })}
                    </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter Content"
                            value={content}
                            onChange={handleChange}
                            name='content'
                        />
                    </Form.Group>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate} >
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={editToggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditNote