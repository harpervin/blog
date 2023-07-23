import axios from 'axios';

async function backendHomepage () {
    const response = await axios.get('http://localhost:5000/latestBlogs')
    const latestBlogs = response.data
    return latestBlogs;
}

export {
    backendHomepage,
}
