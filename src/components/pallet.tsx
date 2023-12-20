
import { PaletteArray } from "../types/ColorPair";
import { AspectRatio } from "./aspectRatio"
import Gradient from "./gradient";
export interface Pallet {
    from: number;
    to: number;
    index: number
}
const Palettes = (props: Pallet) => {
    return (
        <figure className="shadow-xl ">
            <AspectRatio ratio={1 / 1} >
                <Gradient angle={135} {...props} />
            </AspectRatio>
            <figcaption className="palette__caption">
                {props.index} {props.from} – {props.to}
            </figcaption>
        </figure>
    );
}



const Palette = (props: PaletteArray) => {
    console.log(props.palettes)

    return (
        <div className="palettes ">
            {props.palettes.map((palette: any, index: number) => (
                <Palettes index={index} key={index} {...palette} />
            ))}
        </div>
    );
};

export { Palette, Palettes }