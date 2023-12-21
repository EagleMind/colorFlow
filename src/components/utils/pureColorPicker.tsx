import React, { useState } from "react";

interface ChildProps {
    onDataSend: (color: string) => void;
}

interface ColorOption {
    label: string;
    value: string;
}
// This a provisional feature and still not implemented , might not be that useful.
const PureColorsPicker: React.FC<ChildProps> = ({ onDataSend }) => {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const colorOptions: ColorOption[] = [
        { "label": "text-orange-900", "value": "#7C2D12" },
        { "label": "text-orange-950", "value": "#431407" },
        { "label": "text-amber-50", "value": "#FFFBEB" },
        { "label": "text-amber-100", "value": "#FEF3C7" },
        { "label": "text-amber-200", "value": "#FDE68A" },
        { "label": "text-amber-300", "value": "#FCD34D" },
        { "label": "text-amber-400", "value": "#FBBF24" },
        { "label": "text-amber-500", "value": "#F59E0B" },
        { "label": "text-amber-600", "value": "#D97706" },
        { "label": "text-amber-700", "value": "#B45309" },
        { "label": "text-amber-800", "value": "#92400E" },
        { "label": "text-amber-900", "value": "#78350F" },
        { "label": "text-amber-950", "value": "#451A03" },
        { "label": "text-yellow-50", "value": "#FEFCE8" },
        { "label": "text-yellow-100", "value": "#FEF9C3" },
        { "label": "text-yellow-200", "value": "#FEF088" },
        { "label": "text-yellow-300", "value": "#FDE047" },
        { "label": "text-yellow-400", "value": "#FCCA15" },
        { "label": "text-yellow-500", "value": "#EAB308" },
        { "label": "text-yellow-600", "value": "#CA8A04" },
        { "label": "text-yellow-700", "value": "#A16107" },
        { "label": "text-yellow-800", "value": "#854D0E" },
        { "label": "text-yellow-900", "value": "#713F12" },
        { "label": "text-yellow-950", "value": "#422006" },
        { "label": "text-lime-50", "value": "#F7FEE7" },
        { "label": "text-lime-100", "value": "#ECFCCB" },
        { "label": "text-lime-200", "value": "#D9FDB1" },
        { "label": "text-lime-300", "value": "#BEE374" },
        { "label": "text-lime-400", "value": "#A3E535" },
        { "label": "text-lime-500", "value": "#84CC16" },
        { "label": "text-lime-600", "value": "#65A30D" },
        { "label": "text-lime-700", "value": "#4D7C0F" },
        { "label": "text-lime-800", "value": "#3E6212" },
        { "label": "text-lime-900", "value": "#364F14" },
        { "label": "text-lime-950", "value": "#1A2E05" },
        { "label": "text-green-50", "value": "#F0FDF4" },
        { "label": "text-green-100", "value": "#DCFCE7" },
        { "label": "text-green-200", "value": "#BBF7D0" },
        { "label": "text-green-300", "value": "#86EFAC" },
        { "label": "text-green-400", "value": "#4ADE80" },
        { "label": "text-green-500", "value": "#22C55E" },
        { "label": "text-green-600", "value": "#16A34A" },
        { "label": "text-green-700", "value": "#15803D" },
        { "label": "text-green-800", "value": "#1D9F6E" },
        { "label": "text-green-900", "value": "#145C3D" },
        { "label": "text-green-950", "value": "#052E16" },
        { "label": "text-emerald-50", "value": "#ECFDF5" },
        { "label": "text-emerald-100", "value": "#D1FAE5" },
        { "label": "text-emerald-200", "value": "#A7F3D0" },
        { "label": "text-emerald-300", "value": "#6EE7B7" },
        { "label": "text-emerald-400", "value": "#34D399" },
        { "label": "text-emerald-500", "value": "#10B981" },
        { "label": "text-emerald-600", "value": "#059669" },
        { "label": "text-emerald-700", "value": "#047857" },
        { "label": "text-emerald-800", "value": "#065F46" },
        { "label": "text-emerald-900", "value": "#064E3B" },
        { "label": "text-emerald-950", "value": "#022C22" },
        // ... (continue the list for the remaining colors)
    ]



    const handleColorChange = (color: string) => {
        setSelectedColor(color);

        if (onDataSend) {
            onDataSend(color)
        }
    };


    return (
        <div>
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Color Palette</h1>
                <div className="flex scrollbar-thin scrollbar-thumb-[#FD4E2F] scrollbar-track-blue-300  overflow-x-scroll ">
                    {colorOptions.map((color, index) => (
                        <div
                            key={index}
                            className=" bg-gray-200 shadow-md p-2 cursor-pointer m-3 rounded-md"
                            style={{ backgroundColor: color.value }}
                            onClick={() => handleColorChange(color.value)}
                        >{color.value}</div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PureColorsPicker;
