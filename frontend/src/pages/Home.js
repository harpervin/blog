import React, { useEffect, useState } from 'react'
import { backendHomepage } from '../api/backend';
import Blog from "../components/Blog.js";

export default function Home() {
  console.log('Component rendered');
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async() => {
      try {
        const blog_data = await backendHomepage();
        setLatestBlogs(blog_data)
        console.log('Blogs from GET request to express server: ', latestBlogs)
      } catch (err) {
        console.log("Error fetching data from react: ", err)
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className='flex items-center'>
        {/* <Blog author='han' created_at='29/7/2023' subtitle='Test!' text='lorem ipsum' title='My First Blog'/>
        <Blog author='han' created_at='29/7/2023' subtitle='Test!' text='lorem ipsum' title='My First Blog'/> */}
        {latestBlogs.map((blog) => (
          <Blog key={blog.id} author={blog.author} title={blog.title} text={blog.text} created_at={blog.created_at} subtitle={blog.subtitle}/>
        ))}
      </div>
    </>
  )
}
