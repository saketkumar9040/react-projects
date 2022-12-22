import React from 'react';
import ListingDetail from '../../components/listing-detail/ListingDetail';
import Sidebar from '../../components/sidebar/Sidebar';
import './Detail.css';

const Detail = () => {
  return (
    <div className='detail-page'>
       <ListingDetail/>
       <Sidebar/>
    </div>
  )
}

export default Detail