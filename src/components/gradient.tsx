import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getTextColor } from "./utils/lightColorDetector";

export interface GradientProps {
    from: string;
    to: string;
    angle: number;
}

export interface SingleColorProps {
    color: string;

}

export const Gradient = ({ from, to, angle }: GradientProps) => {
    useEffect(() => {
    }, [from, to]);

    const [isClicked, setIsClicked] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`background: "linear - gradient(${angle}deg, ${from}, ${to})`);
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };

    return (
        <div
            className="rounded-t-lg cursor-pointer relative border gradient-box "
            style={{
                backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
                border: isClicked ? "2px solid #4299e1" : "none",
            }}
            onClick={handleCopy}
        >
            <div className="absolute w-full h-full transition-opacity duration-300  opacity-0 hover:opacity-100 hover:border-white hover:border-2 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="p-3 rounded-lg items-center  justify-center hover:border-white hover:border-2">
                    <FontAwesomeIcon icon={faCopy} fontSize={24} color="white" />
                    <span className="mx-3 " style={{ color: getTextColor(from.toString()) }}>
                        CSS
                    </span>{" "}
                </div>
            </div>
        </div>
    );
};

export const SingleColorView = ({ color }: SingleColorProps) => {
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
            className="cursor-pointer relative border"
            style={{
                backgroundColor: color,
                border: isClicked ? "2px solid #4299e1" : "none",
            }}
            onClick={handleCopy}
        >
            <div className="absolute w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <FontAwesomeIcon icon={faCopy} fontSize={30} color="white" />
                <span className="mx-3" style={{ color: getTextColor(color.toString()) }}>
                    {color}
                </span>{" "}
            </div>
        </div>
    );
};
