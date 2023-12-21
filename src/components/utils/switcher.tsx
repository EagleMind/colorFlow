import React, { useState } from 'react';
interface ChildProps {
    onDataSend: (isSwitchOn: number) => void;
}

export const SwitchComponent: React.FC<ChildProps> = ({ onDataSend }) => {
    const [isSwitchOn, setIsSwitchOn] = useState<number>(0);

    const handleButtonClick = () => {
        setIsSwitchOn(isSwitchOn ? 0 : 1);
        if (onDataSend) {
            onDataSend(isSwitchOn)
        }
    };

    return (
        <div className="w-1/2 shadow rounded-md h-10 mt-4 flex p-1 relative items-center">
            <div className="w-full flex justify-center">
                <button
                    onClick={handleButtonClick}
                    className={`w-full ${!isSwitchOn ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                        } rounded-md focus:outline-none p-1 m-1`}
                >
                    ClockWise
                </button>
            </div>
            <div className="w-full flex justify-center">
                <button
                    onClick={handleButtonClick}
                    className={`w-full ${isSwitchOn ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                        } rounded-md focus:outline-none p-1 m-1`}
                >
                    CounterClockWise
                </button>
            </div>

        </div>
    );
};

