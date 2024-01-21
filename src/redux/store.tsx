// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { colorReducer } from './features/colorGeneratorFeature/generatedColors'; // Correct the path as necessary
import { filtersReducer } from './features/colorGeneratorFeature/generatorFilters'; // Correct the path as necessary
import { livePreviewReducer } from './features/livePreview';

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        colorsGenerated: colorReducer,
        livePreview: livePreviewReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
