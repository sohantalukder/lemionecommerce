import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../../redux/actions/userActions";
import CustomLoader from "../components/customLoader/CustomLoader";
import ErrorCard from "../components/errorCard/ErrorCard";
import { AiFillCloseCircle, AiTwotoneEdit } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
const AllUsers = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.users);
    const {
        users: { users },
        loading,
        error,
    } = useSelector((state) => state.userList);
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);
    const deleteHandler = async (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json ",
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.delete(`/api/users/${id}`, config);
        if (res?.data?.response?.status?.code === 200) {
            toast.success(res?.data?.response?.status?.message);
        }
    };
    return (
        <div className='py-8 md:py-12 max-w-7xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0'>
            {loading ? (
                <CustomLoader />
            ) : error ? (
                <ErrorCard message={error} />
            ) : (
                <div class='relative overflow-x-auto mt-8 md:mt-12 '>
                    {users?.length === 0 ? (
                        <p>No Users found</p>
                    ) : (
                        <table class='w-full text-sm text-left text-gray-500 '>
                            <thead class='text-xs text-gray-700 uppercase bg-gray-50  '>
                                <tr>
                                    <th scope='col' class='px-6 py-3'>
                                        ID
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        Name
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        Email
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        Admin
                                    </th>
                                    <th scope='col' class='px-6 py-3'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => (
                                    <tr
                                        class='bg-white border-b '
                                        key={user?._id}
                                    >
                                        <th
                                            scope='row'
                                            class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                                        >
                                            {user?._id}
                                        </th>
                                        <td class='px-6 py-4'>{user?.name}</td>
                                        <td class='px-6 py-4'>{user?.email}</td>
                                        <td class='px-6 py-4'>
                                            {user?.isAdmin ? (
                                                <BsCheckCircleFill
                                                    style={{ color: "green" }}
                                                />
                                            ) : (
                                                <AiFillCloseCircle
                                                    style={{ color: "red" }}
                                                />
                                            )}
                                        </td>

                                        <td className='flex px-6 py-4'>
                                            <Link
                                                to={`/user/${user?._id}/edit`}
                                                className='underline'
                                            >
                                                <div className='bg-gray-400 text-white px-3 py-2'>
                                                    <AiTwotoneEdit />
                                                </div>
                                            </Link>
                                            <button
                                                className='bg-red-500 text-white px-3 py-2 cursor-pointer'
                                                onClick={() =>
                                                    deleteHandler(user?._id)
                                                }
                                            >
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllUsers;
