import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Note from "./inputNote/inputNote";
import Sidebar from "./sidebar/sidebar";


function App() {
  
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note", 
      category:"",
      body: "",
      lastModified: Date.now(),
     
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };



//   const searchFilter =(searchNote) =>{

//     const updatedNotesBySearch = notes.map((note) => {
//  console.log("test123")
//     var input, filter, table, tr, td, i, txtValue;
//         input = document.getElementById("search-form");
//         filter = input.value.toUpperCase();
//         table = document.getElementById("myTable");
//         tr = table.getElementsByTagName("strong");
//         for (i = 0; i < tr.length; i++) {
//          console.log(tr)
//           if (tr) {
//             console.log("tr-ja ", tr);
//             txtValue = input.value;
//             console.log("TXT VALUE -  :" + txtValue);
//             if ( txtValue.toUpperCase().indexOf(filter) > -1) {
              
//               // txtValue.toUpperCase().indexOf(filter) > -1
//               // $(this).find(‘.screen_name’).text().toLowerCase().indexOf(value) > -1
//               console.log("mrena kushtit");
//               // var v = document.getElementById("myTable");
//               // v.className += " test";
//               // var r = document.getElementById("myTable");
//               // r.className +=  " testRemove";
             
             
              
              
//             } else {
//               // tr[i].style.display = "none";
//               var v = document.getElementById("myTable");
//               v.className += " test1";
//               // var r = document.getElementById("myTable");
//               // r.className +=  " testRemove2";
//             }
//             // console.log("ALL NOTE" , note);
//             return note;
            
//           }       
//   } 

//     });setNotes(updatedNotesBySearch);
   

//     // notes.filter(note =>{
//     //   return note.title.includes(searchNote);
//     // });
//   }
 

  const onUpdateNote = (updatedNote) => {

    const updatedNotesArr = notes.map((note) => {
      

      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        // searchFilter={searchFilter}
      
        

      />
      <Note activeNote={getActiveNote()} onUpdateNote={onUpdateNote}  />
      
    </div>
  );
}

export default App;
