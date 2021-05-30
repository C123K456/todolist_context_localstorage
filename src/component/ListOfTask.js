import React from "react";

function ListOfTask({ index, Task, onEdit, onDelete }) {

  return (
    <div className="todolist" key={index}>
      <label className="labeltodolist">{Task.Task}</label>
      <div className="controlbtn">
        <button className="editbtn" onClick={() => onEdit(index)}>
          Edit
        </button>
        <button className="deletebtn" onClick={() => onDelete(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListOfTask;
