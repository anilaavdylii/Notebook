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


    const deleteNote = (e) => {
        // let tempList = noteList;
        // let index = tempList.indexOf(e.target.value)
        // tempList.splice(index, 1);
        // localStorage.setItem("Notes", JSON.stringify(tempList));
        // setNoteList(tempList);
        // window.location.reload();

        // let tempList = noteList;
        // noteList.map((note, index)=>{
        //     if(note === currNote){
        //         tempList.splice(index, 1);
        //         localStorage.setItem("Notes", JSON.stringify(tempList));
        //         setNoteList(tempList)
        //         window.location.reload();
        //     }
        // })

    }

    return(
        <NoteContext.Provider value={{note, noteList, setNoteList, subject, setSubject,
                            content, setContent, category, setCategory, modal, setModal, 
                            toggle, saveNote, searchTerm, setSearchTerm, currNote, setCurrNote, deleteNote
                    }}>
            {children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProvider };
