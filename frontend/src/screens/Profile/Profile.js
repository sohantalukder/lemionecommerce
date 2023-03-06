import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { myOrdersList } from "../../redux/actions/orderActions";
import { AiFillCloseCircle } from "react-icons/ai";
import {
    getUserDetails,
    updateUserProfile,
} from "../../redux/actions/userActions";
import CustomLoader from "../components/customLoader/CustomLoader";
import Error from "../components/errorCard/Error";
import TextInput from "../components/textInput/TextInput";
import { USER_UPDATE_PROFILE_RESET } from "../../redux/constants/userConstants";
const initialState = { name: "", email: "", password: "", newPassword: "" };
const Profile = () => {
    const [profileIno, setProfileInfo] = useState(initialState);
    const userDetails = useSelector((state) => state.users);
    const { userInfo, loading, error } = userDetails;
    const { success } = useSelector((state) => state.userUpdateProfile);
    const {
        orders,
        loading: orderLoading,
        error: orderError,
    } = useSelector((state) => state.myOrdersList);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [closed, setClosed] = useState(true);
    useEffect(() => {
        if (!userInfo) {
            navigate("/login");
        } else if (!userInfo || !userInfo?.name || success) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(getUserDetails("profile"));
            dispatch(myOrdersList());
        } else {
            setProfileInfo({
                name: userInfo?.name,
                email: userInfo?.email,
            });
            dispatch(myOrdersList());
        }
    }, [userInfo, navigate, dispatch, success]);
    const HandleSubmit = (e) => {
        e.preventDefault();
        const { name, email, newPassword } = profileIno;
        if (name && email && !loading) {
            setMessage("");
            dispatch(
                updateUserProfile({
                    id: userInfo._id,
                    name,
                    email,
                    newPassword,
                })
            );
        }
    };
    const [show, setShow] = useState(true);
    console.log(orders);
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
                            value={profileIno.name || ""}
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
                            value={profileIno.email || ""}
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
                            label={"Current Password"}
                            placeholder={"••••••••"}
                            type={"password"}
                            name={"password"}
                            value={profileIno.password || ""}
                            onChange={(e) =>
                                setProfileInfo({
                                    ...profileIno,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <TextInput
                            label={"New Password"}
                            placeholder={"••••••••"}
                            type={"password"}
                            name={"newPassword"}
                            value={profileIno.newPassword || ""}
                            onChange={(e) =>
                                setProfileInfo({
                                    ...profileIno,
                                    newPassword: e.target.value,
                                })
                            }
                        />
                    </div>
                    <Error
                        handleShow={setClosed}
                        show={closed}
                        message={message || error}
                        type={"error"}
                    />
                    <Error
                        handleShow={setClosed}
                        show={closed}
                        message={success && "Update your profile successfully"}
                        type={"success"}
                    />
                    <button
                        type='submit'
                        className='w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center '
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>My Orders</h1>
                {orderLoading ? (
                    <div className='mt-8 md:mt-12 mx-auto'>
                        <CustomLoader />
                    </div>
                ) : orderError ? (
                    <Error
                        show={show}
                        handleShow={setShow}
                        message={orderError}
                    />
                ) : (
                    <div class='relative overflow-x-auto mt-8 md:mt-12 '>
                        {orders?.length === 0 ? (
                            <p>No Orders found</p>
                        ) : (
                            <table class='w-full text-sm text-left text-gray-500 '>
                                <thead class='text-xs text-gray-700 uppercase bg-gray-50  '>
                                    <tr>
                                        <th scope='col' class='px-6 py-3'>
                                            ID
                                        </th>
                                        <th scope='col' class='px-6 py-3'>
                                            Date
                                        </th>
                                        <th scope='col' class='px-6 py-3'>
                                            Total
                                        </th>
                                        <th scope='col' class='px-6 py-3'>
                                            Paid
                                        </th>
                                        <th scope='col' class='px-6 py-3'>
                                            Delivered
                                        </th>
                                        <th scope='col' class='px-6 py-3'>
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders?.map((order) => (
                                        <tr
                                            class='bg-white border-b '
                                            key={order?._id}
                                        >
                                            <th
                                                scope='row'
                                                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                                            >
                                                {order?._id}
                                            </th>
                                            <td class='px-6 py-4'>
                                                {order?.createdAt?.substring(
                                                    0,
                                                    10
                                                )}
                                            </td>
                                            <td class='px-6 py-4'>
                                                {order?.totalPrice}
                                            </td>
                                            <td class='px-6 py-4'>
                                                {order?.isPaid ? (
                                                    order?.paidAt.substring(
                                                        0,
                                                        10
                                                    )
                                                ) : (
                                                    <AiFillCloseCircle
                                                        style={{ color: "red" }}
                                                    />
                                                )}
                                            </td>
                                            <td class='px-6 py-4'>
                                                {order?.isDelivered ? (
                                                    order?.deliveredAt.substring(
                                                        0,
                                                        10
                                                    )
                                                ) : (
                                                    <AiFillCloseCircle
                                                        style={{ color: "red" }}
                                                    />
                                                )}
                                            </td>
                                            <td className='px-6 py-4'>
                                                <Link
                                                    to={`/order/${order?._id}`}
                                                    className='underline'
                                                >
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
