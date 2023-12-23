import { ColorGeneratorSelectorProps } from "../../types";

export const ColorGeneratorSelector: React.FC<ColorGeneratorSelectorProps> = ({ colorGenerators, onTypeChange }) => {
    return (
        <div>
            <p>Select Color Generator Type:</p>
            <select onChange={(e) => onTypeChange(e.target.value)}>
                {Object.keys(colorGenerators).map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};