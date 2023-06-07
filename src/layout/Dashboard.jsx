import React from 'react';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaRegEnvelope, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer drawer-mobile max-h-full gap-4">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        <li><p className='flex flex-col justify-start items-start'><span className='text-3xl font-bold '>Bristo Boss </span> Restaurant</p></li>
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add an Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaWallet></FaWallet> Mange Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers> All Users</NavLink></li>
                               

                                <div className='divider'></div>
                                <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to='/menu'><FaBars></FaBars> Menu</NavLink></li>
                                <li><NavLink to='/order'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                                <li><NavLink to='/contact'><FaRegEnvelope></FaRegEnvelope> Contact</NavLink></li>
                            </> :
                                <>
                                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart> My Cart
                                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                        </NavLink>
                                    </li>
                                    <div className='divider'></div>
                                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                                    <li><NavLink to='/menu'><FaBars></FaBars> Menu</NavLink></li>
                                    <li><NavLink to='/order'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                                    <li><NavLink to='/contact'><FaRegEnvelope></FaRegEnvelope> Contact</NavLink></li>
                                </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;