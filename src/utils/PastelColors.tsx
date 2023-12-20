import { hexToRgb, rgbToHex, interpolateColors, rgbToHsl, hslToRgb } from './colorUtils';

export function generatePastelPairs(count: number, baseColor: string, lerp: number = 0.5, direction: boolean): { from: string; to: string }[] {
    const colorPairs = [];

    for (let i = 0; i < count; i++) {
        // Calculate pastel color by adjusting saturation towards the target color
        const pastelColor = adjustSaturation(baseColor, -20);

        // Interpolate between the base color and pastel color
        const interpolatedPastelColor = interpolateColors(baseColor, pastelColor, lerp, direction);

        colorPairs.push({ from: baseColor, to: interpolatedPastelColor });
    }

    return colorPairs;
}

// Helper function to adjust saturation towards the target color
function adjustSaturation(baseColor: string, adjustment: number): string {
    const baseRgb = hexToRgb(baseColor);

    const baseHsl = rgbToHsl(baseRgb);

    // Adjust saturation towards the target color
    baseHsl.s += adjustment * (baseHsl.s) / 100;

    // Clamp saturation to the valid range (0 - 100)
    baseHsl.s = Math.max(0, Math.min(100, baseHsl.s));

    // Convert back to hex
    return rgbToHex(hslToRgb(baseHsl));
}
