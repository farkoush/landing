import React from 'react';
import UserGrid  from 'components/UserGrid';
import Pagination  from 'components/Pagination';
import InfiniteScroll from 'components/InfiniteScroll';
import { useState } from 'react';

import styles from './Landing.module.scss';
const Landing = (props) => {
    const [view, setView] = useState('pagination')
    return (
        <div className={styles.LandingPage}>
            <h1>Welcome to Random Users</h1>

            <nav className='nav'>
                <button onClick={() => setView('pagination')}>Pagination</button>
                <button onClick={() => setView('infiniteScroll')}>Infinite Scroll</button>
            </nav>
            {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
        </div>
    );
}

export default Landing;