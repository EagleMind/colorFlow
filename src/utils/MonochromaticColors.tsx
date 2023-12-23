import { MonochromaticColorObject } from '../types';
import { hexToRgb, rgbToHex } from './colorUtils';

export const generateMonochromaticVariations: (
    baseColor: string,
    count: number
) => MonochromaticColorObject[] = (baseColor, count) => {
    const baseRGB = hexToRgb(baseColor);

    // Define a function to calculate the adjusted color for a given factor
    const calculateAdjustedColor = (factor: number): string => {
        const adjustedColor = {
            r: Math.min(Math.max(baseRGB.r + factor, 0), 255),
            g: Math.min(Math.max(baseRGB.g + factor, 0), 255),
            b: Math.min(Math.max(baseRGB.b + factor, 0), 255),
        };
        return rgbToHex(adjustedColor);
    };

    // Generate variations
    const variationOutputWithGeneratorName: MonochromaticColorObject[] = Array.from(
        { length: count },
        (_, i) => ({
            generatorName: "MonochromaticGenerator",
            colors: Array.from({ length: i + 1 }, (_, j) =>
                calculateAdjustedColor((j - Math.floor(i / 2)) * 40)
            ),
        })
    );

    // Sort variations based on hue
    variationOutputWithGeneratorName.sort((a, b) => {
        const hueA = parseInt(a.colors[0].substring(1), 16); // Extract hue from the first color
        const hueB = parseInt(b.colors[0].substring(1), 16); // Extract hue from the first color
        return hueA - hueB;
    });

    return variationOutputWithGeneratorName;
};
