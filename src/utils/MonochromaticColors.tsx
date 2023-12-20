import { randomHexColor, hexToRgb, rgbToHex, interpolateColors, rgbToHsl, hslToRgb } from './colorUtils';

export function generateMonochromaticPairs(count: number, lerp: number, direction: number): { from: string; to: string }[] {
    const colorPairs = [];

    for (let i = 0; i < count; i++) {
        const baseColor = randomHexColor();

        // Calculate monochromatic colors by adjusting lightness
        const lightColor = adjustLightness(baseColor, 20);
        const darkColor = adjustLightness(baseColor, -20);

        // Interpolate between the base color and monochromatic colors
        const interpolatedLightColor = interpolateColors(baseColor, lightColor, lerp, true);
        const interpolatedDarkColor = interpolateColors(baseColor, darkColor, lerp, true);

        colorPairs.push({ from: interpolatedDarkColor, to: interpolatedLightColor });
    }

    return colorPairs;
}

// Helper function to adjust lightness
function adjustLightness(hexColor: string, adjustment: number): string {
    const rgbColor = hexToRgb(hexColor);
    const hslColor = rgbToHsl(rgbColor);

    // Adjust lightness
    hslColor.l += adjustment;

    // Clamp lightness to the valid range (0 - 100)
    hslColor.l = Math.max(0, Math.min(100, hslColor.l));

    // Convert back to hex
    return rgbToHex(hslToRgb(hslColor));
}
