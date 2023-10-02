import axios from "axios";

async function backendHomepage() {
    const response = await axios.get("http://localhost:5000/latestBlogs");
    const latestBlogs = response.data;
    return latestBlogs;
}

async function getBlog(id) {
    console.log("frontend api call id:", id);
    const response = await axios.get(`http://localhost:5000/getBlog/${id}`);
    const blog = response.data;
    return blog;
}

async function lineups(data) {
    const access_token = data.access_token;
    const username = data.username;

    console.log("sending req to express");
    console.log(username);


    // Send access token, username in request headers
    const response = await axios.post("http://localhost:5000/api/lineups", 
        // headers: {
        //     Authorization: `Bearer ${access_token}`,
        //     Username: username,
        // },
        data,
    );
    // const userInfo = response.data;
    console.log("response: ", response);
    return response;
}

async function login(user) {
    const response = await axios.post("http://localhost:5000/api/login", user);
    // console.log("response: ", response);
    return response;
}

async function signup(user) {
    const response = await axios.post("http://localhost:5000/api/signup", user);
    console.log("response: ", response);
    return response;
}

async function getNewTokens(refresh_token) {
    const refresh_token_obj = {
        refresh_token: refresh_token,
    };
    const response = await axios.post(
        "http://localhost:5000/api/getNewAccessToken",
        refresh_token_obj
    );
    const data = response.data;
    console.log(response.data);
    return data;
}

// async function getPlaybook(user) {
//     const response = await axios.post(`http://localhost:5000/api/${user}/playbook`);
//     console.log("response: ", response);
//     return response;
// }

export { backendHomepage, getBlog, login, signup, lineups, getNewTokens };
