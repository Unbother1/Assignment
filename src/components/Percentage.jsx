import React from 'react'

const Percentage = () => {
    const percentagelist = [
        {
            ratings: "100%",
            description: "average list growth for",
            description1: "all paid plans in the first",
            description2: "30 days",
        },
        {
            ratings: "99%",
            description: "deliverability rate",
            description1: "for 160+ countries",
            description2: "",
        },
        {
            ratings: "350k+",
            description: "customers worldwide",
            description1: "trust us with their email",
            description2: "marketing",
        },
        {
            ratings: "24/7",
            description: "support from a 5-star",
            description1: "rated Customer Success",
            description2: "Team",
        },
    ]
  return (

    <div className='items-center justify-center'>
        
        <p className="font-bold lg:text-[24px] text-[14px] p-9 lg:text-center text-center lg:justify-center">
            Why GetResponse?
        </p>
        <div className='flex'>
            { percentagelist.map ((percent, index) => (
                <div className="lg:font-bold font-bold lg:text-[60] text-[40px] flex lg:m-20 m-10 lg:text-center text-center lg:justify-center">
                    <div>{percent.ratings}
                    <p className="text-[14px] font-normal">{percent.description}</p>
                    <p className="text-[14px] font-normal">{percent.description1}</p>
                    <p className="text-[14px] font-normal">{percent.description2}</p>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Percentage