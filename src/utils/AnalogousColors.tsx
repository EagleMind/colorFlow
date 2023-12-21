import { hexToRgb, rgbToHex, hslToRgb, rgbToHsl, interpolateColors } from './colorUtils';

// Enum for defining the direction of analogous colors
export enum AnalogousDirection {
    Clockwise,
    CounterClockwise,
}

export function generateAnalogousPairs(
    count: number,
    baseColor1: string,
    baseColor2: string,
    lerp: number,
    shiftAngle: number,
    direction: AnalogousDirection = AnalogousDirection.CounterClockwise,

): { from: string; to: string }[] {
    const colorPairs = [];

    for (let i = 0; i < count; i++) {
        // Interpolate between the two input base colors
        const baseColor = interpolateColors(baseColor1, baseColor2, i / (count - 1), true);

        // Calculate analogous colors
        const analogousColors = calculateAnalogousColors(baseColor, shiftAngle, direction);

        // Interpolate between the base color and analogous colors
        const interpolatedColors = analogousColors.map((analogousColor) =>
            interpolateColors(baseColor, analogousColor, lerp, true)
        );

        colorPairs.push({ from: interpolatedColors[0], to: interpolatedColors[1] });
    }

    return colorPairs;
}

// Calculate analogous colors based on the direction and shift angle
function calculateAnalogousColors(
    hexColor: string,
    shiftAngle: number,
    direction: AnalogousDirection
): [string, string] {
    const baseColor = hexToRgb(hexColor);
    const hslBaseColor = rgbToHsl(baseColor);

    const angle = direction === AnalogousDirection.Clockwise ? shiftAngle : -shiftAngle;

    // Calculate analogous color angles
    const angle1 = (hslBaseColor.h + angle + 360) % 360;
    const angle2 = (hslBaseColor.h - angle + 360) % 360;

    // Convert angles back to RGB
    const analogousColor1 = rgbToHex(hslToRgb({ h: angle1, s: hslBaseColor.s, l: hslBaseColor.l }));
    const analogousColor2 = rgbToHex(hslToRgb({ h: angle2, s: hslBaseColor.s, l: hslBaseColor.l }));

    return [analogousColor1, analogousColor2];
}
