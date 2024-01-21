import { hexToRgb, rgbToHex } from './colorUtils';

export const generateMonochromaticColors: (
    args: any,
) => any = (args) => {
    const baseRGB = hexToRgb(args.baseColorOne);

    if (!baseRGB || typeof baseRGB !== 'object' || Array.isArray(baseRGB)) {
        console.error('Invalid baseRGB:', baseRGB);
        return [];
    }

    const variationOutput: string[] = [];

    for (let i = 0; i < 12; i++) {
        const factor = (i - Math.floor(12 / 2)) * 40;
        const adjustedColor = {
            r: Math.min(Math.max(baseRGB.r + factor, 0), 255),
            g: Math.min(Math.max(baseRGB.g + factor, 0), 255),
            b: Math.min(Math.max(baseRGB.b + factor, 0), 255),
        };

        const adjustedHexColor = rgbToHex(adjustedColor);

        if (
            variationOutput.length === 0 ||
            adjustedHexColor !== variationOutput[0]
        ) {
            variationOutput.push(adjustedHexColor);
        }
    }

    return variationOutput;
};
