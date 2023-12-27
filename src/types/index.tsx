
export interface ColorPair {
    from: string;
    to: string;
}

export type MonochromaticColorObject = {
    colors: string[]
};
export type AnalogousColorObject = {
    colors: { from: string; to: string }[];

};
export interface PaletteArray {
    palettes: ColorPair[];
}
export interface GeneratorOption {
    label: string;
    value: number;
}


export interface MonochromaticGenInput {
    count: number;
}

export interface ColorGeneratorSelectorProps {
    onGeneratorSelected: (generator: GeneratorFunction | null) => void;
}
export interface Generator {
    name: string;
    description: string;
    function: Function;
    parameters: string[];
}
export type Color = {
    hue: number;
    saturation: number;
    lightness: number;
};