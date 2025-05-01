import React from 'react'

const LeaderCart = () => {
    const leaderlist = [
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Owolabi",
            position: "CEO",
            department: "Founder",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
    ]

  return (
    <div>
        <h1 className='text-3xl font-bold'>OUR LEADERS</h1>
        <section className='flex m-auto mt-10'>
            {leaderlist.map((leader, index) => (
                <div className='max-w-xs bg-white rounded-2xl shadow-md overflow-hidden m-4'>
                    <img src={leader.image} alt="Staff Portrait" className='w-full h-48 object-cover' />
        
                    <div className='p-4'>
                        <h2 className='text-xl font-bold text-gray-600'>{leader.name}</h2>
                        <p className='text-gray-600'>Position: <span className='font-semibold'>{leader.position}</span></p>
                        <p className='text-gray-600'>Department: <span className='font-semibold'>{leader.department}</span></p>
                    </div>
                </div>
            ))
        
            }
        </section>
    </div>
  )
}

export default LeaderCart