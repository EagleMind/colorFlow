import React, { useEffect, useState } from 'react';
import './App.css';
import { Palette } from './components/pallet';
import { generateRandomColorPairs } from './utils/masterOperator';
import { ColorPair } from './types/ColorPair';
import { AnalogousDirection, generateAnalogousPairs } from './utils/AnalogousColors';
import { NumberSlider } from './components/countSlider';
import { generatePastelPairs } from './utils/PastelColors';
import { generateMonochromaticPairs } from './utils/MonochromaticColors';
import ColorPicker from 'react-pick-color';
interface AppProps {
  onDataReceived?: (data: string) => void;
}

const App: React.FC<AppProps> = () => {
  const [colorBase, setColorBase] = useState<string>('');
  const [colorTarget, setColorTarget] = useState<string>('');
  const [data, setData] = useState<ColorPair[]>([]);
  const [getLerp, setLerp] = useState<number>(0);
  const [getDegree, setDegree] = useState<number>(0);
  const [getCount, setCount] = useState<number>(0);

  const handleCount = (data: number = 1) => {
    setCount(data);
  };
  const handleLerp = (data: number) => {
    setLerp(data);
  };
  const handleDegree = (data: number) => {
    setDegree(data);
  };

  useEffect(() => {
    const randomColorPairs = generateAnalogousPairs(!getCount ? 1 : getCount, colorBase, colorTarget, getLerp, 30);
    setData(randomColorPairs);
  }, [getLerp, getDegree, getCount, colorBase, colorTarget,]);



  return (
    <div className='min-h-screen bg-gray-100 p-10'>

      <div className="flex bg-white items-center justify-between shadow-md my-5 p-5 rounded-md w-full">
        <div className='flex flex-col w-1/2 space-y-4'>
          <div className='m-2'>
            <p className='font-medium text-gray-500'>Popular</p>
            <NumberSlider onDataSend={handleCount} min={0} max={100} />
          </div>
          <div className='m-2'>
            <p className='font-medium text-gray-500'>Gradient Smoothness</p>
            <NumberSlider onDataSend={handleLerp} min={0} max={1} />
          </div>
          <div className='m-2'>
            <p className='font-medium text-gray-500'>Orientation Degree</p>
            <NumberSlider onDataSend={handleDegree} min={0} max={360} />
          </div>
        </div>

        <div className="flex flex-col  space-y-4">
          <h2 className=" text-gray-500 text-[18px] mx-5">Choose your color combination</h2>
          <div className='flex space-x-4'>
            <ColorPicker className="mx-3" color={colorBase} onChange={color => setColorBase(color.hex)} />
            <ColorPicker color={colorTarget} onChange={color => setColorTarget(color.hex)} />
          </div>
        </div>
      </div>

      <div className='flex  my-5'>
        <div className='w-full shadow-md bg-white p-10'>
          {getCount ? <Palette palettes={data}></Palette> : <h1 className='  text-gray-500 text-[24px]'>Select Color Variation to start</h1>}

        </div>


      </div>
    </div>
  );
};

export default App;
