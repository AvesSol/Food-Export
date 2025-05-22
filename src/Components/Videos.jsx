import React from 'react'

const Videos = () => {
  return (
    <div className='flex flex-col justify- p-2 gap-6 items-center sm:gap-8 min-h-auto w-[90vw] sm:w-[80vw] mx-auto overflow-x-hidden'>

    {/* <div className="top flex flex-col gap-8 sm:gap-2 sm:flex-row justify-around items-center">
        <video className='w-[100%] shadow-lg sm:w-[45%] h-[100%]' src="/Events/v1.MOV"  controls></video>
        <video className='w-[100%] shadow-lg sm:w-[45%] h-[100%]' src="/Events/v2.MOV"  controls></video>
    </div> */}
    {/* <div className="bottom flex flex-col gap-8 sm:gap-2 sm:flex-row  justify-around items-center"> */}
        {/* <video className='w-[100%] shadow-lg sm:w-[45%] h-[100%]' src="/Events/v3.MOV"  controls></video> */}
    {/* </div> */}
        <video className='w-[100%] shadow-lg h-[100%]' src="/Events/v4.MOV"  controls></video>


    </div>
  )
}

export default Videos