import {createContext, useState, useEffect} from "react";

const NoteContext = createContext();

function NoteProvider({children, note}){
    const [noteList, setNoteList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    
    const [currNote, setCurrNote] = useState();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    useEffect(()=>{
        let arr = localStorage.getItem("Notes");
        if(arr){
            let obj = JSON.parse(arr);
            setNoteList(obj);
        }
    },[])

    const saveNote = (note) =>{
        const tempList = noteList
        tempList.push(note);
        localStorage.setItem("Notes", JSON.stringify(tempList));
        setModal(false);
        setNoteList(tempList);
    }


   
    return(
        <NoteContext.Provider value={{note, noteList, setNoteList, subject, setSubject,
                            content, setContent, category, setCategory, modal, setModal, 
                            toggle, saveNote, searchTerm, setSearchTerm, currNote, setCurrNote
                    }}>
            {children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProvider };
