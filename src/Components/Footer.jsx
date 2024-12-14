import React from 'react'

const Footer = () => {
  return (
    <div className='h-20 bg-slate-200  flex justify-around items-center '>


        <div className="left text-md font-semibold text-green-800 drop-shadow-sm "> @Copyright reserved 2024 |</div>
        <div className="right flex justify-around text-sm font-medium list-none  gap-10">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </div>
    </div>
  )
}

export default Footer