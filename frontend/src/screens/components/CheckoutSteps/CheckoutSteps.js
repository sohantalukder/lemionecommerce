import React from "react";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <div className='h-full w-full pb-16'>
            <dh-component>
                <div className=' mx-auto'>
                    <div className='bg-gray-200 h-1 flex items-center justify-between relative'>
                        {!step1 && (
                            <>
                                <div className='absolute left-0 -mr-2'>
                                    <div className='relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12'>
                                        <svg
                                            className='absolute top-0 -mt-1 w-full right-0 left-0'
                                            width='16px'
                                            height='8px'
                                            viewBox='0 0 16 8'
                                            version='1.1'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <g
                                                id='Page-1'
                                                stroke='none'
                                                tabIndex='1'
                                                fill='none'
                                                fillRule='evenodd'
                                            >
                                                <g
                                                    id='Progress-Bars'
                                                    transform='translate(-322.000000, -198.000000)'
                                                    fill='#FFFFFF'
                                                >
                                                    <g
                                                        id='Group-4'
                                                        transform='translate(310.000000, 198.000000)'
                                                    >
                                                        <polygon
                                                            id='Triangle'
                                                            points='20 0 28 8 12 8'
                                                        ></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p
                                            tabIndex='0'
                                            className='focus:outline-none text-black text-xs font-bold'
                                        >
                                            Step 1: Sign In
                                        </p>
                                    </div>
                                </div>

                                <div className='bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative'>
                                    <div className='h-3 w-3 bg-black rounded-full'></div>
                                </div>
                            </>
                        )}
                        {step1 && (
                            <>
                                <div
                                    className={`w-1/3 flex justify-between ${
                                        step1 && "bg-black"
                                    } h-1 items-center relative`}
                                >
                                    {!step2 && (
                                        <div className='absolute right-0 -mr-2'>
                                            <div className='relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12'>
                                                <svg
                                                    className='absolute top-0 -mt-1 w-full right-0 left-0'
                                                    width='16px'
                                                    height='8px'
                                                    viewBox='0 0 16 8'
                                                    version='1.1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <g
                                                        id='Page-1'
                                                        stroke='none'
                                                        tabIndex='1'
                                                        fill='none'
                                                        fillRule='evenodd'
                                                    >
                                                        <g
                                                            id='Progress-Bars'
                                                            transform='translate(-322.000000, -198.000000)'
                                                            fill='#FFFFFF'
                                                        >
                                                            <g
                                                                id='Group-4'
                                                                transform='translate(310.000000, 198.000000)'
                                                            >
                                                                <polygon
                                                                    id='Triangle'
                                                                    points='20 0 28 8 12 8'
                                                                ></polygon>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <p
                                                    tabIndex='0'
                                                    className='focus:outline-none text-black text-xs font-bold'
                                                >
                                                    Step 2: Shipping
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <div className='bg-black h-6 w-6 rounded-full shadow flex items-center justify-center'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='icon icon-tabler icon-tabler-check'
                                            width='18'
                                            height='18'
                                            viewBox='0 0 24 24'
                                            tabIndex='1.5'
                                            stroke='#FFFFFF'
                                            fill='none'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path
                                                stroke='none'
                                                d='M0 0h24v24H0z'
                                            />
                                            <path d='M5 12l5 5l10 -10' />
                                        </svg>
                                    </div>
                                </div>
                                <div className='bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative'>
                                    <div className='h-3 w-3 bg-black rounded-full'></div>
                                </div>
                            </>
                        )}
                        <div
                            className={`w-1/3 flex justify-between ${
                                step2 && "bg-black"
                            } h-1 items-center relative`}
                        >
                            {step2 && (
                                <>
                                    {!step3 && (
                                        <div className='absolute right-0 -mr-2'>
                                            <div className='relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12'>
                                                <svg
                                                    className='absolute top-0 -mt-1 w-full right-0 left-0'
                                                    width='16px'
                                                    height='8px'
                                                    viewBox='0 0 16 8'
                                                    version='1.1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <g
                                                        id='Page-1'
                                                        stroke='none'
                                                        tabIndex='1'
                                                        fill='none'
                                                        fillRule='evenodd'
                                                    >
                                                        <g
                                                            id='Progress-Bars'
                                                            transform='translate(-322.000000, -198.000000)'
                                                            fill='#FFFFFF'
                                                        >
                                                            <g
                                                                id='Group-4'
                                                                transform='translate(310.000000, 198.000000)'
                                                            >
                                                                <polygon
                                                                    id='Triangle'
                                                                    points='20 0 28 8 12 8'
                                                                ></polygon>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <p
                                                    tabIndex='0'
                                                    className='focus:outline-none text-black text-xs font-bold'
                                                >
                                                    Step 3: Payment
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <div className='bg-black h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='icon icon-tabler icon-tabler-check'
                                            width='18'
                                            height='18'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='#FFFFFF'
                                            fill='none'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path
                                                stroke='none'
                                                d='M0 0h24v24H0z'
                                            />
                                            <path d='M5 12l5 5l10 -10' />
                                        </svg>
                                    </div>
                                    <div className='bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative'>
                                        <div className='h-3 w-3 bg-black rounded-full'></div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            className={`w-1/3 flex justify-between ${
                                step3 && "bg-black"
                            } h-1 items-center relative`}
                        >
                            {step3 && (
                                <>
                                    {!step4 && (
                                        <div className='absolute right-0 -mr-2'>
                                            <div className='relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12'>
                                                <svg
                                                    className='absolute top-0 -mt-1 w-full right-0 left-0'
                                                    width='16px'
                                                    height='8px'
                                                    viewBox='0 0 16 8'
                                                    version='1.1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <g
                                                        id='Page-1'
                                                        stroke='none'
                                                        tabIndex='1'
                                                        fill='none'
                                                        fillRule='evenodd'
                                                    >
                                                        <g
                                                            id='Progress-Bars'
                                                            transform='translate(-322.000000, -198.000000)'
                                                            fill='#FFFFFF'
                                                        >
                                                            <g
                                                                id='Group-4'
                                                                transform='translate(310.000000, 198.000000)'
                                                            >
                                                                <polygon
                                                                    id='Triangle'
                                                                    points='20 0 28 8 12 8'
                                                                ></polygon>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <p
                                                    tabIndex='0'
                                                    className='focus:outline-none text-black text-xs font-bold'
                                                >
                                                    Step 4: Place Order
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <div className='bg-black h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='icon icon-tabler icon-tabler-check'
                                            width='18'
                                            height='18'
                                            viewBox='0 0 24 24'
                                            tabIndex='1.5'
                                            stroke='#FFFFFF'
                                            fill='none'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path
                                                stroke='none'
                                                d='M0 0h24v24H0z'
                                            />
                                            <path d='M5 12l5 5l10 -10' />
                                        </svg>
                                    </div>
                                    <div className='bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative'>
                                        <div className='h-3 w-3 bg-black rounded-full'></div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </dh-component>
        </div>
    );
};

export default CheckoutSteps;
