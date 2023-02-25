import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingData } from "../../redux/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import TextInput from "../components/textInput/TextInput";

const Shipping = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const [address, setAddress] = useState(shippingAddress?.address);
    const [city, setCity] = useState(shippingAddress?.city);
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
    const [country, setCountry] = useState(shippingAddress?.country);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingData({ address, city, postalCode, country }));
        navigate("/payment");
    };
    return (
        <div className='py-8 md:py-12 max-w-xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0'>
            <CheckoutSteps step1 />
            <h1 className='text-black md:text-2xl text-xl mb-4 font-semibold'>
                Shipping
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                    <TextInput
                        label={"Address*"}
                        value={address}
                        placeholder={"Enter Address"}
                        onChange={(e) => setAddress(e.target.value)}
                        required={true}
                        type={"text"}
                    />
                </div>
                <div>
                    <TextInput
                        label={"City*"}
                        value={city}
                        placeholder={"Enter City"}
                        onChange={(e) => setCity(e.target.value)}
                        required={true}
                        type={"text"}
                    />
                </div>
                <div>
                    <TextInput
                        label={"Postal Code*"}
                        value={postalCode}
                        placeholder={"Enter Postal Code"}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required={true}
                        type={"text"}
                    />
                </div>
                <div>
                    <TextInput
                        label={"Country*"}
                        value={country}
                        placeholder={"Enter Country"}
                        onChange={(e) => setCountry(e.target.value)}
                        required={true}
                        type={"text"}
                    />
                </div>
                <button
                    type='submit'
                    className='w-max-[200px] text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center '
                >
                    {"Continue"}
                </button>
            </form>
        </div>
    );
};

export default Shipping;
