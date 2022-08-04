import React, { createContext, useEffect, useState } from 'react';
import getAPI from '../services/api';

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
    const [users, setUsers] = useState();
    useEffect(() => {
        const fetchAPI = async () => {
            setUsers(await getAPI());
        } 
        fetchAPI();
    },[]);
    return (
        <UsersContext.Provider value={users}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;