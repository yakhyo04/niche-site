import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Post from '../component/Post/post.component';

const Home = () => {
    const {logOut, user} = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async() => {
        try{
          await logOut();
          navigate("/login");
        }catch(err){
          console.log(err.message);
        }
      }
    return (
        <div className='container'>
            <h1>Profile</h1>

            <Post/>

            <button className='black_btn' variant="primary" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
