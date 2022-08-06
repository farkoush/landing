import React, { useContext } from 'react';
import { UsersContext } from '../../context/UsersContextProvider';
import UserCard  from 'components/UserCard';
import styles from  './UserGrid.module.scss';

const UserGrid = () => {
    const users = useContext(UsersContext)
    if (users === undefined) return <div>Loading...</div>;
    return (
        <div>
            {users?.map((user) => {
                return (
                        <div className={styles.UserGrid} key={(user.id + user.email).toString()}>
                            <UserCard item = {user}/>
                        </div>                        
                )
            })}
        </div>
    );
}

export default UserGrid;