import React, { useEffect, useState } from 'react';
import './App.css';
import { ColorsView } from './components/pallet';
import { GeneratorOptions } from './components/GeneratorOptions';
import GeneratorSelector from './utils/colorUtils/ColorGeneratorSelector';
import { Generator } from './types';


const App: React.FC = () => {

  const [data, setData] = useState<any[]>([]);
  const [getLerp, setLerp] = useState<number>(0);
  const [getGradDirection, setGradeDirection] = useState<boolean>(false);
  const [getHue, setAdjustHue] = useState<number>(0);
  const [getLightness, setLightness] = useState<number>(0);
  const [getSaturatiion, setSaturation] = useState<number>(0);
  const [getCount, setCount] = useState<number>(0);
  const [generateSingleColor, setGenerateSingleColor] = useState<boolean>(false);
  const [baseColorOne, setBaseColorOne] = useState<string>('');
  const [baseColorTwo, setBaseColorTwo] = useState<string>('');
  const [selectedGenerator, setSelectedGenerator] = useState<Generator | null>(null);

  const handleSelectGenerator = (generator: Generator) => {
    setSelectedGenerator(generator);
    setData([])
  };

  const handleCount = (data: number = 1) => {
    setCount(data);
  };

  const handleLerp = (data: number) => {
    setLerp(data);
  };
  const handleGradDirection = (data: boolean) => {
    setGradeDirection(data);
  };
  const handleHue = (data: number) => {
    setAdjustHue(data);
  };

  const handleLightness = (data: number) => {
    setLightness(data);
  };

  const handleSaturation = (data: number) => {
    setSaturation(data);
  };

  const handleSelectBaseColorOne = (data: string) => {

    setBaseColorOne(data);
    console.log("color 1", baseColorOne)
  };
  const handleSelectBaseColorTwo = (data: string) => {
    setBaseColorTwo(data);
    console.log("color 2", baseColorTwo)

  };
  const handleGenSingleColor = (data: boolean) => {
    setGenerateSingleColor(data);
  };
  const generateColors = () => {
    const args = {
      count: 4,
      baseColorOne: "#FF0000",
      baseColorTwo: "#00FF00",
      lerp: 0.5,
      hue: getHue,
      lightness: getLightness,
      saturation: getSaturatiion,
      random: generateSingleColor,
      direction: 1
    };
    if (selectedGenerator) {
      // Call the selected generator's function with the appropriate parameters 
      const colors = selectedGenerator.function({
        count: getCount,
        baseColorOne: baseColorOne,
        baseColorTwo: baseColorTwo,
        lerp: getLerp,
        hue: getHue,
        lightness: getLightness,
        saturation: getSaturatiion,
        random: generateSingleColor,
        direction: getGradDirection,
      });
      console.log("final output - colors", {
        baseColorOne: baseColorOne,
        baseColorTwo: baseColorTwo,
      })
      setData(colors);
      console.log("data", data)
    }
  };
  useEffect(() => {
    generateColors()
  }, [getCount, baseColorOne, baseColorTwo, getLerp, getHue, getLightness, getSaturatiion, getGradDirection, generateSingleColor]);
  return (
    <div className='md:min-h-screen h-full  lg:p-10'>
      <div className='flex flex-row w-full'>

        <div className='flex flex-col w-2/3'>

          <div className="rounded-lg border shadow-sm p-4 " data-v0-t="card">

            <div className="flex  p-6">
              <div className='flex-col bg-gray-100 p-5 border rounded-md'>
                <h3 className="text-lg font-semibold">Choose Generator</h3>

                <GeneratorSelector onGeneratorSelect={handleSelectGenerator} />
              </div>


              <GeneratorOptions baseColorOne={handleSelectBaseColorOne} baseColorTwo={handleSelectBaseColorTwo} selectedGenerator={selectedGenerator} handleCount={handleCount} handleLerp={handleLerp} handleHue={handleHue} handleLightness={handleLightness} handleSaturation={handleSaturation} handleGenSingleColor={handleGenSingleColor} handleGradDirection={handleGradDirection}  ></GeneratorOptions>

            </div>
          </div>
          <div className='flex  my-5'>
            <div className='w-full rounded-lg border   bg-white lg:p-10'>
              <h1 className='font-semibold text-3xl px-2 text-gray-500'>Generated Colors</h1>
              {data && <ColorsView colors={data}></ColorsView>}
            </div>

          </div>
        </div>
        <div className='absolute right-0 h-full rounded-lg border shadow-sm p-4 md:w-1/3'>
          <h2 className='text-lg font-semibold'>Live Preview</h2>

        </div>
      </div>

    </div>
  );
};

export default App;