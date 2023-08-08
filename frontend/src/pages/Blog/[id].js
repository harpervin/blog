import React, { useEffect, useState } from 'react'
import { getBlog } from '../../api/backend';

export default function Blog({ id, author, created_at, subtitle, text, title }) {
    const [blog, setBlog] = useState([]);

    // useEffect(() => {
    //     const fetchBlogs = async() => {
    //       try {
    //         const blog_data = await getBlog([id]);
    //         setBlog(blog_data)
    //         console.log('Blogs from GET request to express server: ', blog)
    //       } catch (err) {
    //         console.log("Error fetching data from react: ", err)
    //       }
    //     };
    //     fetchBlogs();
    //   }, []);

    return (
                <>
                    <div className='w-3/5 p-3 m-2 outline rounded-3xl'>
                        <div className='font-bold text-3xl text-black'>{ title }</div>
                        <div className='text-lg text-grey'>{ author }</div>
                        <div className='text-md text-grey'>{ text }</div>
                    </div>
                </>  
    )
}
