import React, { useEffect, useState } from "react";
import { backendHomepage, lineups } from "../api/backend";

export default function Login() {
    // useEffect(() => {
    //     const get_lineups = async () => {
    //         try {
    //             const response = await lineups();
    //         } catch (err) {
    //             console.log("Error fetching data from react: ", err);
    //         }
    //     };
    //     get_lineups();
    // }, []);

    return (
        <>
            <div className="flex items-center justify-center h-screen text-black text-6xl font-bold">
                Lineups
            </div>
        </>
    );
}
