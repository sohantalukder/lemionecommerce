import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Error = ({ message, handleShow, show, type }) => {
    return (
        show &&
        message && (
            <div
                className={`${
                    type === "success" ? "bg-green-100" : "bg-red-100"
                } border ${
                    type === "success" ? "border-green-400" : "border-red-400"
                } ${
                    type === "success" ? "text-black" : "text-red-700"
                } px-4 py-3 rounded relative`}
                role='alert'
            >
                <strong className='font-semibold'>{message}</strong>
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
