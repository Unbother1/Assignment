import React, {useState, useEffect} from 'react'
import axios from 'axios';

const UserCards = () => {
    const [users, setUsers] = useState([]);
    useEffect (() => {
        const fetchPost = async () => {
            try {
                const response = await axios("https://dummyjson.com/users");
                setUsers(response.data.users);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchPost();
    
    }, []);

  return (

    <>
        {users.map((u, index) => (
            <div key={index} className='flex flex-col w-[350px] h-[500px] bg-indigo-900 rounded-xl'>
                <div className='bg-slate-200 h-[200px] flex flex-col items-center justify-center gap-4'>
                    <img className=' w-24 h-24 rounded-full object-cover' src={u.image} alt="Image" />
                    <div className='flex gap-5 w-full px-4'>
                        <h4 className='w-full text-center text-black'>{u.gender}</h4>
                        <h4 className='w-full text-center text-black'>{u.age}</h4>
                    </div>
                </div>
                <div className='h-[200px] p-6 flex flex-col items-center justify-center gap-5'>
                    <h3 className='font-bold bg-gray-600 text-white rounded-md'>FirstName: {u.firstName}</h3>
                    <h3 className='font-bold bg-gray-600 text-white rounded-md'>LastName: {u.lastName}</h3>
                    <h3 className='font-bold bg-gray-600 text-white rounded-md'>MaidenName: {u.maidenName}</h3>
                </div>
                <div className='flex flex-col gap-4'>
                    <a href="#" className='w-full text-center text-white '>Email: {u.email}</a>
                    <a href="#" className='w-full text-center text-white'>Phone: {u.phone}</a>
                </div>
            </div>
        ))}    
    </>
  )
}

export default UserCards