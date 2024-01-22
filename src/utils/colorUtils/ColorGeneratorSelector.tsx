// GeneratorSelector.tsx
import React, { useState } from 'react';
import { Generator } from '../../types';
import generators from '../generatorConfig';
interface GeneratorSelectorProps {
    onGeneratorSelect: (generator: Generator) => void;
}
const GeneratorSelector: React.FC<GeneratorSelectorProps> = ({ onGeneratorSelect }) => {
    const [selectedGenerator, setSelectedGenerator] = useState<Generator | null>(null);

    const handleGeneratorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGeneratorName = event.target.value;
        const generator = generators.find((gen) => gen.name === selectedGeneratorName) || null;
        setSelectedGenerator(generator);
        if (generator) {
            onGeneratorSelect(generator);
        }

    };

    return (
        <div className='flex flex-col mx-5' >
            <select
                value={selectedGenerator?.name}
                onChange={handleGeneratorChange}
                className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-5 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white border border-input bg-gradient-to-r from-[#e29455] to-[#e26855] hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
            >
                <option value={selectedGenerator?.name} disabled>
                    {selectedGenerator?.name}
                </option>
                {generators.map((generator) => (
                    <option className='text-black ' key={generator.name} value={generator.name}>
                        {generator.name}
                    </option>
                ))}
            </select>

            {selectedGenerator && (
                <div>
                    <p>{selectedGenerator.description}</p>
                </div>
            )}
        </div>
    );
};

export default GeneratorSelector;
