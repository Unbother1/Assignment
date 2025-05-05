import React, { useState } from 'react'
import { GrFormView } from "react-icons/gr";

const Signup = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [confirmpassword, setConfirmPassword] = useState("")

    const [ShowPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(! ShowPassword)
    }

    const [reveal, setReveal] = useState(false)
    const displayPassword = () => {
        setReveal(!reveal)
    }

  return (
    <div className='min-h-screen flex bg-gradient-to-r from-green-500 to-yellow-400 items-center justify-center'>
        <div className='bg-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-md'>
            <form className='space-y-2'>
                <label className='block'>Full name</label>
                <input 
                type="text" 
                placeholder='Please enter your full name' 
                className='border-2 rounded-lg w-full pr-10 pl-3 py-2' />
                <label className='block'>Email</label>
                <input 
                type="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Please enter your email' 
                className='border-2 rounded-lg w-full pr-10 pl-3 py-2' />
                <label className='block'>Password</label>
                <div className='relative w-full'>
                    <input
                    type={ShowPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Please enter your password'
                    onin
                    className='border-2 rounded-lg w-full pr-10 pl-3 py-2'/>
                    <span onClick={togglePassword} className='absolute right-3 top-1/4 cursor-pointer'><GrFormView /></span> 
                </div>
                <label className='block'>Confirm Password</label>
                <div className='relative w-full'>
                    <input
                    type={reveal ? "text" : "password"}
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Please confirm password'
                    className='border-2 rounded-lg w-full pr-10 pl-3 py-2' />
                    <span onClick={displayPassword} className='absolute right-3 top-1/4 cursor-pointer'><GrFormView /></span>
                </div>
                <button className='w-full bg-green-500 rounded-lg hover:bg-blue-600 pr-10 pl-3 py-2'>Signup</button>
            </form>
        </div>
    </div>
  )
}

export default Signup