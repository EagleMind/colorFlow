import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getTextColor } from "./utils/lightColorDetector";

export interface Gradient {
    from: string
    to: string
    angle: number

}

export interface GradientMonochromatic {
    color: string
    index: number
}


export function GradientAnalogous({ from, to, angle }: Gradient) {
    useEffect(() => {

    }, [from, to])
    const [isClicked, setIsClicked] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${from?.toString() + "-" + to?.toString()}`);
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };


    return (
        <div
            className="rounded-t-lg cursor-pointer relative border gradient-box"
            style={{
                backgroundImage: `linear-gradient(${angle}deg, ${from?.toString()}, ${to?.toString()})`,
                border: isClicked ? '2px solid #4299e1' : 'none',

            }}

            onClick={handleCopy}
        >
            <div className="absolute  w-full h-full  transition-opacity duration-300 opacity-0 hover:opacity-100 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <FontAwesomeIcon
                    icon={faCopy}
                    fontSize={30}
                    color="white"
                />
                <span className="mx-3" style={{ color: getTextColor(from) }}>{from?.toString()}, {to?.toString()}</span> </div>
        </div>
    );
}
export function GradientMonochromatic({ index, color }: GradientMonochromatic) {

    const [isClicked, setIsClicked] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };


    return (
        <div
            key={index}
            className=" cursor-pointer relative border"
            style={{
                backgroundColor: color,
                border: isClicked ? '2px solid #4299e1' : 'none',

            }}

            onClick={handleCopy}
        >
            <div className="absolute  w-full h-full  transition-opacity duration-300 opacity-0 hover:opacity-100 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <FontAwesomeIcon
                    icon={faCopy}
                    fontSize={30}
                    color="white"
                />
                <span className="mx-3" style={{ color: getTextColor(color) }}>{color}</span> </div>
        </div>
    );
}
