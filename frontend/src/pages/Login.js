import React, { useEffect, useState } from "react";
import { backendHomepage } from "../api/backend";

export default function Login() {
    return (
        <>
            <div className="h-screen flex justify-center align-middle">
                <div className="w-1/2 text-white text-center align-items bg-slate-600">
                    image
                </div>
                <div className="w-1/2">
                    <button className="text-white text-xl font-bold rounded-2xl px-4 py-2 m-4 bg-orange-500">
                        Login
                    </button>
                    <button className="text-white text-xl font-bold rounded-2xl px-4 py-2 bg-orange-500">
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    );
}
