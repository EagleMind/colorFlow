import { hexToHSLv2, hslToHexv2, interpolateColors } from "./colorUtils";

export const generateAnalogousColors = (args: any) => {
    if (!args.baseColorOne) {
        return null;
    }

    const baseColorHSL = hexToHSLv2(args.baseColorOne);
    const { hue, saturation, lightness } = baseColorHSL;
    const colorVariations = [];

    for (let i = 0; i < args.count; i++) {
        // Calculate the new hue for each variation
        const newHue = (hue + (i * args.hue)) % 360; // Vary the hue dynamically
        // Convert HSL to hex

        const hexColor = hslToHexv2(newHue, saturation / 100, lightness / 100);
        colorVariations.push(hexColor);
    }

    return colorVariations;
};
