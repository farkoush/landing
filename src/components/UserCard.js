import React from 'react';

const UserCard = (props) => {
    const{results, info} = props.item; 
    return (
        <div>
            <p><span>Name:</span>{results.name}</p>
        </div>
    );
}

export default UserCard;