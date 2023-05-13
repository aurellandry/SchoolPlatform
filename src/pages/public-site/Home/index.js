import React from 'react';
import Navbar from '../../../components/Navbar'
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      
      <div className='container'>
        <div className='baseline'>
          <h1>Home page of SchoolPlatform !</h1>
          <p>
            <i>🚧 Site under construction. Some cool features will soon arrive ! 🚀</i>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
