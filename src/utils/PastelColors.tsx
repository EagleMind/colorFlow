import { hexToRgb, rgbToHex, interpolateColors, rgbToHsl, hslToRgb } from './colorUtils';

export function generatePastelPairs(count: number, baseColor: string, lerp: number, direction: boolean, interpolate: boolean): (string | { from: string; to: string })[] {
    const result = [];

    for (let i = 0; i < count; i++) {
        // Calculate pastel color by adjusting saturation towards the target color
        const pastelColor = adjustSaturation(baseColor, -20);

        // Check if interpolation should be applied
        const interpolatedPastelColor = interpolate ? interpolateColors(baseColor, pastelColor, lerp, direction) : pastelColor;

        // Push either pastel hex value or color pair to the result array
        result.push(interpolate ? { from: baseColor, to: interpolatedPastelColor } : interpolatedPastelColor);
    }

    // Return the array of pastel values or color pairs
    return result;
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
