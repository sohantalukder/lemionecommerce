import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className=" bg-black  shadow  ">
			<div className="max-w-7xl container  sm:px-6 lg:px-8  md:flex md:items-center md:justify-between mx-auto px-5 py-6 xl:px-0">
				<span className="text-sm text-white sm:text-center ">
					© 2022{' '}
					<Link to="/Lemion_Ecommerce" className="hover:underline">
						Lemion Ecommerce
					</Link>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm text-white  sm:mt-0">
					<li>
						<Link to="/" className="mr-4 hover:underline md:mr-6 ">
							About
						</Link>
					</li>
					<li>
						<Link to="/" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link to="/" className="mr-4 hover:underline md:mr-6">
							Licensing
						</Link>
					</li>
					<li>
						<Link to="/" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
