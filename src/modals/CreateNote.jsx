import React, {useContext} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { NoteContext } from '../context/NoteContext';


function CreateNote  () {
    const { 
        noteList, setNoteList,
        modal, toggle, 
        subject, setSubject, 
        content, setContent, 
        category, setCategory, 
        saveNote
    } = useContext(NoteContext);



    const handleChange = (e) =>{
        const {name, value} = e.target;

        if(name === 'subject'){
            setSubject(value);
        }else{
            setContent(value);
        }
    }


   
    const handleSave  = (event) =>{
        event.preventDefault();
        var note = {};
        note["Subject"] = subject;
        note["Content"] = content;
        saveNote(note);
    }

  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Note</ModalHeader>
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
          <Button color="primary" onClick={handleSave} >
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  )
}

export default CreateNote