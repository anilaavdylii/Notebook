import {createContext, useState} from "react";

const NoteContext = createContext();

function NoteProvider({children, note}){
    const [noteId, setNoteId] = useState(0);
    const [noteList, setNoteList] = useState([]);

    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const saveNote = (note) =>{
        const tempList = noteList
        tempList.push(note);
        // localStorage.setItem("Note List", JSON.stringify(tempList))
        setNoteList(tempList);
        setModal(false);
    }


    return(
        <NoteContext.Provider value={{note, noteList, setNoteList, subject, setSubject,
                            content, setContent, category, setCategory, modal, setModal, 
                            toggle, saveNote, noteId, setNoteId
                    }}>
            {children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProvider };
