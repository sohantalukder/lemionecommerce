import React, { useEffect, useState } from 'react';
import { HiMinus, HiPlus, HiShoppingCart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listProductDetails } from '../../redux/actions/productActions';
import CustomLoader from '../components/customLoader/CustomLoader';
import ErrorCard from '../components/errorCard/ErrorCard';
import Rating from '../components/Rating/Rating';
import ProductDescription from './ProductDescription';
import './viewProduct.css';
const ViewProduct = (props) => {
	const [qty, setQty] = useState(1);
	const [isAddDisabled, setIsAddDisabled] = useState(false);
	const [isDeDisabled, setIsDeDisabled] = useState(false);
	let { id } = useParams();
	const navigate = useNavigate();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProductDetails(id));
	}, [id, dispatch]);
	const handleQuantity = (value) => {
		if (value === 'sub') {
			if (qty > 1) {
				setQty(qty - 1);
			} else {
				setIsDeDisabled(true);
			}
		} else if (value === 'sum') {
			if (qty !== product?.countInStock) {
				setQty(qty + 1);
			} else {
				setIsAddDisabled(true);
			}
		}
	};
	const handleAddToCart = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
			{loading ? (
				<CustomLoader />
			) : error ? (
				<ErrorCard message={error} />
			) : (
				<>
					<Link
						to="/"
						className="text-lg font-medium   px-5 py-2 hover:bg-gray-100 ">
						Go Back
					</Link>
					{/* <div className="mt-6">
						<div className="flex flex-col md:flex-row -mx-4 items-center">
							<div className="md:flex-1 px-4">
								<img
									src={product?.image}
									className="h-auto w-full object-fill rounded-lg bg-gray-100 mb-4"
									alt=""
								/>
							</div>
							<div className="md:flex-1 px-4">
								<div className="flex items-center mt-2.5 mb-3 text-black span-x-2">
									<Rating
										value={product?.rating}
										text={`${product?.numReviews} reviews`}
									/>
								</div>
								<h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
									{product?.name}
								</h2>
								<p className="text-gray-500 text-sm flex space-x-1">
									<span>By</span>
									<span className="text-indigo-600 hover:underline">
										{product?.brand}
									</span>
								</p>

								<div className="flex items-center space-x-4 my-4">
									<div>
										<div className="rounded-lg bg-gray-100 flex py-2 px-3">
											<span className="text-indigo-400 mr-1 mt-1">$</span>
											<span className="font-bold text-indigo-600 text-3xl">
												{product?.price}
											</span>
										</div>
									</div>
									<div className="flex-1">
										<p className="text-green-500 text-xl font-semibold">
											Save {product?.saving}
										</p>
										<p className="text-gray-400 text-sm">
											Inclusive of all Taxes.
										</p>
									</div>
								</div>
								<p className="pb-2">
									<strong>Stock:</strong>{' '}
									<span className="text-gray-500">
										{' '}
										{product?.countInStock < 1 ? 'Out Of Stock' : 'In Stock'}
									</span>
								</p>
								<p className="pb-2">
									<strong>Category:</strong>
									<span className="text-gray-500"> {product?.category}</span>
								</p>
								<p className="text-gray-500">
									<strong className="text-black ">Product Details:</strong>
									<p>{product?.description}</p>
								</p>
								{product.countInStock > 0 && <div></div>}

								<div className="flex py-4 space-x-4">
									<button
										type="button"
										className="h-10 px-6 py-1 font-semibold rounded-sm bg-black text-white">
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div> */}
					<div className="product_view_wrap section_padding_b mt-5">
						<div className="container">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div>
									<div className="product_view_slider slick-initialized slick-slider">
										<div className="slick-list draggable">
											<div
												className="slick-track"
												style={{ opacity: 1, width: '3456px' }}>
												<div
													className="single_viewslider slick-slide slick-current slick-active"
													data-slick-index="5"
													aria-hidden="false"
													style={{
														width: '576px',
														position: 'relative',
														top: '0px',
														zIndex: 999,
														opacity: 1,
													}}>
													<img
														loading="lazy"
														src={product?.image}
														alt={product?.name}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="product_info_wrapper">
										<div className="product_base_info">
											<h1> {product?.name}</h1>
											<div className="rating">
												<Rating
													value={product?.rating}
													text={`${product?.numReviews} reviews`}
												/>
											</div>
											<div className="product_other_info">
												<p>
													<span>Availability:</span>
													{product?.countInStock > 1 ? (
														<span className="text-green-600">In Stock</span>
													) : (
														<span className="text-red-600">Out of Stock</span>
													)}
												</p>
												<p>
													<span>Brand:</span>
													{product?.brand}
												</p>
												<p>
													<span>Category:</span>
													{product?.category}
												</p>
											</div>
											<div className="price mt-3 mb-3 flex items-center space-x-2.5">
												<span className="prev_price mr-0">
													${product?.previousPrice}
												</span>
												<span className="org_price mr-2">
													${product?.price}
												</span>
												<div className="disc_tag !mr-10">
													-${product?.saving}
												</div>
											</div>
											<div className="pd_dtails mt-4">
												<p>{product?.description?.slice(0, 160)}....</p>
											</div>

											<div className="cart_qnty md:mr-auto mt-3">
												<p className="mb-2">Quantity</p>
												<div className="flex items-center">
													<button
														disabled={isDeDisabled}
														onClick={() => handleQuantity('sub')}>
														<div className="cart_qnty_btn flex items-center justify-center">
															<HiMinus />
														</div>
													</button>
													<div className="cart_count">{qty}</div>
													<button
														disabled={isAddDisabled}
														onClick={() => handleQuantity('sum')}>
														<div className="cart_qnty_btn flex items-center justify-center">
															<HiPlus />
														</div>
													</button>
												</div>
											</div>
										</div>
										<div className="product_buttons">
											<button
												onClick={handleAddToCart}
												disabled={product.countInStock === 0}
												className="default_btn small rounded sm:mr-3 me-2 px-4 flex space-x-1 items-center">
												<HiShoppingCart />
												<span> Add to Cart</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<ProductDescription product={product} />
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ViewProduct;
