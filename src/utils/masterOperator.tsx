import { hexToRgb, randomHexColor, rgbToHex } from "./colorUtils";

export function generateRandomColorPairs(count: number, lerp: number): { from: string; to: string }[] {

    const colorPairs = [];

    for (let i = 0; i < count; i++) {
        const from = randomHexColor();
        const to = randomHexColor();

        const startColor = hexToRgb(from);
        const endColor = hexToRgb(to);

        const interpolatedColor = {
            r: Math.round(startColor.r + lerp * (endColor.r - startColor.r)),
            g: Math.round(startColor.g + lerp * (endColor.g - startColor.g)),
            b: Math.round(startColor.b + lerp * (endColor.b - startColor.b)),
        };

        const interpolatedHexColor = rgbToHex(interpolatedColor);

        colorPairs.push({ from, to: interpolatedHexColor });
    }

    return colorPairs;
}

