
import React,{useContext} from 'react';
import User from './User';
import {UserContext} from "./context/UserContext";


const UserList = () => {
    const context= useContext(UserContext);

    

  return (
    <div className='userlist'>
        {context.users.map(user=>(
            <User key={user.name} user={user}></User>
        ))}
      
    </div>
  );
};

export default UserList
