import { useState } from "react";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  // searchFilter,
  // onSearcheNote,
  
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const [searchTerm,setSearchTerm] = useState("");

 

  return (
    <div className="sidebar">
    <div className="sidebar-search">
       <input  type="search" name="search-form" id="search-form" onChange={(event)=> {setSearchTerm(event.target.value)}}  className="search-input" placeholder="Search for..."/>
       {/* <button className="buttonSearch">Search</button> */}
                    
                       
    </div>
      <div className="sidebar-header">
        <h1> All Notes</h1>
        <button className="buttonSearch" onClick={onAddNote}>Add</button>
      </div>
      <div className="sidebar-notes" >
        {sortedNotes.filter((val)=>{
            if(searchTerm == ""){
                return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }).map(({ id, title, body, lastModified,category }, i) => (
          
          
          
          <div 
            className={`sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              
            
              <strong id="searchTitle" className="titleSidebar">{title}</strong>
              <button className="buttonSearchDelete" onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 30) + "..."}
            
            
            
            </p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
            <p className="category">
            Category{": "}
           {category}
           </p>
          </div>
        ))}
      </div>
    </div>
  );

  //
};

export default Sidebar;
