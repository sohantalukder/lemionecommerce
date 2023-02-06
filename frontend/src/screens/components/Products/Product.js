import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Product = ({ product = {} }) => {
	const { _id, image, name, price, rating, numReviews } = product;
	return (
		<div className="w-full max-w-sm bg-white rounded-sm border border-slate-200 ">
			<img className="w-full max-h-auto object-fill" src={image} alt={name} />

			<div className="px-5 pb-5 mt-5">
				<Link to={`/product/${_id}`}>
					<h5 className="text-lg font-semibold tracking-tight text-gray-900">
						{name.length > 30 ? `${name.slice(0, 30)}...` : name}
					</h5>
				</Link>
				<div className="flex items-center mt-2.5 mb-5 text-black span-x-2">
					<Rating value={rating} text={`${numReviews} reviews`} />
				</div>
				<div className="flex items-center justify-between">
					<span className="text-xl font-bold text-gray-900 ">${price}</span>
					<Link
						to={`/product/${_id}`}
						className="text-white bg-black font-medium rounded-sm text-sm px-5 py-2.5 text-center ">
						Add to cart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
