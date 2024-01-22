import React, { useEffect, useState } from 'react';
interface ChildProps {
    onDataSend: (value: any) => void;
    min: number;
    max: number;
    type: string
    name: string
}

export const NumberSlider: React.FC<ChildProps> = ({ onDataSend, min, max, type, name }) => {
    const [value, setValue] = useState(min);
    useEffect(() => {
        if (onDataSend) {
            onDataSend(value);
        }
    }, [onDataSend, value]);
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setValue(newValue);
    };

    return (
        <div className="flex items-center  rounded-md  p-2 my-2 w-full justify-between bg-gradient-to-r from-[#e29455] to-[#e26855] shadow-md" >
            <p className='text-white mx-3' >{name}</p>

            <input
                type="range"
                step={type == "int" ? "1" : "0.1"}
                min={min}

                max={max}
                value={value || min}
                onChange={handleSliderChange}
                className="appearance-none rounded-lg w-full h-2  outline-none slider "
            />
            <p className="text-white mx-3 text-center">{value.toFixed()}</p>

        </div>
    );
};

