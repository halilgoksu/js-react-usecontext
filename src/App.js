import React, { useState } from "react";
import "./style.css";
import UserList from "./UserList";
import { UserContext } from "./context/UserContext";

const data = [
  { id: 1, name: "Ali", email: "golihas.gmail.com", age: 29, color: "red" },
  {id: 2,name: "Olivia", email: "hassonte.gmail.com",age: 31,color: "yellow"},
  { id: 3, name: "Brent", email: "fake.gmail.com", age: 33, color: "blue" }
];

const App = () => {

  const [users, setUsers] = useState(data);

  const changeColor = (id, color) =>
    setUsers(
      users.map(user=>(user.id === id ? { ...user, color: color } : user))
    );

  return (
    <UserContext.Provider value={{users,changeColor}}>
      <div className="app">
        <h2>User List</h2>
        <UserList></UserList>
      </div>
    </UserContext.Provider>
  );
};

export default App;

