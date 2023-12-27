import React, { useState } from 'react';
interface ChildProps {
    onDataSend: (isSwitchOn: boolean) => void;
    type: string
}

export const SwitchComponent: React.FC<ChildProps> = ({ onDataSend, type }) => {
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

    const handleButtonClick = () => {
        setIsSwitchOn(isSwitchOn ? false : true);
        if (onDataSend) {
            onDataSend(isSwitchOn)
        }
    };

    return (
        <div className="w-full  shadow rounded-md h-10 mt-4 flex p-1 relative items-center">
            <div className="w-full flex justify-center">
                <button
                    onClick={handleButtonClick}
                    className={`w-full ${!isSwitchOn ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                        } rounded-md focus:outline-none p-1 m-1`}
                >
                    <p >  {type == "randomColors" ? "One" : "ClockWise"}</p>
                </button>
            </div>
            <div className="w-full flex justify-center">
                <button
                    onClick={handleButtonClick}
                    className={`w-full ${isSwitchOn ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
                        } rounded-md focus:outline-none p-1 m-1`}
                >
                    <p>
                        {type == "randomColors" ? "Multiple" : "Counter ClockWise"}
                    </p>
                </button>
            </div>

        </div>
    );
};

