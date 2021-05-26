import React from "react";

export const UserStoreContext = React.createContext();

const UserStoreProvider = ({ children }) => {
  const [Task, setTask] = React.useState(null);
  const [Update, setUpdate] = React.useState(0);
  const [OpenEdit, setOpenEdit] = React.useState(0);

  const userStore = {
    Task: Task,
    Update: Update,
    OpenEdit: OpenEdit,
    updateTask: (Task) => setTask(Task),
    updateUpdate: (Update) => setUpdate(Update),
    updateOpenEdit: (OpenEdit) => setOpenEdit(OpenEdit)
  };

  return (
    <UserStoreContext.Provider value={userStore}>
      {children}
    </UserStoreContext.Provider>
  );
};

export default UserStoreProvider;
