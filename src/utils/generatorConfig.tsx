import { generateAnalogousColors } from "./Analogous";
import { generateMonochromaticColors } from "./Monochromatic";
import { generatePastelVariations } from "./PastelColors";
import { Generator } from "../types";


const generators: Generator[] = [
    {
        name: 'analogous',
        description: 'In color theory, analogous colors are groups of colors that are next to each other on the color wheel.',
        function: generateAnalogousColors,
        parameters: ["count",
            "baseColorOne",
            "lerp",
            "hue", "lightness", "saturation",
            "Isinterpolated"],
    },
    {
        name: 'monochromatic',
        description: 'Generate Monochromatic colors',
        function: generateMonochromaticColors,
        parameters: ['baseColorOne'],

    },
    {
        name: 'pastel',
        description: 'Generate Pastel colors',
        function: generatePastelVariations,
        parameters: ["count", "baseColorOne", "random", "hue", "lightness", "saturation",

        ],

    },
    // Add more generators as needed
];

export default generators;
