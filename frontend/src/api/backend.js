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

async function login(user) {
    const response = await axios.post("http://localhost:5000/login", user);
    const userInfo = response.data;
    console.log("userinfo: ", response);
    return userInfo;
}

export { backendHomepage, getBlog, login };
