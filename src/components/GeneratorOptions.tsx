import React, { useEffect } from 'react';
import { Generator } from '../types';
import { NumberSlider } from './countSlider';
import { SwitchComponent } from './utils/switcher';
import ColorPicker from 'react-pick-color';
import generators from '../utils/generatorConfig';

type Props = {
    handleCount: (count: number) => void;
    handleLerp: (lerp: number) => void;
    handleHue: (angle: number) => void
    handleGradDirection: (direction: boolean) => void;
    selectedGenerator: Generator | null;
    baseColorOne: (baseColorOne: string) => void;
    baseColorTwo: (baseColorTwo: string) => void;
    handleGenSingleColor: (genSingleColor: boolean) => void;
};

export const GeneratorOptions: React.FC<Props> = (props) => {
    const naturalOptionSelector = (currentFilter: string) => {
        if (currentFilter) {
            if (props.selectedGenerator?.parameters.includes(currentFilter)) {
                switch (currentFilter) {
                    case 'baseColorOne':
                        return <ColorPicker className='mr-2' onChange={(color) => props.baseColorOne(color.hex)} hideAlpha={true} />;
                    case 'baseColorTwo':
                        return <ColorPicker onChange={(color) => props.baseColorTwo(color.hex)} hideAlpha={true} />;
                    case 'lerp':
                        return <NumberSlider type="float" name="Linear interpolation" onDataSend={props.handleLerp} min={0} max={1} />;
                    case 'count':
                        return <NumberSlider type='int' name="Variations amount" onDataSend={props.handleCount} min={0} max={100} />;
                    case 'direction':
                        return <SwitchComponent type="int" onDataSend={props.handleGradDirection} />
                    case 'random':
                        return <SwitchComponent type="randomColors" onDataSend={props.handleGenSingleColor} />
                    case 'adjustHue':
                        return <NumberSlider name="Hue" type="int" onDataSend={props.handleHue} min={0} max={360} />
                    default:
                        return null;
                }
            }
        }
    };

    return (
        props.selectedGenerator ? <div className="flex  justify-start mx-5 px-5 rounded-md w-full">


            <div className='flex flex-col bg-gray-100 p-5 border rounded-md'>
                <h3 className="text-lg font-semibold">Choose Colors</h3>
                <div className='flex'>
                    {naturalOptionSelector('baseColorOne')}
                    {naturalOptionSelector('baseColorTwo')}
                </div>

            </div>
            {props.selectedGenerator.name === "monochromatic" ? null : <div className='flex flex-col bg-gray-100 p-5 border rounded-md md:w-1/3 mx-5'>
                <h3 className="text-lg font-semibold self-start">Choose Options</h3>
                {naturalOptionSelector('count')}
                {naturalOptionSelector('adjustHue')}
                {naturalOptionSelector('lerp')}
                {naturalOptionSelector('direction')}
                {naturalOptionSelector('random')}
            </div>}

        </div> : null


    );
};
