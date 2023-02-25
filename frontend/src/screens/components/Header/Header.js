import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions";
import "./header.css";
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const users = useSelector((state) => state.users);
    const { userInfo } = users || {};
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen((prevState) => !prevState);
    };
    const logOutHandler = () => {
        handleOpen();
        dispatch(logout());
    };
    const navigate = useNavigate();
    const goProfile = () => {
        handleOpen();
        navigate("/profile");
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
                        <Link to='/cart'>
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
                        <li className='dropdown'>
                            <div className='dd-button' onClick={handleOpen}>
                                {userInfo?.name}
                            </div>
                            <ul className={`dd-menu ${!open && "hidden"}`}>
                                <li onClick={goProfile}>Profile</li>
                                <li onClick={logOutHandler}>Log Out</li>
                            </ul>
                        </li>
                    )}
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
