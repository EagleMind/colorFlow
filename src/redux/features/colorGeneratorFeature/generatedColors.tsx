import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type generatedColors = {
    colors: string[];
};

const initialState: generatedColors = {
    colors: [],
};

export const colorStateSlice = createSlice({
    name: 'colorReducer',
    initialState,
    reducers: {
        setColors: (state, action: PayloadAction<string[]>) => {
            state.colors = action.payload;
        },
    },
});

export const { setColors } = colorStateSlice.actions;

export const colorReducer = colorStateSlice.reducer;
