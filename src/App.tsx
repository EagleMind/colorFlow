import React, { useEffect, useState } from 'react';
import './App.css';
import { MonoChromaticColorsView } from './components/pallet';
import { colorGenerators } from './utils/MainGenSource';
import { GeneratorOptions } from './components/GeneratorOptions';
import { ColorGeneratorSelector } from './utils/colorUtils/ColorGeneratorSelector';

const App: React.FC = () => {

  const [data, setData] = useState<string[]>([]);
  const [getLerp, setLerp] = useState<number>(0);
  const [getHue, setHue] = useState<number>(0);
  const [getGradDirection, setGradeDirection] = useState<number>(0);
  const [getShiftAngle, setShiftAngle] = useState<number>(0);
  const [getCount, setCount] = useState<number>(0);
  const [Isinterpolated, setIsinterpolated] = useState<boolean>(false);
  const [colorGeneratorType, setColorGeneratorType] = useState(Object.keys(colorGenerators)[0]);
  const [baseColorOne, setBaseColor1] = useState<string>('');
  const [baseColorTwo, setBaseColor2] = useState<string>('');
  const [selectedGenerator, setSelectedGenerator] = useState<number>();
  const handleCount = (data: number = 1) => {
    setCount(data);
  };
  const handleLerp = (data: number) => {
    setLerp(data);
  };
  const handleGradDirection = (data: number) => {
    setGradeDirection(data);
  };

  const handleSelectBaseColor1 = (data: string) => {
    setBaseColor1(data);
  };
  const handleSelectBaseColor2 = (data: string) => {
    setBaseColor2(data);
  };

  useEffect(() => {
    // Fetch the color generator function based on the selected type
    const generatorFunction = colorGenerators[colorGeneratorType as keyof typeof colorGenerators].generatorFunction;
    // Execute the generator function to get colors
    const generatedColors = generatorFunction(baseColorOne, getCount);
    const extractColors: string[] = generatedColors.map((item) => item.colors).flat()
    // Set the generated colors
    setData(extractColors);
    console.log(extractColors)
  }, [selectedGenerator, getCount, getLerp, getShiftAngle, getGradDirection, Isinterpolated, selectedGenerator, colorGeneratorType, baseColorOne, baseColorTwo]);
  return (
    <div className='min-h-screen bg-gray-100 p-10'>
      <ColorGeneratorSelector onTypeChange={(type) => setColorGeneratorType(type)} />

      <GeneratorOptions baseColor1={handleSelectBaseColor1} baseColor2={handleSelectBaseColor2} selectedGenerator={colorGeneratorType} handleCount={handleCount} handleLerp={handleLerp} handleGradDirection={handleGradDirection} ></GeneratorOptions>
      <div className='flex  my-5'>
        <div className='w-full shadow-md bg-white p-10'>
          {data ? <MonoChromaticColorsView colors={data}></MonoChromaticColorsView> : <h1 className='  text-gray-500 text-[24px]'>Select Color Variation to start</h1>}

        </div>


      </div>
    </div>
  );
};

export default App;