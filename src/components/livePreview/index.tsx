import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Banner from './previewComponents/banner';


export default function LivePreview() {
    const livePreviewState = useSelector((state: RootState) => state.livePreview);
    console.log(livePreviewState.assets)
    return (

        <div className='absolute right-0 h-full rounded-lg border shadow-sm p-4 w-2/6'>
            <div className='flex '>

                {Object.keys(livePreviewState.assets).length != 0 ?
                    <div className='flex flex-col'>
                        <h1 className=' text-[23px]  text-gray-500 my-3'>Live Preview</h1>
                        <Banner assets={livePreviewState.assets}></Banner>
                    </div> : <div className='w-full rounded-lg border   bg-white p-5'>
                        <h1 className=' text-[23px] px-2 text-gray-400 '>Select color to preview</h1>
                    </div>}
            </div>


        </div>

    )
}