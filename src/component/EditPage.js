import React from "react";
import { UserStoreContext } from "../context/UserContext";

function EditPage(props) {
  const { index } = props;
  const userStore = React.useContext(UserStoreContext);

  const [TaskText, setTaskText] = React.useState("");

  React.useEffect(() => {
    let Tasklist = userStore.Task;

    setTaskText(Tasklist[index].Task);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const EditTask = (event) => {

    setTaskText(event)

    let Tasklist = userStore.Task;

    Tasklist.splice(index, 1, { Task: event });

    userStore.updateTask(Tasklist);

    localStorage.setItem("Task", JSON.stringify(Tasklist));

    userStore.updateUpdate(userStore.Update + 1);
  };

  const closeEdit = () => {
    userStore.updateOpenEdit(0);
  };

  return (
    <div>
      <h2>Edit your task </h2>
      <input
        type="Text"
        onChange={(event) => EditTask(event.target.value)}
        value={TaskText}
      ></input>
      <button className="closebtn" onClick={closeEdit}>
        Close
      </button>
    </div>
  );
}

export default EditPage;
