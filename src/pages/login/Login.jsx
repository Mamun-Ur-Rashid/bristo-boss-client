import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialSignIn from '../../shared/socialSignIn/SocialSignIn';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handlerLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully login',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                  navigate(from, {replace: true});
            })
    }
    const handlerValidedCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bristo Boos | LogIn</title>
            </Helmet>
            <div className="grid md:grid-cols-2 bg-base-200 my-12 md:w-3/4 mx-auto">
                <div><img src="https://i.ibb.co/KNXxQcz/login.webp" alt="" /></div>

                <div className="shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center p-4 font-bold">Login</h1>
                    <Form onSubmit={handlerLogin} className=" mt-0 p-4">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handlerValidedCaptcha} placeholder="Type captcha" className="input input-bordered" />
                            {/* <button  className=" btn-outline p-1 border-2 rounded-lg mt-4">Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={false} type="submit" className='btn btn-primary' value="Login" />
                        </div>
                    </Form>
                    <p className='text-center mb-4'>New here? <span className='text-red-600 underline'><Link to="/signUp">Create a New Account</Link></span></p>
                    <SocialSignIn></SocialSignIn>
                </div>
            </div>
        </div>
    );
};

export default Login;