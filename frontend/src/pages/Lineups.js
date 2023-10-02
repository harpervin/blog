import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendHomepage, lineups } from "../api/backend";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAccessToken, setUsername } from "../util/setCookies";
import { reduxLogin } from "../util/actions/auth";

export default function Lineups() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const access_token = Cookies.get("access_token");
        const username = Cookies.get("username");
        const data = {
            access_token: access_token,
            username: username
        }

        const get_lineups = async () => {
            try {
                const response = await lineups(data);
                const status = response.status;
                if (status === 200) {
                    const accessToken = response.data.accessToken;
                    const username = response.data.username;

                    console.log(response.data);
                    console.log("accesstoken:",accessToken)

                    setAccessToken(accessToken);
                    setUsername(username);

                    dispatch(reduxLogin(username));
                }
            } catch (err) {
                console.log("Error fetching data from react: ", err);
                const status = err.response.status;
                console.log(err.response.data);
                if (status === 401) {
                    navigate("/login");
                }
                
            }
        };
        get_lineups();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center h-screen text-black text-6xl font-bold">
                Lineups
            </div>
        </>
    );
}
