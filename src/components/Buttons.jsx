import React from 'react'

const Buttons = ({ label, className, icon }) => {
  return (
    <div className={`flex items-center justify-center gap-2 px-4 py-4 rounded-md text-white ${className}`}>{icon} {label}</div>
  )
}

export default Buttons