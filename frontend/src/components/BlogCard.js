import React from 'react'
import { Link } from 'react-router-dom'; // Make sure to import the Link component if you're using React Router

export default function BlogCard({ id, author, created_at, subtitle, text, title }) {
  return (
    <>
        <Link to={'/blog/'+id} className='w-3/5 p-3 m-2 outline rounded-2xl outline-gray-400'>
          {/* <Link to={'/blog/'+id} className='text-2xl text-white'> */}

            <div className='font-bold text-3xl text-black'>{ title }</div>
            <div className='text-lg text-grey'>by { author }</div>
          {/* </Link> */}
        </Link>
      
    </>
  )
};
