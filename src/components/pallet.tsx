import { useEffect } from "react";
import { AnalogousColorObject, MonochromaticColorObject } from "../types";
import { GradientAnalogous, GradientMonochromatic } from "./gradient";
import { BrowserView, MobileView } from 'react-device-detect';
import AspectRatio from "./aspectRatio";

export interface Pallet {
    from: string;
    to: string;
    index: number

}
export interface MonochromaticPallet {
    color: string;
    index: number
}

const MonoChromaticColorsView = (props: MonochromaticColorObject) => {
    return (
        <div className="flex flex-col lg:flex-row w-10/12 flex-wrap justify-start">
            {props.colors.map((hexValue: string, index: number) => (
                <MonochromaticColorsPallet index={index} color={hexValue} />
            ))}
        </div>
    );
};
export const AnalogousColorsView = (props: AnalogousColorObject) => {

    return (
        <div className="flex flex-col lg:flex-row w-full flex-wrap justify-center">
            {props.colors.map((colors: any, index: number) => (
                <AnalogousColorsPallet index={index} from={colors.from} to={colors.to} />
            ))}
        </div>
    );
};
const AnalogousColorsPallet = (props: Pallet) => {

    return (
        <figure className=" w-full lg:w-1/5 m-3" key={props.index}>
            <BrowserView>
                <AspectRatio ratio={1 / 1}>
                    <GradientAnalogous angle={120} {...props} />
                </AspectRatio>
                <figcaption className="flex justify-center p-3 bg-slate-200 rounded-b-lg">
                    <span className="text-gray-500 text-sm">
                        {props.from + "–" + props.to}
                    </span>
                </figcaption>
            </BrowserView>

            <MobileView>
                <AspectRatio ratio={5 / 1}>
                    <GradientAnalogous angle={120} {...props} />
                </AspectRatio>
                <figcaption className="flex justify-center">
                    <span className="text-gray-500 text-sm">
                        {props.from + "–" + props.to}
                    </span>
                </figcaption>
            </MobileView>
        </figure>
    );
};
const MonochromaticColorsPallet = (props: MonochromaticPallet) => {
    console.log("Paletes", props)
    useEffect(() => {

    }, [props])
    return (
        <figure className=" w-full lg:w-1/6">
            <BrowserView>
                <AspectRatio ratio={1 / 1}>
                    <GradientMonochromatic color={props.color} index={props.index} />
                </AspectRatio>
            </BrowserView>

            <MobileView>
                <AspectRatio ratio={5 / 1}>
                    <GradientMonochromatic color={props.color} index={props.index} />
                </AspectRatio>
                <figcaption className="flex justify-center">
                    <span className="text-gray-500 text-sm">
                        {props.color}
                    </span>
                </figcaption>
            </MobileView>
        </figure>
    );
};

export { MonoChromaticColorsView };
