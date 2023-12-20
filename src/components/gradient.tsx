import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export interface Gradient {
    angle: number;
    from: number;
    to: number;
}

export default function Gradient({ angle = 0, from, to }: Gradient) {
    const [isClicked, setIsClicked] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${from.toString()} - ${to.toString()}`);
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };

    return (
        <div
            className="rounded-t-lg cursor-pointer relative"
            style={{
                backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
                border: isClicked ? '2px solid #4299e1' : 'none', // Add a border on click
            }}
            onClick={handleCopy}
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <FontAwesomeIcon
                    icon={faCopy}
                    fontSize={30}
                    color="white"
                    className={`p-3 ${isClicked ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                />
            </div>
        </div>
    );
}
