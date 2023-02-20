import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/textInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/errorCard/Error";
import { login } from "../../redux/actions/userActions";
const initialState = { email: "", password: "" };
const Login = () => {
    const [loginInfo, setLoginInfo] = useState(initialState);
    const [closed, setClosed] = useState(true);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const { loading, error, userInfo } = users;
    const navigate = useNavigate();
    useEffect(() => {
        userInfo && navigate("/");
    }, [userInfo, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if ((email, password)) {
            dispatch(login(email, password));
        }
    };
    return (
        <section className='bg-gray-50 '>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                            Sign in to your account
                        </h1>
                        <form
                            className='space-y-4 md:space-y-6'
                            onSubmit={loading ? null : handleSubmit}
                        >
                            <div>
                                <TextInput
                                    label={"Your Email"}
                                    placeholder={"name@example.come"}
                                    required={true}
                                    type={"email"}
                                    name={"email"}
                                    value={loginInfo.email}
                                    onChange={(e) =>
                                        setLoginInfo({
                                            ...loginInfo,
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
                                    value={loginInfo.password}
                                    onChange={(e) =>
                                        setLoginInfo({
                                            ...loginInfo,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <Error
                                message={error}
                                show={closed}
                                handleShow={setClosed}
                            />
                            <button
                                type='submit'
                                className='w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center '
                            >
                                {loading ? "Loading.." : " Sign in"}
                            </button>
                            <p className='text-sm font-light text-gray-500 '>
                                Don’t have an account yet?{" "}
                                <Link
                                    to='/register'
                                    className='font-medium text-black hover:underline '
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
