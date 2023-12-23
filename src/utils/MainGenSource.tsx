import { colorGenerator } from "../types";
import { generateMonochromaticVariations } from "./MonochromaticColors";

export type generatorNames = "monochromatic"
const colorGenerators: Record<generatorNames, colorGenerator> = {
    monochromatic: {
        generatorFunction: generateMonochromaticVariations
    }
};

export { colorGenerators }