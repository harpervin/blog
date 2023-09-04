import React, { useEffect, useState } from "react";
import { home } from "../api/backend";

export default function Home() {
    const [user, setUser] = useState([]);

    //fetchHomepageBlogs();
    // const [latestBlogs, setLatestBlogs] = useState([]);

    return (
        <>
            <div className="flex items-center justify-center h-screen text-black text-6xl font-bold">
                Welcome Back, {}
            </div>
        </>
    );
}
