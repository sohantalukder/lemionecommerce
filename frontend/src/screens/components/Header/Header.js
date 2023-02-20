import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions";
import "./header.css";
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const users = useSelector((state) => state.users);
    const { userInfo } = users || {};
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logout());
    };
    return (
        <header className='header'>
            <div className='max-w-7xl container  sm:px-6 lg:px-8  flex justify-between items-center mx-auto py-6 px-5 2xl:px-0'>
                <Link to='/'>
                    <h1 className=' font-bold text-xl text-white'>
                        Lemion Ecommerce
                    </h1>
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='flex space-x-1 items-center'>
                                <HiShoppingCart
                                    size={20}
                                    style={{ color: "#fff" }}
                                />
                                <span>CART</span>
                            </div>
                        </Link>
                    </li>
                    {!userInfo ? (
                        <li>
                            <Link to='/login'>
                                <div className='flex space-x-1 items-center'>
                                    <FaUser
                                        size={16}
                                        style={{ color: "#fff" }}
                                    />
                                    <span>SIGN IN</span>
                                </div>
                            </Link>
                        </li>
                    ) : (
                        <label className='dropdown'>
                            <div className='dd-button'>{userInfo?.name}</div>

                            <input
                                type='checkbox'
                                className='dd-input'
                                id='test'
                            />

                            <ul className='dd-menu'>
                                <li>Profile</li>
                                <li onClick={logOutHandler}>Log Out</li>
                            </ul>
                        </label>
                    )}
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: "#fff" }} />
                    ) : (
                        <FaBars size={20} style={{ color: "#fff" }} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
