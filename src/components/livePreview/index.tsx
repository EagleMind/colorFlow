import { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Banner from './previewComponents/banner';
import ContrastChecker from '../contrastChecker';
import ColorPicker from 'react-pick-color';
import { DebouncedPicker } from '../debouncedPicker';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';


export default function LivePreview() {
    const livePreviewState = useSelector((state: RootState) => state.livePreview);
    const [textColor, setTextColor] = useState("white")
    const [copyHexColor, setCopy] = useState<boolean>(false)
    const handleTextColor = (color: string) => {
        setTextColor(color)
    }
    const copyHex = () => {
        navigator.clipboard.writeText(textColor)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    return (

        <div className='flex  right-0 h-fit rounded-lg bg-white shadow-md p-4 m-3 w-2/5 '>

            {Object.keys(livePreviewState.assets).length != 0 ?
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <h1 className=' text-[23px]  text-gray-500 my-3'>Live Preview</h1>
                    </div>
                    <Banner assets={livePreviewState.assets} textColor={textColor}></Banner>
                    <div className="flex flex-col gap-4 ">
                        <h2 className="text-[23px]  text-gray-500 my-3">Color Swatch</h2>
                        <ul className="grid grid-cols-3 auto-cols-max  bg-gray-100 p-3 rounded-lg">
                            <li className="group relative flex flex-col items-center">
                                <div className="h-12 w-12 rounded-lg group-hover:opacity-75 transition-opacity duration-200" style={{ backgroundColor: livePreviewState.assets.from }}></div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{livePreviewState.assets.from}</p>
                            </li>
                            <li className="group relative flex flex-col items-center">
                                <div className="h-12 w-12  rounded-lg group-hover:opacity-75 transition-opacity duration-200" style={{ backgroundColor: livePreviewState.assets.to }}></div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{livePreviewState.assets.to}</p>
                            </li>
                            <li className="group relative  flex flex-col items-center">
                                <div className="h-12 w-12  rounded-lg group-hover:opacity-75 transition-opacity duration-200" style={{ backgroundColor: textColor }}></div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{textColor}</p>
                            </li>
                            <li className="group relative"></li>
                        </ul>
                    </div>
                    <div className='flex items-center rounded-lg shadow-sm my-3'>
                        <ContrastChecker assets={livePreviewState.assets} textColor={textColor}></ContrastChecker>
                        <div className='flex flex-col justify-center'>
                            <h1 className='  text-gray-500 my-3'>Text color</h1>
                            <DebouncedPicker color={textColor} onChange={(color) => handleTextColor(color)} />
                            <div className='flex items-center justify-center bg-gray-200 rounded-lg p-3  mt-3'>
                                {copyHexColor ? <FontAwesomeIcon icon={faCheck} fontSize={20} color='grey' className='cursor-pointer'></FontAwesomeIcon> : <FontAwesomeIcon icon={faCopy} fontSize={20} color='grey' className='cursor-pointer' onClick={copyHex} />}
                                <p className="text-sm text-gray-500 dark:text-gray-400 ml-3">{textColor}</p>
                            </div>

                        </div>

                    </div>
                </div> : <div className='w-full rounded-lg   bg-white p-5'>
                    <h1 className=' text-[23px] px-2 text-gray-400 '>Select color to preview</h1>
                </div>}


        </div>

    )
}