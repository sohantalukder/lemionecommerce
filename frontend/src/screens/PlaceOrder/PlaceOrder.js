import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import { BsFillExclamationCircleFill } from "react-icons/bs";
const PlaceOrder = () => {
    const cart = useSelector((state) => state.cart);
    cart.itemsPrice = (cart?.cartItems || [])
        .reduce((acc, item) => acc + item.qty * item.price, 0)
        .toFixed(2);
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 10;
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };
    cart.taxPrice = addDecimals((0.115 * cart?.itemsPrice).toFixed(2));
    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2);
    return (
        <div className='py-8 md:py-12 max-w-7xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0'>
            <div className='max-w-xl mx-auto'>
                {" "}
                <CheckoutSteps step1 step2 step3 />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4  gap-4 items-start overflow-hidden'>
                <div className='overflow-hidden col-span-3 '>
                    <div>
                        <h1 className='text-black md:text-2xl text-lg mb-4 font-semibold'>
                            Shipping
                        </h1>
                        <p>
                            <strong>Address: </strong>
                            {cart.shippingAddress?.address},{" "}
                            {cart.shippingAddress?.city},{" "}
                            {cart.shippingAddress?.postalCode},{" "}
                            {cart.shippingAddress?.country}
                        </p>
                        <hr className='bg-black my-6' />
                    </div>
                    <div>
                        <h1 className='text-black md:text-2xl text-lg mb-4 font-semibold'>
                            Payment Method
                        </h1>
                        <p>
                            <strong>Method: </strong>
                            {cart?.paymentMethod}
                        </p>
                        <hr className='bg-black my-6' />
                    </div>
                    <div>
                        <h1 className='text-black md:text-2xl text-lg mb-4 font-semibold'>
                            Order Items
                        </h1>
                        {cart?.cartItems?.length === 0 ? (
                            <div>
                                <div className='border border-gray-400 flex items-center mb-5 '>
                                    <div className='px-6 py-5 bg-black text-white'>
                                        <BsFillExclamationCircleFill />
                                    </div>
                                    <p className='ml-4 '>
                                        Your cart is currently empty.
                                    </p>
                                </div>
                                <Link to='/'>Return to shop </Link>
                            </div>
                        ) : (
                            <>
                                <div>
                                    {cart?.cartItems.map((item) => (
                                        <>
                                            <div className='flex space-x-2'>
                                                <div className='w-8 h-8'>
                                                    <img
                                                        src={item?.image}
                                                        alt={item?.name}
                                                    />
                                                </div>
                                                <div className='mr-5'>
                                                    <Link
                                                        to={`/product/${item?.product}`}
                                                        className='hover:underline'
                                                    >
                                                        {item?.name}
                                                    </Link>
                                                </div>
                                                <div>
                                                    {item?.qty} x {item?.price}{" "}
                                                    = {item?.qty * item?.price}
                                                </div>
                                            </div>
                                            <hr className='my-3' />
                                        </>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <div className='px-8 py-5 col-span-1  border border-gray-200'>
                        <h1 className='text-center text-2xl font-medium'>
                            Order Summary
                        </h1>
                        <hr />
                        <h1 className='text-base py-3 border-b flex justify-between'>
                            Items <span>$ {cart?.itemsPrice}</span>
                        </h1>
                        <h1 className='text-base py-3 border-b flex justify-between'>
                            Shipping <span>$ {cart?.shippingPrice}</span>
                        </h1>
                        <h1 className='text-base py-3 border-b flex justify-between'>
                            <p>Tax</p> <span>$ {cart?.taxPrice}</span>
                        </h1>
                        <h1 className='text-base py-3 flex justify-between'>
                            <p>Total</p>
                            <span>$ {cart?.totalPrice}</span>
                        </h1>

                        <button
                            disabled={cart?.cartItems?.length === 0}
                            // onClick={handleCheckout}
                            className='px-3 py-2 bg-black text-white w-full'
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
