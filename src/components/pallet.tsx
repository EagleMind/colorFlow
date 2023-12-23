
import { useEffect } from "react";
import { PaletteArray } from "../types";
import { AspectRatio } from "./aspectRatio"
import Gradient from "./gradient";
export interface Pallet {
    from?: number;
    to?: number;
    color?: string
}


const Palette = (props: PaletteArray) => {

    return (
        <div className="grid grid-cols-6 gap-5 fr md:grid-cols-repeat-auto-fill gap-3em ">

            {props.palettes.map((palette: any, index: number) => (
                <Palettes index={index} key={index} {...palette} />
            ))}
        </div>
    );
};

const Palettes = (props: Pallet) => {
    useEffect(() => {


    }, [props])

    return (
        <figure className="shadow-xl">
            <AspectRatio ratio={1 / 1}>
                {props.from && props.to ? (
                    <Gradient angle={135} {...props} />
                ) : (
                    <div style={{ backgroundColor: props.color }}></div>
                )}
            </AspectRatio>
            {props.from && props.to ? (
                <figcaption className="flex p-5 justify-center">
                    {props.from} – {props.to}
                </figcaption>
            ) : (
                <span>{props.color}</span>
            )}
        </figure>
    );
};

const MonoChromaticColorsView = (props: { colors: string[] }) => {
    useEffect(() => {


    }, [props])
    return (
        <div className="grid grid-cols-6 gap-5 fr md:grid-cols-repeat-auto-fill gap-3em ">
            {props.colors.map((hexValue: string, index: number) => (
                <Palettes key={index} color={hexValue} />
            ))}
        </div>
    );
};


export { Palette, Palettes, MonoChromaticColorsView }