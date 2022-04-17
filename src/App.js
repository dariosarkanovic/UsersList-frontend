import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

const Users = [
  /*{ id: "e1", name: "Ime1", age: "23" },
  { id: "e2", name: "Ime2", age: "25" },*/
];

function App() {
  const [currentUsers, setCurrentUsers] = useState(Users);

  const addUserHandler = (user) => {

    setCurrentUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const deleteUserHandler = (deletedUserID) => {
    setCurrentUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter(
        (user) => user.id !== deletedUserID
      );
      return updatedUsers;
    });
  };
  return (
    <div>
        <AddUser onAddUser={addUserHandler} users={currentUsers}/>
        <UsersList items={currentUsers} onDeleteUser={deleteUserHandler} />
    </div>
    
  );
}

export default App;
