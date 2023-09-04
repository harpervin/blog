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

async function lineups() {
    const response = await axios.get("http://localhost:5000/api/lineups");
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

// async function getPlaybook(user) {
//     const response = await axios.post(`http://localhost:5000/api/${user}/playbook`);
//     console.log("response: ", response);
//     return response;
// }

export { backendHomepage, getBlog, login, signup, lineups };
