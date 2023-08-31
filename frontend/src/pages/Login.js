import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { backendHomepage } from "../api/backend";
import jett from "../assets/jettposter.jpg";

export default function Login() {
    return (
        <>
            <div className="h-full w-full bg-light flex justify-center items-center my-8">
                {/* <img className="w-1/2 text-white text-center align-items bg-white brightness-50" src={jett} alt="jett"/> */}
                <div className="text-center">
                    <h1 className="font-bold text-5xl bg-white m-2">Log in</h1>

                    <hr className="m-8 w-72" />

                    <div className="flex flex-col items-center">
                        <div className="mx-2 w-72 text-left text-xs text-gray-500">
                            Email
                        </div>

                        <label>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md text-gray-400 focus:text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                            />
                        </label>
                        <div className="mx-2 w-72 text-left text-xs text-gray-500">
                            Password
                        </div>

                        <label>
                            <input
                                type="password"
                                placeholder="Enter your password..."
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md text-gray-400 focus:text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                            />
                        </label>

                        <div>
                            <button className="outline hover:outline-3 outline-1 outline-gray-300 text-sm text-black rounded-sm h-8 w-72 px-2 m-2">
                                Continue with password
                            </button>
                        </div>

                        <button className="text-gray-400 text-sm underline mt-4 my-2">
                            Forgot Password?
                        </button>
                        <Link
                            to="/register"
                            className="text-gray-400 text-sm underline"
                        >
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
