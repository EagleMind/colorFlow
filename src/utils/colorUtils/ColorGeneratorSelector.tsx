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
        <div>
            <select
                value={selectedGenerator?.name || ''}
                onChange={handleGeneratorChange}
                className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
            >
                <option value="" disabled>
                    Select a generator
                </option>
                {generators.map((generator) => (
                    <option key={generator.name} value={generator.name}>
                        {generator.name}
                    </option>
                ))}
            </select>

            {selectedGenerator && (
                <div>
                    <p>{selectedGenerator.description}</p>
                    {/* You can render additional information about the selected generator here */}
                </div>
            )}
        </div>
    );
};

export default GeneratorSelector;
