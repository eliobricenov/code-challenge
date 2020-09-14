import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../common.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {
    const { user } = useParams();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://api.github.com/users/${user}`)
            .then(({ data }) => setUserData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [user]);

    if (loading) {
        return (
            <div className='d-flex justify-content-center mt-5'>
                <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
        );
    } else {
        const { avatar_url, name, location } = userData;
        console.log({ avatar_url, name, location });
        return (
            <>
                <nav className={`navbar navbar-dark ${styles['bg-dark']} `}>
                    <Link
                        className={`navbar-brand font-weight-bold mb-0 h1 ${styles['cursor-pointer']}`}
                        to='/'
                    >
                        Back
                    </Link>
                    <span className='navbar-brand font-weight-bold mx-auto mb-0 h1'>
                        Home
                    </span>
                </nav>
                <div className='p-4 p-md-5'>
                    <div className={`${styles['border-bottom']} pb-3`}>
                        <div className='d-inline-flex'>
                            <img
                                className={`${styles['image-avatar']}`}
                                src={avatar_url}
                            ></img>
                        </div>
                        <div className='d-inline-block ml-2'>
                            <span className='font-weight-bold h5 d-block'>
                                {name}
                            </span>
                            <span className='d-block'>{location}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default UserPage;
