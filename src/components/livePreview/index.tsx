import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Banner from './previewComponents/banner';

type Props = {}

export default function LivePreview({ }: Props) {
    const livePreviewState = useSelector((state: RootState) => state.livePreview);

    return (

        livePreviewState.livePreviewState ? <div className='absolute right-0 h-full rounded-lg border shadow-sm p-4 w-2/6'>
            <h2 className='text-lg font-semibold'>Live Preview</h2>
            <div className='flex flex-col'>
                <Banner assets={livePreviewState.assets}></Banner>
            </div>
        </div> : null

    )
}