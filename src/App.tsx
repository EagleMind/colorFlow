import React, { useEffect, useState } from 'react';
import './App.css';
import { Palette } from './components/pallet';
import { generateRandomColorPairs } from './utils/masterOperator';
import PureColorsDropdown from './components/pureColorPicker';
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
  const [getCount, setCount] = useState<number>(1);

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
    console.log(randomColorPairs)
    setData(randomColorPairs);
  }, [getLerp, getDegree, getCount, colorBase, colorTarget,]);
  // const handleRemoveDefaultColor = () => {
  //   setReceivedData(null);
  // };


  return (
    <div className="grid ">
      {/* <button
          className={`bg-[${receivedData || "#ffffff"}] border-2 border-sky-400 text-${receivedData ? "white" : "red-400"} p-2 px-4 rounded-md hover:bg-[${receivedData || "#ffffff"}] focus:outline-none focus:shadow-outline-blue w-52`}
          onClick={handleRemoveDefaultColor}
        >
          <p className={`text-[${receivedData?.toString || "#ffffff"}]`}>{receivedData ? 'Reset color' : 'No color selected'}</p>
        </button> */}
      <div className=' my-5 p-5  rounded-md shadow-md'>
        <div className="grid grid-cols-8  ">
          <div className=' col-span-2'>
            <NumberSlider onDataSend={handleCount} min={1} max={100}></NumberSlider>
            <NumberSlider onDataSend={handleLerp} min={0} max={1}></NumberSlider>
            <NumberSlider onDataSend={handleDegree} min={0} max={360}></NumberSlider>

          </div>
          {/* <div className=' col-span-1'>
            <PureColorsDropdown onDataSend={handleChildData}></PureColorsDropdown>
          </div> */}
          <ColorPicker color={colorBase} onChange={color => setColorBase(color.hex)} />;
          <ColorPicker color={colorTarget} onChange={color => setColorTarget(color.hex)} />;

        </div>

      </div>



      <Palette palettes={data}></Palette>
    </div>
  );
};

export default App;
