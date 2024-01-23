// GeneratorOptions.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    setCount,
    setLerp,
    setGradDirection,
    setHue,
    setLightness,
    setSaturation,
    selectBaseColorOne,
    selectBaseColorTwo,
    setGenSingleColor,
} from '../redux/features/colorGeneratorFeature/generatorFilters';
import { NumberSlider } from './countSlider';
import { SwitchComponent } from './utils/switcher';
import ColorPicker from 'react-pick-color';
import { Generator } from '../types';
import { DebouncedPicker } from "./debouncedPicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
type Props = {
    selectedGenerator: Generator | null;
};

export const GeneratorOptions: React.FC<Props> = (props) => {

    const dispatch = useDispatch();
    const [BaseColorOne, setColorOne] = useState<string>("#aabbcc");
    const [BaseColorTwo, setColorTwo] = useState<string>("#aabbcc");
    const [isBaseColorOneClicked, setIsBaseColorOneClicked] = useState(false)
    const [isBaseColorTwoClicked, setIsBaseColorTwoClicked] = useState(false)
    const handleCount = (count: number) => {
        dispatch(setCount(count));
    };

    const handleLerp = (lerp: number) => {
        dispatch(setLerp(lerp));
    };

    const handleGradDirection = (direction: boolean) => {
        dispatch(setGradDirection(direction));
    };

    const handleHue = (angle: number) => {
        dispatch(setHue(angle));
    };

    const handleLightness = (angle: number) => {
        dispatch(setLightness(angle));
    };

    const handleSaturation = (angle: number) => {
        dispatch(setSaturation(angle));
    };

    const handleBaseColorOne = (color: string) => {
        dispatch(selectBaseColorOne(color));
        setColorOne(color)
    };

    const handleBaseColorTwo = (color: string) => {
        dispatch(selectBaseColorTwo(color));
        setColorTwo(color)

    };

    const handleGenSingleColor = (genSingleColor: boolean) => {
        dispatch(setGenSingleColor(genSingleColor));
    };
    const handleCopyBaseColorOne = () => {
        navigator.clipboard.writeText(BaseColorOne)
        setIsBaseColorOneClicked(true)
        setTimeout(() => {
            setIsBaseColorOneClicked(false)
        }, 2000)
    }

    const handleCopyBaseColorTwo = () => {
        navigator.clipboard.writeText(BaseColorOne)
        setIsBaseColorTwoClicked(true)
        setTimeout(() => {
            setIsBaseColorTwoClicked(false)
        }, 2000)
    }

    const naturalOptionSelector = (currentFilter: string) => {
        if (currentFilter && props.selectedGenerator?.parameters.includes(currentFilter)) {
            switch (currentFilter) {
                case 'baseColorOne':
                    return <div className='flex flex-col items-center'>
                        <DebouncedPicker color={BaseColorOne} onChange={(color) => handleBaseColorOne(color)} />
                        <div className='flex items-center bg-gray-200 rounded-lg p-3  mt-3'>
                            {isBaseColorOneClicked ? <FontAwesomeIcon icon={faCheck} fontSize={20} color='grey' className='cursor-pointer'></FontAwesomeIcon> : <FontAwesomeIcon icon={faCopy} fontSize={20} color='grey' className='cursor-pointer' onClick={handleCopyBaseColorOne} />}
                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-3">{BaseColorOne}</p>
                        </div>

                    </div>;
                case 'baseColorTwo':
                    return <div className='flex flex-col items-center'>
                        <DebouncedPicker color={BaseColorTwo} onChange={(color) => handleBaseColorTwo(color)} />
                        <div className='flex items-center bg-gray-200 rounded-lg p-3  mt-3'>
                            {isBaseColorTwoClicked ? <FontAwesomeIcon icon={faCheck} fontSize={20} color='grey' className='cursor-pointer'></FontAwesomeIcon> : <FontAwesomeIcon icon={faCopy} fontSize={20} color='grey' className='cursor-pointer' onClick={handleCopyBaseColorTwo} />}
                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-3">{BaseColorTwo}</p>
                        </div>
                    </div>;
                case 'lerp':
                    return <NumberSlider type="float" name="Gradient" onDataSend={handleLerp} min={0} max={1} />;
                case 'count':
                    return <NumberSlider type='int' name="Variations" onDataSend={handleCount} min={2} max={100} />;
                case 'direction':
                    return <SwitchComponent type="int" onDataSend={handleGradDirection} />;
                case 'random':
                    return <SwitchComponent type="randomColors" onDataSend={handleGenSingleColor} />;
                case 'hue':
                    return <NumberSlider name="Hue" type="int" onDataSend={handleHue} min={2} max={360} />;
                case 'lightness':
                    return <NumberSlider name="Lightness" type="int" onDataSend={handleLightness} min={0} max={360} />;
                case 'saturation':
                    return <NumberSlider name="Saturation" type="int" onDataSend={handleSaturation} min={0} max={360} />;
                default:
                    return null;
            }
        }
        return null;
    };

    return (
        props.selectedGenerator ? (
            <div className="flex flex-col  rounded-md w-full">


                <div className='flex justify-center my-2'>
                    <div className='flex flex-col items-center'>
                        {naturalOptionSelector('baseColorOne')}
                    </div>

                    <div className='flex flex-col items-center'>
                        {naturalOptionSelector('baseColorTwo')}
                    </div>
                </div>
                {props.selectedGenerator.name === "monochromatic" ? null : (
                    <div className='flex flex-col  p-5  rounded-md  mx-5 '>
                        {naturalOptionSelector('count')}
                        {naturalOptionSelector('hue')}
                        {naturalOptionSelector('lightness')}
                        {naturalOptionSelector('saturation')}
                        {naturalOptionSelector('lerp')}
                        {naturalOptionSelector('direction')}
                        {naturalOptionSelector('random')}
                    </div>
                )}
            </div>
        ) : null
    );
};

export default GeneratorOptions;
