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

    useEffect(() => {
    }, [dispatch]);

    function isArrayOfObjects(colors: any): colors is { from: string; to: string }[] {
        return Array.isArray(colors) && colors.length > 0 && typeof colors[0] === 'object' && 'from' in colors[0] && 'to' in colors[0];
    }

    const isGradient = isArrayOfObjects(colors);

    return (
        <div className='flex  right-0 h-screen bg-white shadow-md rounded-lg w-2/3 flex-wrap m-3 overflow-y-auto'>


            {colors ? colors.map((color: any, index: number) => (
                <figure className=" w-full lg:w-1/5 m-3  rounded-b-lg " key={index}>
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
                        <figcaption className="flex justify-center p-3 bg-white shadow-lg rounded-b-lg">
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
            )) : <div className='w-full rounded-lg   bg-white p-5'>
                <h1 className=' text-[23px] px-2 text-gray-400 '>No options selected</h1>
            </div>}
        </div>
    );
};

