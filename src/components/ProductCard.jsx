import React, { useEffect, useState } from 'react'
import productImage from '../assets/headphones.png';
import Buttons from '../components/Buttons';
import { TbBriefcase2 } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import axios from 'axios';



const ProductCard = () => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        const fetchPost = async () => {
            try {
                const response = await axios("https://dummyjson.com/products");
                setProducts(response.data.products);
            } catch (error) {
                console.log("error", error)
            }
        };
        fetchPost()

    }, []);

  return (
        <>
            {products.map((p, index) => (
                <div key={index} className=' bg-white w-[350px] h-fit p-4 rounded-xl shadow-lg '>
                    <div className='w-full relative p-12'>
                        <div className='bg-purple-300 text-black px-2 py-1 w-fit absolute top-0 left-0'>{p.availabilityStatus}</div>
                        <img src={p.images[0]} alt="image" className='size-[200px] m-auto'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl mb-3'>{p.title}</h3>
                        <h4 className='font-bold text-xl'>{p.brand}</h4>
                        <small className='text-sm text-gray-500'>Shipped in 3-4 days</small>
                        <bold className='font-bold'>$ {p.price}</bold>
                        <div className='flex gap-3'>
                            <Buttons label= {<>Add to <br/>Cart</>} icon={<IoCartOutline />} className='bg-gray-100 text-center w-full text-gray-400'/>
                            <Buttons label= "Buy" icon={<TbBriefcase2 />} className='bg-pink-400 text-center w-full'/>
                        </div>
                    </div>
                </div>

            ))}
        </>
  );
};

export default ProductCard