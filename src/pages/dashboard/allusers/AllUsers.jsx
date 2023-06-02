import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin =(user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount> 0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    const handlerDelete =( user) => {

    }
    return (
        <div className='mt-14 w-full'>
            <h3 className='text-4xl font-bold'>Total Users: {users.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-orange-500 text-white'><FaUsers></FaUsers></button>}</td>
                                <td><button onClick={() => handlerDelete(user)} className='btn btn-ghost bg-red-600 text-white'><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                       }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;