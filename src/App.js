import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const usersListHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id:Math.random().toString(),username: username, age: age }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={usersListHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
