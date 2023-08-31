import React, { useEffect, useState } from "react";
import { backendHomepage } from "../api/backend";

export default function Home() {
    //fetchHomepageBlogs();
    // const [latestBlogs, setLatestBlogs] = useState([]);
    // useEffect(() => {
    //   const fetchBlogs = async() => {
    //     try {
    //       const blog_data = await backendHomepage();
    //       setLatestBlogs(blog_data)
    //       console.log('Blogs from GET request to express server: ', latestBlogs)
    //     } catch (err) {
    //       console.log("Error fetching data from react: ", err)
    //     }
    //   };
    //   fetchBlogs();
    // }, []);

    return (
        <>
            <div className="flex items-center justify-center h-screen text-black text-6xl font-bold">
                Welcome Back
            </div>
        </>
    );
}
