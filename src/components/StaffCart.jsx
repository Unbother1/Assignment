import React from 'react'

const StaffCart = ({image, name, position, department}) => {
  return (
    <section className='flex justify-between w-[70%] m-auto'> 
        <div className='max-w-xs bg-white rounded-2xl shadow-md overflow-hidden m-4'>
            <img src={image} alt="Staff Portrait" className='w-full h-48 object-cover' />
            <div className='p-4'>
                <h2 className='text-xl font-bold text-gray-600'>{name}</h2>
                <p className='text-gray-600'>Position: <span className='font-semibold'>{position}</span></p>
                <p className='text-gray-600'>Department: <span className='font-semibold'>{department}</span></p>
            </div>
        </div>
    </section>
  )
}

export default StaffCart