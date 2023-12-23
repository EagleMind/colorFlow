export interface ColorPair {
    from: string;
    to: string;
}

export type MonochromaticColorObject = {
    generatorName: "MonochromaticGenerator";
    colors: string[]
};
export interface PaletteArray {
    palettes: ColorPair[];
}
export interface GeneratorOption {
    label: string;
    value: number;
}
export interface ColorPair {
    from: string;
    to: string;
}

export interface MonochromaticGenInput {
    count: number;
}
export type ColorGeneratorSelectorProps = {
    onTypeChange: (type: string) => void;
    colorGenerators: any;

};
export interface colorGenerator {
    generatorFunction: (baseColor: string, count: number) => MonochromaticColorObject[];
};
