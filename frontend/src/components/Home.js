import React from 'react'
import { useEffect } from 'react'
import { backendHomepage } from '../api/backend'

export default function Home() {
  console.log('Component rendered');

  useEffect(() => {
    const fetchBlogs = async() => {
      try {
        const latestBlogs = await backendHomepage();
        console.log('Blogs from GET request to express server: ', latestBlogs)
      } catch (err) {
        console.log("Error fetching data from react: ", err)
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>Home Page</div>
  )
}
