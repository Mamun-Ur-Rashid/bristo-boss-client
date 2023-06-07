import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className='w-full, m-4'>
           <div className=''>
            <h2 className='text-2xl'>Welcome Back, {user.displayName}</h2>
           </div>
        </div>
    );
};

export default UserHome;