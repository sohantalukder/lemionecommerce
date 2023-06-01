import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../../redux/actions/userActions";
import CustomLoader from "../components/customLoader/CustomLoader";
import ErrorCard from "../components/errorCard/ErrorCard";
import { AiFillCloseCircle, AiTwotoneEdit } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const AllUsers = () => {
    const dispatch = useDispatch();
    const {
        users: { users },
        loading,
        error,
    } = useSelector((state) => state.userList);
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);
    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure")) {
            dispatch(deleteUser(id));
        }
    };
    return (
        <div className='py-8 md:py-12 max-w-7xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0'>
            {loading ? (
                <CustomLoader />
            ) : error ? (
                <ErrorCard message={error} />
            ) : (
                <div className='relative overflow-x-auto mt-8 md:mt-12 '>
                    {users?.length === 0 ? (
                        <p>No Users found</p>
                    ) : (
                        <table className='w-full text-sm text-left text-gray-500 '>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>
                                        ID
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Name
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Email
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Admin
                                    </th>
                                    <th scope='col' className='px-6 py-3'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => (
                                    <tr
                                        className='bg-white border-b '
                                        key={user?._id}
                                    >
                                        <th
                                            scope='row'
                                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                                        >
                                            {user?._id}
                                        </th>
                                        <td className='px-6 py-4'>
                                            {user?.name}
                                        </td>
                                        <td className='px-6 py-4'>
                                            {user?.email}
                                        </td>
                                        <td className='px-6 py-4'>
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
