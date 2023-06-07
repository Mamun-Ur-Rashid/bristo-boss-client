import React from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = UseAxiosSecure();

    const handlerDelete =(item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/menu/${item._id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div>
            <SectionTitle subHeading="hurry up!" heading={"manage all items"}></SectionTitle>
            <div className="overflow-hidden w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='t-header'>
                        <tr className='bg-[#D1A054]'>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Edith</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td> <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></td>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td><button onClick={() => handleUpdated(item)} className='btn btn-ghost bg-red-600 text-white'><FaTrashAlt></FaTrashAlt></button></td>
                                <td><button onClick={() => handlerDelete(item)} className='btn btn-ghost bg-red-600 text-white'><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;