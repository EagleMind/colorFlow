import React, { useEffect, useState } from 'react';
interface ChildProps {
    onDataSend: (value: any) => void;
    min: number;
    max: number;
    type: string
    name: string
}

export const NumberSlider: React.FC<ChildProps> = ({ onDataSend, min, max, type, name }) => {
    const [value, setValue] = useState(0);
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
        <div className="flex items-center  rounded-md border p-2 my-2  min-w-full justify-between bg-white" >
            <p >{name}</p>

            <input
                type="range"
                step={type == "int" ? "1" : "0.1"}
                min={min}

                max={max}
                value={value}
                onChange={handleSliderChange}
                className="appearance-none rounded-full h-2 bg-blue-200 outline-none"
            />
            <p className="  text-center">{value.toFixed()}</p>

        </div>
    );
};

