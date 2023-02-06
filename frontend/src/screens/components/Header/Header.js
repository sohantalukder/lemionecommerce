import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<header className="header">
			<div className="max-w-7xl container  sm:px-6 lg:px-8  flex justify-between items-center mx-auto py-6 px-5 2xl:px-0">
				<h1 className=" font-bold text-xl text-white">Lemion Ecommerce</h1>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">
							<div className="flex space-x-1 items-center">
								<HiShoppingCart size={20} style={{ color: '#fff' }} />
								<span>CART</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="flex space-x-1 items-center">
								<FaUser size={16} style={{ color: '#fff' }} />
								<span>CART</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>

				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes size={20} style={{ color: '#fff' }} />
					) : (
						<FaBars size={20} style={{ color: '#fff' }} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
