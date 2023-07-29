import React from 'react'

export default function Blog({ id, author, created_at, subtitle, text, title }) {
  return (
    <>
      <div className='w-3/5 p-3 m-2 outline rounded-2xl'>
        <div className='font-bold text-3xl text-black'>{ title }</div>
        <div className='text-lg text-grey'>{ author }</div>
      </div>
    </>
  )
};
