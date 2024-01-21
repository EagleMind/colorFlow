// GeneratorOptions.tsx
import React from 'react';
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

type Props = {
    selectedGenerator: Generator | null;
};

export const GeneratorOptions: React.FC<Props> = (props) => {

    const dispatch = useDispatch();


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
    };

    const handleBaseColorTwo = (color: string) => {
        dispatch(selectBaseColorTwo(color));
    };

    const handleGenSingleColor = (genSingleColor: boolean) => {
        dispatch(setGenSingleColor(genSingleColor));
    };

    const naturalOptionSelector = (currentFilter: string) => {
        if (currentFilter && props.selectedGenerator?.parameters.includes(currentFilter)) {
            switch (currentFilter) {
                case 'baseColorOne':
                    return <ColorPicker className='mr-2' onChange={(color) => handleBaseColorOne(color.hex)} hideAlpha={true} />;
                case 'baseColorTwo':
                    return <ColorPicker onChange={(color) => handleBaseColorTwo(color.hex)} hideAlpha={true} />;
                case 'lerp':
                    return <NumberSlider type="float" name="Linear interpolation" onDataSend={handleLerp} min={0} max={1} />;
                case 'count':
                    return <NumberSlider type='int' name="Variations amount" onDataSend={handleCount} min={0} max={100} />;
                case 'direction':
                    return <SwitchComponent type="int" onDataSend={handleGradDirection} />;
                case 'random':
                    return <SwitchComponent type="randomColors" onDataSend={handleGenSingleColor} />;
                case 'hue':
                    return <NumberSlider name="Hue" type="int" onDataSend={handleHue} min={0} max={360} />;
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
            <div className="flex justify-start mx-5 px-5 rounded-md w-full">
                {props.selectedGenerator?.name === "pastel" ? null : <div className='flex flex-col bg-gray-100 p-5 border rounded-md'>
                    <h3 className="text-lg font-semibold ">Choose Colors</h3>
                    <div className='flex my-2'>
                        {naturalOptionSelector('baseColorOne')}
                        {naturalOptionSelector('baseColorTwo')}
                    </div>
                </div>}
                {props.selectedGenerator.name === "monochromatic" ? null : (
                    <div className='flex flex-col bg-gray-100 p-5 border rounded-md w-full mx-5'>
                        <h3 className="text-lg font-semibold self-start ">Choose Options</h3>
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
