import React from 'react';
import styles from './UserCard.module.scss'
const UserCard = (props) => {
    // const{results, info} = props.item; 
    console.log(props.item.picture?.thumbnail);
    return (
        <div className={styles.UserCard}>
            <img className='rounded-full' src={props.item.picture.thumbnail} alt="" />
            <p>{props.item.name.first}</p>
            <p>{props.item.name.last}</p>
            <p>{props.item.email}</p>
        </div>
    );
}

export default UserCard;