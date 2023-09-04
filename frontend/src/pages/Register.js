import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendHomepage, signup } from "../api/backend";
import jett from "../assets/jettposter.jpg";

export default function Register() {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pwAgain, setPwAgain] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const invalidEmail = "Invalid email address.";
    const incorrectDetails = "Incorrect email or password.";
    const passwordMismatch = "Passwords do not match.";

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value);
    };

    const handlePwAgain = (e) => {
        setPwAgain(e.target.value);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleSignup = async () => {
        const user_data = {
            email: email,
            password: pw,
            username: username,
        };
        try {
            if (pwAgain !== pw) {
                setMessage("");
                setError(passwordMismatch);
                console.log("mismatch");
            } else {
                const response = await signup(user_data);
                console.log(response.status);

                if (response.status === 201) {
                    setError("");
                    setMessage(
                        "You have successfully registered a new account. Please go to your email to verify your account before logging in."
                    );
                }
            }
        } catch (err) {
            const status = err.response.status;
            console.log(status);
            if (status === 401) {
                setError("An email already exists with this account.");
                setMessage("");
            } else {
                setError(err.message);
                setMessage("");
            }
            console.log("Error fetching data from react: ", err);
        }
    };

    return (
        <>
            <div className="h-full w-full bg-light flex justify-center items-center my-8">
                {/* <img className="w-1/2 text-white text-center align-items bg-white brightness-50" src={jett} alt="jett"/> */}
                <div className="text-center">
                    <h1 className="font-bold text-5xl bg-white m-2">Sign up</h1>

                    <hr className="m-8 w-72" />

                    <div className="flex flex-col items-center">
                        <div className="mx-2 w-72 text-left text-xs text-gray-500">
                            Email
                        </div>

                        <label>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md placeholder-text-gray-400 text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                                onChange={handleEmail}
                                value={email}
                            />
                        </label>

                        <div className="mx-2 w-72 text-left text-xs text-gray-500">
                            Username
                        </div>

                        <label>
                            <input
                                type="email"
                                placeholder="Enter your username..."
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md placeholder-text-gray-400 text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                                onChange={handleUsername}
                                value={username}
                            />
                        </label>

                        <div className="mx-2 w-72 text-left text-xs text-gray-500">
                            Password
                        </div>

                        <label>
                            <input
                                type="password"
                                placeholder="Enter your password..."
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md placeholder-text-gray-400 text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                                onChange={handlePw}
                                value={pw}
                            />
                        </label>

                        <label>
                            <input
                                type="password"
                                placeholder="Re-enter your password..."
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md placeholder-text-gray-400 text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                                onChange={handlePwAgain}
                                value={pwAgain}
                            />
                        </label>

                        <div>
                            <button
                                onClick={handleSignup}
                                className="outline hover:outline-3 outline-1 outline-gray-300 shadow-inner text-sm text-black rounded-sm h-8 w-72 px-2 m-2"
                            >
                                Continue with password
                            </button>
                        </div>

                        {message && (
                            <div className="text-green-700 text-sm mt-2">
                                {message}
                            </div>
                        )}

                        {error && (
                            <div className="text-red-400 text-sm my-2">
                                {error}
                            </div>
                        )}

                        <Link
                            to="/login"
                            className="text-gray-400 text-sm underline"
                        >
                            Already have an account? Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
