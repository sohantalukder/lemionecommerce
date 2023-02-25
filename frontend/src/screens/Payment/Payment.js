import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../redux/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";

const Payment = () => {
    const { paymentMethod: method } = useSelector((state) => state.cart);
    const { state } = useLocation();
    const [paymentMethod, setPaymentMethod] = useState(method || "paypal");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeOrder");
    };

    useEffect(() => {
        if (!state) {
            console.log("shippingData");
            navigate("/shipping");
        }
    }, [state]);
    return (
        <div className='py-8 md:py-12 max-w-xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0'>
            <CheckoutSteps step1 step2 />
            <div className='max-w-lg mx-auto'>
                <form onSubmit={handleSubmit}>
                    <legend className='text-lg font-semibold mb-3'>
                        Select Method
                    </legend>
                    <fieldset className='mb-5'>
                        <div className='flex items-center mb-4'>
                            <input
                                id='country-option-1'
                                type='radio'
                                name='countries'
                                value='paypal'
                                className='h-4 w-4 border-gray-300 '
                                checked={paymentMethod === "paypal" && true}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <label
                                htmlFor='country-option-1'
                                className='text-sm font-medium text-gray-900 ml-2 block'
                            >
                                Paypal
                            </label>
                        </div>
                        <div className='flex items-center mb-4'>
                            <input
                                id='country-option-2'
                                type='radio'
                                name='countries'
                                value='credit_card'
                                checked={
                                    paymentMethod === "credit_card" && true
                                }
                                className='h-4 w-4 border-gray-300 '
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <label
                                htmlFor='country-option-2'
                                className='text-sm font-medium text-gray-900 ml-2 block'
                            >
                                Credit Card
                            </label>
                        </div>
                        <button
                            type={"submit"}
                            className='mt-2 w-max-[200px] text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center '
                        >
                            {"Continue"}
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Payment;
