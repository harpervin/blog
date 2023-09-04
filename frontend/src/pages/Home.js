import React, { useEffect, useState } from "react";
import { getUser } from "../api/backend";

export default function Home() {
    const [user, setUser] = useState([]);

    //fetchHomepageBlogs();
    // const [latestBlogs, setLatestBlogs] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            // try {
            //     const user_data = await getUser();
            //     setUser(user_data);
            //     console.log(
            //         "Blogs from GET request to express server: ",
            //         user.data
            //     );
            // } catch (err) {
            //     console.log("Error fetching data from react: ", err);
            // }
        };
        getUser();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center h-screen text-black text-6xl font-bold">
                Welcome Back, {}
            </div>
        </>
    );
}
