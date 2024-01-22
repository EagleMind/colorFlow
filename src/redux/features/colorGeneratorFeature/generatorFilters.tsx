// colorStateSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Generator, GeneratorOption } from '../../../types';
export type filtersReducerState = {
    count: number;
    lerp: number;
    gradDirection: boolean;
    hue: number;
    lightness: number;
    saturation: number;
    baseColorOne: string;
    baseColorTwo: string;
    genSingleColor: boolean;
};


const initialState: filtersReducerState = {
    count: 2,
    lerp: 0,
    gradDirection: false,
    hue: 0,
    lightness: 0,
    saturation: 0,
    baseColorOne: '',
    baseColorTwo: '',
    genSingleColor: false,
};

export const filtersStateSlice = createSlice({
    name: 'filtersReducer',
    initialState,
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setLerp: (state, action: PayloadAction<number>) => {
            state.lerp = action.payload;
        },
        setGradDirection: (state, action: PayloadAction<boolean>) => {
            state.gradDirection = action.payload;
        },
        setHue: (state, action: PayloadAction<number>) => {
            state.hue = action.payload;
        },
        setLightness: (state, action: PayloadAction<number>) => {
            state.lightness = action.payload;
        },
        setSaturation: (state, action: PayloadAction<number>) => {
            state.saturation = action.payload;
        },
        selectBaseColorOne: (state, action: PayloadAction<string>) => {
            state.baseColorOne = action.payload;
        },
        selectBaseColorTwo: (state, action: PayloadAction<string>) => {
            state.baseColorTwo = action.payload;
        },
        setGenSingleColor: (state, action: PayloadAction<boolean>) => {
            state.genSingleColor = action.payload;
        },

    },
});

// Export the actions
export const {
    setCount,
    setLerp,
    setGradDirection,
    setHue,
    setLightness,
    setSaturation,
    selectBaseColorOne,
    selectBaseColorTwo,
    setGenSingleColor,
} = filtersStateSlice.actions;

// Export the reducer as a named export
export const filtersReducer = filtersStateSlice.reducer;
