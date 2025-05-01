import React from 'react'

const Percentage = () => {
    const percentagelist = [
        {
            percentage: "100%",
            description: "average list growth for all paid plans in the first 30 days"
        },
        {
            percentage: "99%",
            description: "deliverability rate for 160+ countries"
        },
        {
            percentage: "350k+",
            description: "customers worldwide trust us with their email marketing"
        },
        {
            percentage: "24/7",
            description: "support from a 5-star rated Customer Success Team"
        },
    ]
  return (

    <div>
        
        <p className="font-bold lg:text-[24px] text-[14px] p-9 text-center">Why GetResponse?</p>
        <div className='flex'>
            { percentagelist.map ((percent, index) => (
                <div className="font-bold lg:text-[60] text-[40px] flex mx-2 gap-5">
                    <div>{percent.percentage}
                    <p className="text-[14px] font-normal">{percent.description}
                    </p>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Percentage