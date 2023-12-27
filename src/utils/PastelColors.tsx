import { interpolateColors, adjustHue, randomHexColor } from './colorUtils';

interface ColorPair {
    from: string;
    to: string;
}

export const generatePastelPairs = (args: any): ColorPair[] => {
    const colorPairs: ColorPair[] = [];

    if (args.random) {
        for (let i = 0; i < args.count; i++) {
            const baseColor1 = randomHexColor();
            const baseColor2 = randomHexColor();

            const colorOne = adjustHue(baseColor1, args.adjustHue);
            const colorTwo = adjustHue(baseColor2, args.adjustHue);

            const interpolatedColor = interpolateColors(colorOne, colorTwo, args.lerp, args.adjustHue);

            colorPairs.push({ from: args.baseColorOne, to: interpolatedColor });
        }
    } else {
        const colorOne = adjustHue(args.baseColorOne, args.adjustHue);
        const colorTwo = adjustHue(args.baseColorTwo, args.adjustHue);

        const interpolatedColor = interpolateColors(colorOne, colorTwo, args.lerp, args.adjustHue);

        colorPairs.push({ from: args.baseColorOne, to: interpolatedColor });
    }



    return colorPairs;
};
