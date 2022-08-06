import React from 'react';
import UserGrid  from 'components/UserGrid';
import styles from './Landing.module.scss';
const Landing = (props) => {
    return (
        <div className={styles.LandingPage}>
            <UserGrid />
        </div>
    );
}

export default Landing;