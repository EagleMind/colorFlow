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

export const { setLivePreviewState, setAssets } = livePreviewSlice.actions;

export const livePreviewReducer = livePreviewSlice.reducer;
