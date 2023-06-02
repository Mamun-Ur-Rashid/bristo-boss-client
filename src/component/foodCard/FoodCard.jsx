import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const { image, price, name, recipe, _id } = item;
    const {user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handlerAddToCart = (item) => {
        if(user && user.email){
            const cartItem = {foodItemId: _id, name, price, image, email:user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': "application/json"},
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then( data => {
                if(data.insertedId){
                    refetch() // cart updated
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your cart added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from : location}});
                }
              })
        }
    }
    return (
        <div className=''>
            <div className="card h-[420px] w-96 bg-base-100 shadow-xl">
                <figure><img className='h-64' src={image} /></figure>
                <p className='bg-gray-900 text-white absolute top-0 right-0 mr-6 mt-6 p-1'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handlerAddToCart(item)} className="btn btn-outline border-0 border-b-4">add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;