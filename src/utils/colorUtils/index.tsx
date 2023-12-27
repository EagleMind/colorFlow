import { Color } from "../../types";

export const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

export function hexToHSLv2(hex: string): Color {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, '');

    // Convert hex to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Convert RGB to HSL
    const rNormalized = r / 255;
    const gNormalized = g / 255;
    const bNormalized = b / 255;

    const max = Math.max(rNormalized, gNormalized, bNormalized);
    const min = Math.min(rNormalized, gNormalized, bNormalized);

    let hue = 0;
    let saturation = 0;
    const lightness = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case rNormalized:
                hue = ((gNormalized - bNormalized) / d + (gNormalized < bNormalized ? 6 : 0)) * 60;
                break;
            case gNormalized:
                hue = ((bNormalized - rNormalized) / d + 2) * 60;
                break;
            case bNormalized:
                hue = ((rNormalized - gNormalized) / d + 4) * 60;
                break;
        }
    }

    return { hue, saturation: saturation * 100, lightness: lightness * 100 };
}

export function hslToHexv2(h: number, s: number, l: number): string {
    // Convert HSL to RGB
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
    } else if (h >= 120 && h < 180) {
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        b = c;
    } else if (h >= 300 && h < 360) {
        r = c;
        b = x;
    }

    // Convert RGB to hex
    const rgbToHex = (value: number): string => {
        const hex = Math.round(value * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexColor = `#${rgbToHex(r + m)}${rgbToHex(g + m)}${rgbToHex(b + m)}`;
    return hexColor;
}

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

    // Ensure that the resulting hex values are formatted correctly
    const formattedColor = {
        r: Math.min(255, Math.max(0, interpolatedColor.r)),
        g: Math.min(255, Math.max(0, interpolatedColor.g)),
        b: Math.min(255, Math.max(0, interpolatedColor.b)),
    };

    // Convert back to hex
    return rgbToHex(formattedColor);
}
// Helper function to adjust hue
export function adjustHue(hexColor: string, adjustment: number): string {
    const rgbColor = hexToRgb(hexColor);
    const hslColor = rgbToHsl(rgbColor);

    // Adjust hue
    hslColor.h += adjustment;

    // Wrap hue around (0 - 360)
    hslColor.h = (hslColor.h + 360) % 360;

    // Convert back to hex
    return rgbToHex(hslToRgb(hslColor));
}
// Helper function to adjust lightness
export function adjustLightness(hexColor: string, adjustment: number): string {
    const rgbColor = hexToRgb(hexColor);
    const hslColor = rgbToHsl(rgbColor);

    // Adjust lightness
    hslColor.l += adjustment;

    // Clamp lightness to the valid range (0 - 100)
    hslColor.l = Math.max(0, Math.min(100, hslColor.l));

    // Convert back to hex
    return rgbToHex(hslToRgb(hslColor));
}



// Helper function to adjust saturation
export function adjustSaturation(hexColor: string, adjustment: number): string {
    const rgbColor = hexToRgb(hexColor);
    const hslColor = rgbToHsl(rgbColor);

    // Adjust saturation
    hslColor.s += adjustment;

    // Clamp saturation to the valid range (0 - 100)
    hslColor.s = Math.max(0, Math.min(100, hslColor.s));

    // Convert back to hex
    return rgbToHex(hslToRgb(hslColor));
}