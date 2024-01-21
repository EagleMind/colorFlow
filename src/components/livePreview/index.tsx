import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Banner from './previewComponents/banner';
import ContrastChecker from '../contrastChecker';
import ColorPicker from 'react-pick-color';


export default function LivePreview() {
    const livePreviewState = useSelector((state: RootState) => state.livePreview);
    const [textColor, setTextColor] = useState("white")
    const [toggle, setToggle] = useState(false)
    const handleTextColor = (color: string) => {
        setTextColor(color)
    }
    useEffect(() => { }, [textColor])

    return (

        <div className='absolute right-0 h-full rounded-lg border shadow-sm p-4 w-2/6 '>
            <div className='flex '>
                {Object.keys(livePreviewState.assets).length != 0 ?
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <h1 className=' text-[23px]  text-gray-500 my-3'>Live Preview</h1>

                        </div>
                        <Banner assets={livePreviewState.assets} textColor={textColor}></Banner>

                        <div className='flex items-center rounded-lg border shadow-sm my-3'>
                            <ContrastChecker assets={livePreviewState.assets} textColor={textColor}></ContrastChecker>
                            <div className='flex flex-col justify-center'>
                                <h1 className='  text-gray-500 my-3'>Change text color</h1>
                                <ColorPicker onChange={(color) => handleTextColor(color.hex)} hideAlpha={true} />;

                            </div>

                        </div>
                    </div> : <div className='w-full rounded-lg border   bg-white p-5'>
                        <h1 className=' text-[23px] px-2 text-gray-400 '>Select color to preview</h1>
                    </div>}
            </div>


        </div>

    )
}