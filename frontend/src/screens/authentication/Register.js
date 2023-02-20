import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput/TextInput";
const initialState = { email: "", password: "", confirmPassword: "" };
const Register = () => {
    const [registrationInfo, setRegistrationInfo] = useState(initialState);
    return (
        <section className='bg-gray-50 '>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                            Create and account
                        </h1>
                        <form className='space-y-4 md:space-y-6' action='#'>
                            <div>
                                <TextInput
                                    label={"Your Email"}
                                    placeholder={"name@example.come"}
                                    required={true}
                                    type={"email"}
                                    name={"email"}
                                    value={registrationInfo.email}
                                    setValue={setRegistrationInfo}
                                />
                            </div>
                            <div>
                                <TextInput
                                    label={"Password"}
                                    placeholder={"••••••••"}
                                    required={true}
                                    type={"password"}
                                    name={"password"}
                                    value={registrationInfo.password}
                                    setValue={setRegistrationInfo}
                                />
                            </div>
                            <div>
                                <TextInput
                                    label={" Confirm password"}
                                    placeholder={"••••••••"}
                                    required={true}
                                    type={"password"}
                                    name={"confirmPassword"}
                                    value={registrationInfo.confirmPassword}
                                    setValue={setRegistrationInfo}
                                />
                            </div>
                            <button
                                type='submit'
                                className='w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center '
                            >
                                Create an account
                            </button>
                            <p className='text-sm font-light text-gray-500 '>
                                Already have an account?{" "}
                                <Link
                                    to='/login'
                                    className='font-medium text-black hover:underline '
                                >
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
