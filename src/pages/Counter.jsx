import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


  return (
    <div className="p-[150px] flex space-x-3">
        <button className='bg-red-400 hover:bg-red-300 px-6 py-1 rounded-md text-white' onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button className='bg-green-400 hover:bg-green-300 px-6 py-1 rounded-md text-white' onClick={() => dispatch(increment())}>+</button>
        <button className='hover:border-b-2 border-gray-600' onClick={() => dispatch(reset())} >Reset</button>
    </div>
  );
};

export default Counter