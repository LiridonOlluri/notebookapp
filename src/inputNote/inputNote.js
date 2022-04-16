const inputNote = ({ activeNote, onUpdateNote }) => {

  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="main">
     

      <div className="main-note-edit">
        <input className="titleNotes"
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
       
       <input type="text"
          className="categoryStyle"
            id="category"
            placeholder="Category"
            value={activeNote.category}
            onChange={(e) => onEditField("category", e.target.value)}
            autoFocus>
      
       </input>
          <small className="note-meta">
              Date Now{" "}
              {new Date().toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
      
         
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
       
      </div>
    
    </div>
  );
};

export default inputNote;
