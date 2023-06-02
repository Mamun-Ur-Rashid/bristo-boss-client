import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const [cart] = useCart();
    const { user, logOut } = useContext(AuthContext);
    const handlerLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navbarOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/SALAD">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to='/dashboard/myCart'>
            <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>

        {
            user ? <div className='inline-flex justify-center items-center'>
                <span><img className='h-14 w-14 rounded-full' src={user?.photoURL} alt="" /></span>
                <button onClick={handlerLogOut} className="btn btn-ghost">LogOut</button></div> :
                <><li><Link to="/login">Login</Link></li></>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-20 bg-gray-900 max-w-screen-xl	mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost  text-xl font-bold uppercase block">Bristo Boss <br /> <span className='font-semibold mt-0 pt-0'>Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;