import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Error = ({ message, handleShow, show }) => {
    return (
        show &&
        message && (
            <div
                className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                role='alert'
            >
                <strong className='font-bold'>{message}</strong>
                <button
                    className='absolute top-0 bottom-0 right-0 px-4 py-3'
                    onClick={() => handleShow(!show)}
                >
                    <MdOutlineClose />
                </button>
            </div>
        )
    );
};

export default Error;
