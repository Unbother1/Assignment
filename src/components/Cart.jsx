import React from 'react'

const Cart = ({image, text1, text2, text3, text4, text5, select}) => {
  return (
    <div className="p-20 flex gap-4"> 
            <a className="bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left">
              <img src={image} alt="ECS Logo" className="w-16 h-10 grayscale"/>
              <p className="lg:text-[24px] text-[14px] font-bold"><span className=" text-blue-400">{text1}</span><br className="text-black"/>{text2}<br /></p>
              <p className="font-medium py-10">{text3} 
                <br />{text4} 
                <br />{text5}</p>
                <button className="py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold">{select} &rarr;</button>
            </a>
    </div>
  )
}

export default Cart