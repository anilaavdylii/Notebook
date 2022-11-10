import {createContext, useState, useEffect} from "react";

const NoteContext = createContext();

function NoteProvider({children, note}){
    const [noteList, setNoteList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const categoryList = [
        {
            name: 'High_Importance'
        },
        {
            name: 'Medium_Importance'
        },
        {
            name: 'Low_Importance'
        }
    ]
    
    const [currNote, setCurrNote] = useState();

    const [editModal, setEditModal] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const editToggle = () => setEditModal(!editModal);
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
                            content, setContent, category, setCategory, modal, setModal, editModal, setEditModal,   editToggle,
                            toggle, saveNote, searchTerm, setSearchTerm, currNote, setCurrNote, categoryList
                    }}>
            {children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProvider };
