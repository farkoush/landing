import React, { useContext } from 'react';
import { UsersContext } from '../context/UsersContextProvider';
import { UserCard } from '../components';

const UserGrid = () => {
    const users = useContext(UsersContext)
    if (users === undefined) return <div>Loading...</div>;
    return (
        <div>
                {users?.map((user) => {
                    return (
                            <div key={(user.id).toString()}>
                                <UserCard item = {user}/>
                            </div>                        
                    )
                })}
        </div>
    );
}

export default UserGrid;