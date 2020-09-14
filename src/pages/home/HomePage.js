import React from 'react';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const topFive = [
        'GrahamCampbell',
        'fabpot',
        'weierophinney',
        'rkh',
        'josh',
    ];

    return (
        <>
            <div className='container-fluid p-0'>
                <nav
                    className={`navbar navbar-dark ${styles['bg-dark']} nav-fill w-100`}
                >
                    <span className='navbar-brand font-weight-bold mx-auto mb-0 h1'>
                        Home
                    </span>
                </nav>
                <div className='p-5 w-100'>
                    <h1 className='font-weight-bold'>Top 5 Github Users</h1>
                    <h4 className='mt-2'>
                        Tap the username to see more information
                    </h4>
                    <div className='mt-3 d-flex'>
                        {topFive.map((user, position) => (
                            <Link
                                key={`user_${position}`}
                                className={`btn btn-primary mr-2 p-3 ${styles['cursor-pointer']}`}
                                to={`user/${user}`}
                            >
                                {user}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
