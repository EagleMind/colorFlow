
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { PaletteArray } from "../types/ColorPair";
import { AspectRatio } from "./aspectRatio"
import Gradient from "./gradient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <figcaption className="flex p-5 justify-center">
                {props.from} – {props.to}

            </figcaption>
        </figure>
    );
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

export { Palette, Palettes }