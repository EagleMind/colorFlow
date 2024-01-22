import React, { useEffect, useState } from 'react';
import './App.css';
import { ColorsView } from './components/pallet';
import { GeneratorOptions } from './components/GeneratorOptions';
import GeneratorSelector from './utils/colorUtils/ColorGeneratorSelector';
import { Generator } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { generatedColors } from './redux/features/colorGeneratorFeature/generatedColors';
import {
  setColors
} from './redux/features/colorGeneratorFeature/generatedColors';
import { filtersReducerState } from './redux/features/colorGeneratorFeature/generatorFilters';
import LivePreview from './components/livePreview';
import generators from './utils/generatorConfig';
import { SlideOver } from './components/slideComponent';
export type StateProps = {
  filters: filtersReducerState
  generatedColors: generatedColors
}
const App: React.FC = () => {
  const dispatch = useDispatch();
  const filtersState: StateProps = useSelector((state: StateProps) => state);
  const [selectedGenerator, setSelectedGenerator] = useState<Generator | null>(generators[0]);


  const handleSelectGenerator = (generator: Generator) => {
    setSelectedGenerator(generator);

    dispatch(setColors([]))
  };



  const generateColors = (generator: Generator | null, options: filtersReducerState): any[] => {
    if (generator) {
      // Call the selected generator's function with the appropriate parameters
      const colors = generator.function({
        count: options.count,
        baseColorOne: options.baseColorOne,
        baseColorTwo: options.baseColorTwo,
        lerp: options.lerp,
        hue: options.hue,
        lightness: options.lightness,
        saturation: options.saturation,
        random: options.genSingleColor,
        direction: options.gradDirection,
      });

      return colors;
    }

    return [];
  };
  useEffect(() => {
    const colors = generateColors(selectedGenerator, filtersState.filters)
    dispatch(setColors(colors))
  }, [dispatch, selectedGenerator, filtersState.filters]);
  return (
    <div className='md:min-h-screen h-full bg-gray-100 '>
      <div className='flex  w-full  rounded-lg  '>

        <SlideOver >
          <GeneratorSelector onGeneratorSelect={handleSelectGenerator} />
          <GeneratorOptions selectedGenerator={selectedGenerator}></GeneratorOptions>
        </SlideOver>
        <ColorsView ></ColorsView>
        <LivePreview></LivePreview>

      </div>
    </div>
  );
};

export default App;