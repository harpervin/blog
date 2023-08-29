import axios from 'axios';

async function backendHomepage () {
    const response = await axios.get('http://localhost:5000/latestBlogs')
    const latestBlogs = response.data
    return latestBlogs;
}

async function getBlog (id) {
    console.log("frontend api call id:", id)
    const response = await axios.get(`http://localhost:5000/getBlog/${id}`)
    const blog = response.data
    return blog;
}

export {
    backendHomepage,
    getBlog
}
