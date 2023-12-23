
import { NumberSlider } from './countSlider'
import { SwitchComponent } from './utils/switcher'
import ColorPicker from 'react-pick-color'

type Props = {
    handleCount: (count: number) => void
    handleLerp: (lerp: number) => void
    handleGradDirection: (direction: number) => void
    selectedGenerator: string
    baseColor1: (baseColor: string) => void
    baseColor2: (baseColor: string) => void
}

export const GeneratorOptions = (props: Props) => {

    return (
        <div className="flex-col bg-white items-center justify-between shadow-md my-5 p-5 rounded-md w-full">
            <div className='flex flex-col w-1/6 space-y-4'>
                <div className='m-2 flex flex-row'>
                    <NumberSlider onDataSend={props.handleCount} min={0} max={100} />
                    <p className='font-medium text-gray-500 mx-2'>Variations</p>

                </div>
                {props.selectedGenerator == "monochromatic" ? null : <div className='m-2'>
                    <p className='font-medium text-gray-500' aria-label='(also known as Lerp) is a method to find unknown values between two known points. The unknown values are approximated through Linear interpolation by connecting these two known points with a straight line.'>Linear interpolation</p>
                    <NumberSlider onDataSend={props.handleLerp} min={0} max={100} />
                </div>}

                {props.selectedGenerator == "monochromatic" ? null :
                    <div className='m-2'>
                        <p className='font-medium text-gray-500'>Gradient orientation</p>
                        <SwitchComponent onDataSend={props.handleGradDirection} />
                    </div>}
            </div>

            <div className="flex flex-col  space-y-4">

                <div className='flex space-x-4'>
                    <ColorPicker className="mx-3" onChange={color => props.baseColor1(color.hex)} />
                    {props.selectedGenerator == "monochromatic" ? null : <ColorPicker onChange={(color) => props.baseColor2(color.hex)} />}

                </div>
            </div>
        </div>
    )
}
