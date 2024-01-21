import React, { useEffect } from 'react'

export type livePreviewProps = {
    assets?: any
    textColor?: string
}
export default function Banner({ assets, textColor }: livePreviewProps) {
    useEffect(() => {
        console.log("t", assets.from)
    }, [textColor])

    return (
        <div className='flex flex-col w-full h-64 justify-center p-5 rounded-lg' style={{
            backgroundImage: `linear-gradient(${assets.angle}deg, ${assets.from}, ${assets.to})`,
        }}>
            <div className='flex my-3'>
                <img src='https://cdn3d.iconscout.com/3d/premium/thumb/banana-6430787-5299259.png' width={100} />
                <div className='flex flex-col'>
                    <p className={`  text-[20px] `} style={{ color: textColor }}>Reddit Bannanas</p>
                    <h2 className={` font-normal `} style={{ color: textColor }}>Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far.</h2>

                </div>
            </div>
        </div>
    )
}