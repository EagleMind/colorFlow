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

        const hexColor = hslToHexv2(newHue, args.saturation + (saturation / 100), args.lightness + (lightness / 100));
        if (args.lerp) {
            const interpolatedColor = interpolateColors(args.baseColorOne, hexColor, args.lerp, true)
            colorVariations.push({ from: hexColor, to: interpolatedColor });

        } else {
            colorVariations.push(hexColor);
        }
    }

    return colorVariations;
};
