import React, { Suspense } from 'react'
import Loading from '../components/Loading';
// import FacebookPost from '../components/Posts'

// const FacebookPost = React.lazy(() => import('../components/Posts'));

const FacebookPost = React.lazy(
    () => 
         new Promise((resolve) => {
            setTimeout(() => {
                resolve (import('../components/Posts'));
            }, 5000);
         })
        );


const PostPage = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500'>
        <Suspense fallback={<Loading/>}>
            <FacebookPost />
        </Suspense>
    </div>
  )
}

export default PostPage