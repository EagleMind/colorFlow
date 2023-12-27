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
                        return <ColorPicker onChange={(color) => props.baseColorOne(color.hex)} hideAlpha={true} />;
                    case 'baseColorTwo':
                        return <ColorPicker onChange={(color) => props.baseColorTwo(color.hex)} hideAlpha={true} />;
                    case 'lerp':
                        return <NumberSlider type="float" onDataSend={props.handleLerp} min={0} max={1} />;
                    case 'count':
                        return <NumberSlider type='int' onDataSend={props.handleCount} min={0} max={100} />;
                    case 'direction':
                        return <SwitchComponent type="int" onDataSend={props.handleGradDirection} />
                    case 'random':
                        return <SwitchComponent type="randomColors" onDataSend={props.handleGenSingleColor} />
                    case 'adjustHue':
                        return <NumberSlider type="int" onDataSend={props.handleHue} min={0} max={360} />
                    default:
                        return null;
                }
            }
        }
    };

    return (
        <div className="flex items-center justify-between mx-5 px-5 rounded-md w-full">
            <div className='flex justify-between md:w-1/3 '>


                <div className='flex'>
                    {naturalOptionSelector('baseColorOne')}
                    {naturalOptionSelector('baseColorTwo')}
                </div>

            </div>
            <div className='flex flex-col'>
                <div className='bg-red'>
                    <p>count</p>
                    {naturalOptionSelector('count')}
                    <p>adjustHue</p>
                    {naturalOptionSelector('adjustHue')}
                    <p>lerp</p>
                    {naturalOptionSelector('lerp')}




                </div>

                {naturalOptionSelector('direction')}
                <div className='flex flex-col'>

                    {naturalOptionSelector('random')}

                </div>
            </div>
        </div>


    );
};
