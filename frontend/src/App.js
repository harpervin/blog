import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { connectDB } from './db/db';
import { useEffect } from 'react';

function App() {

useEffect(() => {
  async function fetchData() {
    // Call the connectDB function to initialize Supabase client (optional if you already called it elsewhere)
    try {
      const users = await connectDB();
      console.log("Users: ", users);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  }

  fetchData(); // Call the function to fetch data
}, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
