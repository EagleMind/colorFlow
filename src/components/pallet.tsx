// ColorsView.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
    Gradient,
    SingleColorView,
} from "./gradient";
import { BrowserView, MobileView } from "react-device-detect";
import AspectRatio from "./aspectRatio";
import { RootState } from "../redux/store";

export const ColorsView: React.FC = () => {
    const dispatch = useDispatch();
    const colors: string[] = useSelector((state: RootState) => state.colorsGenerated.colors);
    console.log("ColorsView", colors);

    useEffect(() => {
    }, [dispatch]);

    function isArrayOfObjects(colors: any): colors is { from: string; to: string }[] {
        return Array.isArray(colors) && colors.length > 0 && typeof colors[0] === 'object' && 'from' in colors[0] && 'to' in colors[0];
    }

    const isGradient = isArrayOfObjects(colors);
    if (!colors) {
        return null
    }
    return (
        <div className={`flex flex-col lg:flex-row w-full flex-wrap justify-center`}>

            {colors ? colors.map((color: any, index: number) => (
                <figure className=" w-full lg:w-1/5 m-3" key={index}>
                    <BrowserView>
                        <AspectRatio ratio={1 / 1}>
                            {isGradient ? (
                                <Gradient
                                    angle={120}
                                    from={color.from}
                                    to={color.to}
                                />
                            ) : (
                                <SingleColorView color={color} />
                            )}
                        </AspectRatio>
                        <figcaption className="flex justify-center p-3 bg-slate-200 rounded-b-lg">
                            <span className="text-gray-500 text-sm">
                                {isGradient
                                    ? `${color.from}–${color.to}`
                                    : color}
                            </span>
                        </figcaption>
                    </BrowserView>
                    <MobileView>
                        <AspectRatio ratio={1 / 5}>
                            {isGradient ? (
                                <Gradient
                                    angle={120}
                                    from={color.from}
                                    to={color.to}
                                />
                            ) : "color" in colors && (
                                <SingleColorView color={color} />
                            )}
                        </AspectRatio>
                        <figcaption className="flex justify-center">
                            <span className="text-gray-500 text-sm">
                                {isGradient
                                    ? `${color.color}–${color.to}`
                                    : color.color}
                            </span>
                        </figcaption>
                    </MobileView>
                </figure >
            )) : null}
        </div>
    );
};

