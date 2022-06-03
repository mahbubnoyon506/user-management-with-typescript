import React, { FC } from 'react';
import UserModel from '../Types/model';
// interface Props {
//     name: string,
//     age: number,
//     addUser: () => void
// }
interface Props {
   user: UserModel,
   addUser: (user: UserModel) => void
}
const User: FC<Props> = ({user, addUser}) => {
    const {name, email} = user 
    return (
        <div>
           <h4>Hello {name} with Email: {email}.</h4> 
           <button onClick={() => addUser(user)}>Add Me</button>
        </div>
    );
};

export default User;