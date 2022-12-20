import React from 'react';
import Header from '../../components/header/Header.js';
import Listing from '../../components/listing/Listing.js';
import Sidebar from '../../components/sidebar/Sidebar.js';

import './Home.css';

const Home = () => {
  return (
    <div>
       <Header/>
        <div className='home-page'>
          <Listing/>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Home;