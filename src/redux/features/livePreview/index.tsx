// colorStateSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type livePreview = {
    livePreviewState: boolean;
    assets: Assets

};

type Assets = {
    from?: string
    to?: string
    angle?: Number
}
const initialState: livePreview = {
    livePreviewState: false,
    assets: {},
};

export const livePreviewSlice = createSlice({
    name: 'livePreview',
    initialState,
    reducers: {
        setLivePreviewState: (state, action: PayloadAction<boolean>) => {
            state.livePreviewState = action.payload;
        },
        setAssets: (state, action: PayloadAction<Assets>) => {
            state.assets = {
                ...state.assets,
                ...action.payload,
            };
        },
    },
});

// Export the actions
export const { setLivePreviewState, setAssets } = livePreviewSlice.actions;

// Export the reducer as a named export
export const livePreviewReducer = livePreviewSlice.reducer;
