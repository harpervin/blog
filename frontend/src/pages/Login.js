// React
import React, { useState } from "react";

// React Redux
import { useDispatch } from "react-redux";
import { reduxLogin } from "../util/actions/auth";

// React Router
import { Link, useNavigate } from "react-router-dom";

// Assets
import { login } from "../api/backend";

// Setting Cookies
import {
    setAccessToken,
    setUsername,
} from "../util/setCookies";

export default function Login() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const incorrectDetails = "Incorrect password.";
    const invalidUser = "No account exists with that email.";
    const emptyEmail = "Please enter an email.";
    const emptyPw = "Please enter a password.";

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value);
    };

    const handleLogin = async () => {
        const user_data = {
            email: email,
            password: pw,
        };

        if (email === "") {
            setError(emptyEmail);
        } else if (pw === "") {
            setError(emptyPw);
        } else {
            try {
                const response = await login(user_data);

                if (response) {
                    console.log("response ok");
                    const data = response.data;
                    const accessToken = data.accessToken;
                    const username = data.username;

                    console.log(data);

                    setAccessToken(accessToken);
                    setUsername(username);

                    dispatch(reduxLogin(username));
                }

                navigate("/");
            } catch (err) {
                console.log(err);
                const status = err.response.status;
                console.log(status);
                if (status === 400) {
                    setError(incorrectDetails);
                } else if (status === 404) {
                    setError(invalidUser);
                }
            }
        }
    };

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
                                className="outline focus:outline-2 focus:outline-blue-300 outline-1 outline-gray-300 text-md placeholder-text-gray-400 text-black rounded-sm h-8 w-72 px-2 m-2 color-gray bg-buttonLight"
                                onChange={handleEmail}
                                value={email}
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

                        <div>
                            <button
                                onClick={handleLogin}
                                className="outline hover:outline-3 outline-1 outline-gray-300 shadow-inner text-sm text-black rounded-sm h-8 w-72 px-2 m-2"
                            >
                                Continue with password
                            </button>
                        </div>
                        {error && (
                            <div className="text-red-400 text-sm mt-2">
                                {error}
                            </div>
                        )}

                        <button className="text-gray-400 text-sm underline mt-2 my-2">
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
