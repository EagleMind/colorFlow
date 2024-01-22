import React from 'react';

interface SlideOverProps {
    children: React.ReactNode
}

export const SlideOver: React.FC<SlideOverProps> = ({ children }) => {
    return (
        <div className={`flex flex-col w-1/4 h-screen  overflow-hidden z-50 bg-white shadow-md overflow-y-auto `}>
            <div className='flex w-full p-3 justify-center bg-gray-200'>
                <h1 className='self-center font-bold text-[20px] text-gray-600'>Menu</h1>
            </div>
            <div className="flex flex-col justify-between ">
                <div className="mt-6">{children}</div>

            </div>
        </div>
    );
};


