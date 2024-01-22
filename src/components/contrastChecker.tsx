import React, { useEffect, useState } from 'react';
import { calculateAverageColor, getContrastRatio, hexToRgb } from './utils/contrastChecker';
import { livePreviewProps } from './livePreview/previewComponents/banner';

type Props = {
    assets: any,
    textColor: string
}


type ContrastColors = {
    Enhanced: string;
    Good: string;
    Fail: string;
};

const contrastColors: ContrastColors = {
    Enhanced: 'green',
    Good: 'green',
    Fail: 'red',
};
export default function ContrastChecker({ assets, textColor }: Props) {
    const [contrastScore, setContrastScore] = useState<keyof ContrastColors | undefined>(); // specify the type here

    const gradientColor1: number[] = hexToRgb(assets.from);
    const gradientColor2: number[] = hexToRgb(assets.to);
    const textColorProp: number[] = hexToRgb(textColor);

    const averageGradientColor: number[] = calculateAverageColor(gradientColor1, gradientColor2);

    const contrastRatio: number = getContrastRatio(averageGradientColor, textColorProp);

    function getContrastScore(contrastRatio: number): string {
        if (contrastRatio >= 7) {
            return "Enhanced";
        } else if (contrastRatio >= 4.5) {
            return "Good";
        } else {
            return "Fail";
        }
    }

    useEffect(() => {
        const score = getContrastScore(contrastRatio)
        setContrastScore(score as keyof ContrastColors | undefined);
    }, [textColor, contrastRatio])

    return (
        <div className="w-full max-w-sm p-10 grid gap-10 m-3">
            <div className="flex flex-col items-center space-y-0 gap-4 p-0">
                <div className="grid gap-1 text-center">
                    <h3 className="whitespace-nowrap tracking-tight text-lg">RealTime Contrast Checker</h3>
                    <p className="text-muted-foreground text-xs">Reviewing color combination: {assets.from} and {assets.to} with {textColor}</p>
                </div>
                <div className={` px-3 rounded-full flex items-center py-2 dark:bg-gray-800`} style={{ backgroundColor: contrastScore ? contrastColors[contrastScore] : '' }}>
                    <span className="text-sm text-white  dark:text-gray-400">{contrastScore}</span>
                </div>
            </div>
            <div className="p-0 grid gap-4">
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex gap-2 items-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            This color combination has a good contrast ratio. It passes the WCAG 2.0 standards for large text but
                            fails for normal text.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
