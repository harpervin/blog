// import axios from 'axios';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://jruwfrelsukquwehgtfr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydXdmcmVsc3VrcXV3ZWhndGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMzI2NDYsImV4cCI6MjAwNTYwODY0Nn0.5MD9RYPBE5mRarC6MGyS1b-cSDWOJ0AvfyUfdl3rYXc"
);
console.log("supabase conn: ", supabase);

async function fetchLatestBlogs() {
    // const supabase = createClient('https://jruwfrelsukquwehgtfr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydXdmcmVsc3VrcXV3ZWhndGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMzI2NDYsImV4cCI6MjAwNTYwODY0Nn0.5MD9RYPBE5mRarC6MGyS1b-cSDWOJ0AvfyUfdl3rYXc')
    let { data: blogs, error } = await supabase.from("blogs").select("*");
    return blogs;
}

async function fetchBlog(id) {
    let { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id);

    if (error) {
        console.error("Supabase error:", error.message);
        return null;
    }

    return blogs;
}

// async function getUsers () {
//     const { data, error } = await supabase
//     .from('users')
//     .select()
// }

export { fetchLatestBlogs, fetchBlog, supabase };
