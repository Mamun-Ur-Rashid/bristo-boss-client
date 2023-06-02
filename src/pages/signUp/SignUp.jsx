import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Form, useForm } from 'react-hook-form';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialSignIn from '../../shared/socialSignIn/SocialSignIn';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)

                    .then(() => {
                        const saveUser = { name: data.name, email: data.email};
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'User profile Updated',
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    })
                                    //   photo update na hole ekhane logOut ta niye aste hbe
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bristo Boos | signUP</title>
            </Helmet>
            <div className="grid md:grid-cols-2 bg-base-200 my-12 md:w-3/4 mx-auto">
                <div><img src="https://i.ibb.co/KNXxQcz/login.webp" alt="" /></div>

                <div className="shadow-2xl bg-base-100 p-4">
                    <h1 className="text-4xl text-center p-4 font-bold">SignUP!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        <div className='form-control'>
                            <label htmlFor="">Name</label>
                            <input className='input input-bordered' {...register("name", { required: true })} placeholder='Enter your name' />
                            {errors.name && <span className='mt-3 text-red-600'>Name  is required</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">photo URL</label>
                            <input className='input input-bordered' {...register("photoUrl", { required: true })} placeholder='Photo url' />
                            {errors.photoURL && <span className='mt-3 text-red-600'>Photo URL  is required</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Email</label>
                            <input className='input input-bordered'  {...register("email", { required: true })} placeholder='Enter your Email' />
                            {errors.email && <span className='mt-3 text-red-600'>Email  is required</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Password</label>
                            <input className='input input-bordered' type='password' {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder='Enter your password' />
                            {errors.password?.type == 'required' && <span className='mt-3 text-red-600'>Password field required</span>}
                            {errors.password?.type === 'minLength' && <span className='mt-3 text-red-600'>Password must be 8 characters long</span>}
                            {errors.password?.type === 'maxLength' && <span className='mt-3 text-red-600'>Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='mt-3 text-red-600'>Password must have one upperCase, one lowerCase, one number and one special characters</span>}
                        </div>

                        <div className='form-control'>
                            <input type="submit" className='btn btn-primary' value="SignUP" />
                        </div>
                    </form>
                    <p className='my-4 text-center'><small className='text-red-500 text-center'>Already registered? <Link to='/login' className='underline text-md'>Go to LogIn</Link></small></p>
                    <SocialSignIn></SocialSignIn>
                </div>
            </div>
        </div>
    );
};

export default SignUp;