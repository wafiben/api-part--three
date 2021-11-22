import React from 'react'
import {  useSelector } from 'react-redux'
 const ListOfUsers = () => {
    const users=useSelector(state=>state)
    console.log(users.users);
    return (
        <div>
            <h1>listOfUsers</h1>
            {users.users.length>0 ? users.users.map((elt)=>(<p>{elt.first_name}</p>)):'still waiting'}
        </div>
    )
}
export default ListOfUsers;
