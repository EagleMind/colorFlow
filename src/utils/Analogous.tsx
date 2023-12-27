import { hexToHSLv2, hslToHexv2, interpolateColors } from "./colorUtils";

export const generateAnalogousColors: (
    args: any,
) => any = (args) => {
    const baseColorHSL = hexToHSLv2(args.baseColorOne);
    const { hue, saturation, lightness } = baseColorHSL;
    const colorVariations = [];

    // Define the difference in hue between each analogous color

    for (let i = 0; i < args.count; i++) {
        // Calculate the new hue for each variation
        const newHue = (hue + i * args.adjustHue) % 360;

        // Convert HSL to hex
        const hexColor = hslToHexv2(newHue, saturation / 100, lightness / 100);
        const interpolatedColor = interpolateColors(args.baseColorOne, hslToHexv2(newHue, saturation / 200, lightness / 100), args.lerp, args.adjustHue);

        colorVariations.push({ from: hexColor, to: interpolatedColor });
        console.log("vars")
    }

    return colorVariations;
}

