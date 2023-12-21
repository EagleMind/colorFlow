import React, { useState } from 'react';
interface ChildProps {
    onDataSend: (value: any) => void;
    min: number;
    max: number;
}

export const NumberSlider: React.FC<ChildProps> = ({ onDataSend, min, max }) => {
    const [value, setValue] = useState(0);
    if (onDataSend) {
        onDataSend(value)
    }
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setValue(newValue);
    };

    return (
        <div className="flex items-center w-full">
            <p className="mx-5  text-center">{value.toFixed()}</p>

            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleSliderChange}
                className="w-full  appearance-none rounded-full h-2 bg-blue-200 outline-none"
            />
        </div>
    );
};

