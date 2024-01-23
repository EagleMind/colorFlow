import React, { useState, FC } from "react";
import { useDebouncyEffect } from "use-debouncy";
import { HexColorPicker } from "react-colorful";

interface DebouncedPickerProps {
    color: string;
    onChange: (color: string) => void;
}

export const DebouncedPicker: FC<DebouncedPickerProps> = ({ color, onChange }) => {
    const [value, setValue] = useState<string>(color);

    useDebouncyEffect(() => onChange(value), 200, [value]);

    return <HexColorPicker color={value} onChange={setValue} />;
};

