import React from "react";
import { UserStoreContext } from "../context/UserContext";
import "./Home.css";
import EditPage from "./EditPage";

const Home = () => {
  const userStore = React.useContext(UserStoreContext);

  const [Task, setTask] = React.useState(null);

  const [ListTask, setListTask] = React.useState([]);

  const [EditIndex, setEditIndex] = React.useState(0);

  React.useEffect(() => {
    const locallist = JSON.parse(localStorage.getItem("Task"));

    setListTask(locallist);

    userStore.updateTask(locallist);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    
    const locallist = JSON.parse(localStorage.getItem("Task"));

    setListTask(locallist);

  }, [userStore.Update]);

  const getTask = (event) => {
    setTask(event);
  };

  const setContext = () => {
    if (ListTask !== null) {
      const newTodoList = [...ListTask, { Task }];

      setListTask(newTodoList);

      localStorage.setItem("Task", JSON.stringify(newTodoList));

      userStore.updateTask(newTodoList)

    } else {
      const newTodoList = [{ Task }];

      setListTask(newTodoList);

      localStorage.setItem("Task", JSON.stringify(newTodoList));

      userStore.updateTask(newTodoList)

    }
  };

  const onDelete = (index) => {
    const newtodo = [...ListTask];
    newtodo.splice(index, 1);
    setListTask(newtodo);
    localStorage.setItem("Task", JSON.stringify(newtodo));
  };

  const onEdit = (index) => {
    userStore.updateOpenEdit(1);

    setEditIndex(index);
  };

  return (
    <div className="container">
      <label className="labelsub">Enter your task : </label>
      <input onChange={(event) => getTask(event.target.value)}></input>
      <button className="submitbtn" onClick={setContext}>
        Submit
      </button>
      <br></br>
      {ListTask == null ? (
        <div>
        </div>
      ) : (
        <div className="todo">
          <>
            {ListTask.map((Task, index) => (
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
            ))}
          </>
        </div>
      )}
      {userStore.OpenEdit === 1 ? <EditPage index={EditIndex}/> : <></>}
    </div>
  );
};

export default Home;
