import React from "react";

const ErrorCard = ({ message }) => {
    return (
        <div className='bg-white p-8 rounded-xl shadow'>
            <div className='m-auto space-y-6'>
                <div className='flex gap-4 bg-red-500 p-4 rounded-md'>
                    <div className='space-y-1 text-sm'>
                        <h6 className='font-medium text-white'>Error</h6>
                        <p className='text-red-100 leading-tight'>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorCard;
