import React, { useContext, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { NoteContext } from '../context/NoteContext';


function EditNote() {
    const {
        noteList, setNoteList,
        editModal, setEditModal,  editToggle,
        subject, setSubject,
        content, setContent,
        category, setCategory,
        saveNote, currNote
    } = useContext(NoteContext);


    useEffect(() => {
        if(currNote){
            setSubject(currNote.Subject);
            setContent(currNote.Content);
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
        } else {
            setContent(value);
        }
    }



    const handleUpdate = (event) => {
        event.preventDefault();
        let note = {};
        note["Subject"] = subject;
        note["Content"] = content;
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
                        <Form.Select defaultValue="Choose..." >
                            <option>Choose Category</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
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