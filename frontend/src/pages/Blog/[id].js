import React, { useEffect, useState } from 'react'
import { getBlog } from '../../api/backend';
import { useParams } from 'react-router-dom';

export default function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchBlogs = async() => {
          try {
            console.log(id);
            const blog_data = await getBlog(id);
            setBlog(blog_data[0])
          } catch (err) {
            console.log("Error fetching data from react: ", err)
          }
        };
        fetchBlogs();
      }, []);

    return (
                <>
                    <div className='w-3/5 p-3 m-2 outline rounded-3xl'>
                        <div className='font-bold text-3xl text-black'>{ blog.title }</div>
                        <div className='text-lg text-grey'>by { blog.author }</div>
                        <div className='text-md text-grey py-10'>{ blog.text }</div>
                    </div>
                </>  
    )
}
