import React from 'react'
import UserCards from '../components/UserCards'

const user = () => {
  return (
    <section className='flex flex-wrap gap-4 h-full bg-gradient-to-r from-purple-500 via-blue-600 to-white p-[50px]'>
        <UserCards />
    </section>
  )
}

export default user