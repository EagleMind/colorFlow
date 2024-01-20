// colorStateSlice.ts
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

// Export the actions
export const { setColors } = colorStateSlice.actions;

// Export the reducer as a named export
export const colorReducer = colorStateSlice.reducer;
