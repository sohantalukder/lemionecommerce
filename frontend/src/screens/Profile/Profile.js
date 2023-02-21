import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/errorCard/Error";
import TextInput from "../components/textInput/TextInput";
const initialState = { name: "", email: "", password: "" };
const Profile = () => {
    const [profileIno, setProfileInfo] = useState(initialState);
    const { userInfo, loading, error } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [closed, setClosed] = useState(true);
    useEffect(() => {
        if (!userInfo) {
            navigate("/login");
        } else if (userInfo) {
            setProfileInfo({
                name: userInfo?.name,
                email: userInfo?.email,
            });
        }
    }, [userInfo, navigate]);
    const HandleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = profileIno;
        if (name && email && password && confirmPassword && !loading) {
            if (password === confirmPassword) {
                setMessage("");
                dispatch((name, email, password));
            } else {
                setMessage("Didn't match password to confirm password");
            }
        }
    };
    return (
        <div className='py-8 md:py-12 max-w-7xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0 flex md:flex-row flex-col gap-12'>
            <div className='md:w-[30%]'>
                <h1 className='text-xl font-bold'>User Profile</h1>
                <form
                    className='space-y-4 md:space-y-6 mt-6'
                    onSubmit={HandleSubmit}
                >
                    <div>
                        <TextInput
                            label={"Your Name"}
                            placeholder={"Name"}
                            required={true}
                            type={"text"}
                            name={"name"}
                            value={profileIno.name}
                            onChange={(e) =>
                                setProfileInfo({
                                    ...profileIno,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <TextInput
                            label={"Your Email"}
                            placeholder={"name@example.come"}
                            required={true}
                            type={"email"}
                            name={"email"}
                            value={profileIno.email}
                            onChange={(e) =>
                                setProfileInfo({
                                    ...profileIno,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <TextInput
                            label={"Password"}
                            placeholder={"••••••••"}
                            required={true}
                            type={"password"}
                            name={"password"}
                            value={profileIno.password}
                            onChange={(e) =>
                                setProfileInfo({
                                    ...profileIno,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <Error
                        handleShow={setClosed}
                        show={closed}
                        message={message || error}
                    />
                    <button
                        type='submit'
                        className='w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center '
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>
            <div>
                <h1 className='text-xl font-bold'>My Orders</h1>
            </div>
        </div>
    );
};

export default Profile;
