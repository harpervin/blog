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

async function checkEmailValidity(email) {
    console.log("frontend login api call: ", email);
    const response = await axios.post("http://localhost:5000/check_email");
    const userInfo = response.data;
    return userInfo;
}

export { backendHomepage, getBlog };
