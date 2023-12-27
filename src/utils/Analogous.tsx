import { hexToHSLv2, hslToHexv2, interpolateColors } from "./colorUtils";

export const generateAnalogousColors: (
    args: any,
) => any = (args) => {
    const baseColorHSL = hexToHSLv2(args.baseColorOne);
    const { hue, saturation, lightness } = baseColorHSL;
    const colorVariations = [];

    if (!args.adjustHue && !args.lerb && args.baseColorOne) {
        return null
    } else {
        for (let i = 0; i < args.count; i++) {
            // Calculate the new hue for each variation
            const newHue = (hue + i * args.adjustHue) % 360;

            // Convert HSL to hex
            const hexColor = hslToHexv2(newHue, saturation / 100, lightness / 100);
            // Interpolation itself could be optional as well, for so, ColorVariations needs to switch structure from handing an object to an array of strings
            // Therefore the handling of data state in App.tsx should be adjusted accordingly
            const interpolatedColor = interpolateColors(args.baseColorOne, hslToHexv2(newHue, saturation / 200, lightness / 100), args.lerp, args.adjustHue);
            // hslToHexv2(newHue, saturation / 200, lightness / 100) : Could be made optional for more gradient control capabilities.

            colorVariations.push({ from: hexColor, to: interpolatedColor });
        }
    }


    return colorVariations;
}

