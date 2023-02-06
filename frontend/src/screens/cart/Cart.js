import React, { useEffect } from 'react';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import './cart.css';
const Cart = () => {
	let location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const qty = location.search ? location.search.split('=')[1] : 1;
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty));
		}
	}, [id, qty, dispatch]);
	const handleCheckout = () => {
		navigate('/login?redirect=shipping');
	};
	const handleRemoveFormCart = (id) => {
		dispatch(removeFromCart(id));
	};

	return (
		<div className="max-w-7xl container mx-auto px-5 lg:px-0 mt-6 overflow-hidden">
			<h1 className="text-center mb-10 font-Semibold text-4xl">Cart</h1>
			{cartItems?.length === 0 ? (
				<div>
					<div className="border border-gray-400 flex items-center mb-5 ">
						<div className="px-6 py-5 bg-black text-white">
							<BsFillExclamationCircleFill />
						</div>
						<p className="ml-4 ">Your cart is currently empty.</p>
					</div>
					<Link to="/">Return to shop </Link>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-4  gap-4 items-start overflow-hidden">
					<div className="overflow-hidden col-span-3 ">
						<div className="overflow-x-auto">
							<table className=" table-auto ">
								<thead>
									<tr>
										<th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Product
										</th>
										<th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Price
										</th>
										<th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Quantity
										</th>

										<th className="px-5 py-3  bg-gray-100"></th>
									</tr>
								</thead>
								<tbody>
									{cartItems?.length > 0 &&
										cartItems.map((item) => (
											<tr key={item?.product}>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<div className="flex items-center">
														<div className=" w-20 h-20">
															<img
																className="w-full h-full "
																src={item?.image}
																alt={item?.name}
															/>
														</div>
														<div className="ml-3 text-lg font-medium">
															{item?.name.slice(0, 40)}...
														</div>
													</div>
												</td>
												<td className="border-b border-gray-200 bg-white text-sm">
													<p className="text-gray-900 font-medium text-lg whitespace-no-wrap">
														${item?.price}
													</p>
												</td>
												<td className=" border-b border-gray-200 bg-white text-sm">
													<select
														className="bg-gray-50 border px-4 py-2"
														onChange={(e) =>
															dispatch(
																addToCart(item.product, Number(e.target.value))
															)
														}
														value={item.qty}>
														{[...Array(item?.countInStock)?.keys()].map((x) => (
															<option key={x + 1} value={x + 1}>
																{x + 1}
															</option>
														))}
													</select>
													<div className="flex items-center"></div>
												</td>
												<td className="pr-7 border-b border-gray-200 bg-white text-sm text-right">
													<button
														type="button"
														onClick={() => handleRemoveFormCart(item?.product)}
														className="inline-block text-gray-500 hover:text-gray-700 text-xl">
														<MdDelete />
													</button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="px-8 py-5 col-span-1  border border-gray-200">
						<h1 className="text-center text-2xl font-medium">Cart Totals</h1>
						<h1 className="text-xl py-5">
							Subtotal{' '}
							<span>
								$
								{(cartItems || [])
									.reduce((acc, item) => acc + item.qty * item.price, 0)
									.toFixed(2)}
							</span>
						</h1>

						<button
							disabled={cartItems?.length === 0}
							onClick={handleCheckout}
							className="px-3 py-2 bg-black text-white w-full">
							Proceed to Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
