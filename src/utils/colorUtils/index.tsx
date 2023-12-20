
export const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
export const hexToRgb = (hex: string) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
});
export const rgbToHex = (rgb: { r: number; g: number; b: number }) => {
    return `#${(rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).padStart(6, '0')}`;
};
// Helper function to convert RGB to HSL
export function rgbToHsl(rgb: { r: number; g: number; b: number }): { h: number; s: number; l: number } {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = 0;

        if (max === r) {
            h = (g - b) / d + (g < b ? 6 : 0);
        } else if (max === g) {
            h = (b - r) / d + 2;
        } else if (max === b) {
            h = (r - g) / d + 4;
        }

        h /= 6;
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// Helper function to convert HSL to RGB
export function hslToRgb(hsl: { h: number; s: number; l: number }): { r: number; g: number; b: number } {
    const h = hsl.h / 360;
    const s = hsl.s / 100;
    const l = hsl.l / 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
}
// Helper function to interpolate between two colors
export function interpolateColors(color1: string, color2: string, lerp: number, clockwise: boolean): string {
    const rgbColor1 = hexToRgb(color1);
    const rgbColor2 = hexToRgb(color2);

    // Determine the direction of interpolation
    const direction = clockwise ? 1 : -1;

    // Interpolate each channel
    const interpolatedColor = {
        r: Math.round(rgbColor1.r + direction * lerp * (rgbColor2.r - rgbColor1.r)),
        g: Math.round(rgbColor1.g + direction * lerp * (rgbColor2.g - rgbColor1.g)),
        b: Math.round(rgbColor1.b + direction * lerp * (rgbColor2.b - rgbColor1.b)),
    };

    // Convert back to hex
    return rgbToHex(interpolatedColor);
}
// Helper function to adjust hue dynamically
export function adjustHue(hexColor: string, angle: number): string {
    const rgbColor = hexToRgb(hexColor);
    const hslColor = rgbToHsl(rgbColor);

    // Adjust hue dynamically
    hslColor.h += angle;

    // Normalize hue to the range [0, 360)
    hslColor.h = (hslColor.h + 360) % 360;

    // Convert back to hex
    return rgbToHex(hslToRgb(hslColor));
}