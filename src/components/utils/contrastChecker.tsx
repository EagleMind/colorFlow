export function hexToRgb(hex: string): number[] {
    // Remove the hash character (#) if it exists
    hex = hex.replace(/^#/, '');

    // Parse the hex values for red, green, and blue components
    const bigint = parseInt(hex, 16);
    const R = (bigint >> 16) & 255;
    const G = (bigint >> 8) & 255;
    const B = bigint & 255;

    return [R, G, B];
}
export function calculateAverageColor(color1: number[], color2: number[]): number[] {
    const avgColor = [
        Math.round((color1[0] + color2[0]) / 2),
        Math.round((color1[1] + color2[1]) / 2),
        Math.round((color1[2] + color2[2]) / 2),
    ];

    return avgColor;
}

function getRelativeLuminance(color: number[]): number {
    const gammaCorrect = (value: number): number => {
        value = value / 255;
        return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };

    const sRGB = {
        R: gammaCorrect(color[0]),
        G: gammaCorrect(color[1]),
        B: gammaCorrect(color[2]),
    };

    return 0.2126 * sRGB.R + 0.7152 * sRGB.G + 0.0722 * sRGB.B;
}

export function getContrastRatio(color1: number[], color2: number[]): number {
    const luminance1 = getRelativeLuminance(color1);
    const luminance2 = getRelativeLuminance(color2);

    const contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return contrastRatio // Limiting to 2 decimal places
}

