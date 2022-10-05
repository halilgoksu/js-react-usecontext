
import React,{useContext} from 'react';
import User from './User';
import {UserContext} from "./context/UserContext";


const UserList = () => {
    const context= useContext(UserContext);
    //gelen veriye takma ad olarak context vedik 
    //asagida veriyi parcalayip kullandik 
    //gelen degere arrayin icinde bir obje kumesi 
    

  return (
    <div className='userlist'>
        {context.users.map(user=>(
            <User key={user.name} user={user}></User>
        ))}
      
    </div>
  );
};

export default UserList
