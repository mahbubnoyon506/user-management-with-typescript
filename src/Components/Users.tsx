import React, { useEffect, useState } from 'react';
import UserModel from '../Types/model';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setUsers(data)
        })
    }, [])
 
    const handleAddUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam)
    }
    return (
        <div>
            <h2>This is users page</h2>
            <h3>Team counr: {team.length}</h3>
            {/* <User name='Rahman' age={25} addUser={handleAddUser}></User> */}
            {
                users.map( user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;