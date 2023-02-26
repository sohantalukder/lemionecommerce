import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/orderActions";
import CustomLoader from "../components/customLoader/CustomLoader";
import Error from "../components/errorCard/Error";
import { BsFillExclamationCircleFill } from "react-icons/bs";
const Order = () => {
    const dispatch = useDispatch();
    const { loading, order, error } =
        useSelector((state) => state.orderDetails) || {};

    const { id } = useParams();
    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, [dispatch, id]);
    const [show, setShow] = useState(true);

    return loading ? (
        <div className='mt-10'>
            {" "}
            <CustomLoader />
        </div>
    ) : error ? (
        <Error show={show} handleShow={setShow} message={error} />
    ) : (
        <div className='py-8 md:py-12 max-w-7xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0'>
            <h1 className='text-xl font-semibold mb-4'>Order {order?._id}</h1>
            <div className='grid grid-cols-1 md:grid-cols-4  gap-4 items-start overflow-hidden'>
                <div className='overflow-hidden col-span-3 '>
                    <div>
                        <h1 className='text-black md:text-2xl text-lg mb-4 font-semibold'>
                            Shipping
                        </h1>
                        <p>
                            <strong>Address: </strong>
                            {order.shippingAddress?.address},{" "}
                            {order.shippingAddress?.city},{" "}
                            {order.shippingAddress?.postalCode},{" "}
                            {order.shippingAddress?.country}
                        </p>
                        {order.isDelivered ? (
                            <p className='bg-green-300 py-2 w-full my-3 px-3'>
                                Delivered on {order.deliveredAt}
                            </p>
                        ) : (
                            <p className='bg-red-300 py-2 w-full my-3 px-3'>
                                Not Delivered
                            </p>
                        )}

                        <hr className='bg-black my-6' />
                    </div>
                    <div>
                        <h1 className='text-black md:text-2xl text-lg mb-4 font-semibold'>
                            Payment Method
                        </h1>
                        <p>
                            <strong>Method: </strong>
                            {order?.paymentMethod}
                        </p>{" "}
                        {order.isPaid ? (
                            <p className='bg-green-300 py-2 w-full my-3 px-3'>
                                Paid on {order.paidAt}
                            </p>
                        ) : (
                            <p className='bg-red-300 py-2 w-full my-3 px-3'>
                                Not Paid
                            </p>
                        )}
                        <hr className='bg-black my-6' />
                    </div>
                    <div>
                        <h1 className='text-black md:text-2xl text-lg mb-4 font-semibold'>
                            Order Items
                        </h1>
                        {order?.orderItems?.length === 0 ? (
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
                                    {order?.orderItems?.map((item) => (
                                        <div key={item?.product}>
                                            <div
                                                className='flex space-x-2'
                                                key={item?.product}
                                            >
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
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <div className='col-span-1  border border-gray-200'>
                        <h1 className='text-center py-3 text-2xl font-medium'>
                            Order Summary
                        </h1>
                        <hr />
                        <h1 className='text-base py-3 border-b flex justify-between px-8'>
                            Items <span>$ {order?.itemsPrice}</span>
                        </h1>
                        <h1 className='text-base py-3 border-b flex justify-between px-8'>
                            Shipping <span>$ {order?.shippingPrice}</span>
                        </h1>
                        <h1 className='text-base py-3 border-b flex justify-between px-8'>
                            <p>Tax</p> <span>$ {order?.taxPrice}</span>
                        </h1>
                        <h1 className='text-base py-3 flex justify-between px-8'>
                            <p>Total</p>
                            <span>$ {order?.totalPrice}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
