import React from 'react';
import './ListingDetail.css'

const ListingDetail = () => {
  return (
    <div className='listing-detail'>
     <div className='listing-detail-content'>
        <img src='https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pics'/> 
        <h2 className='listing-detail-title'>
            AWESOME PROPERTY
           <div className='listing-detail-action'>
           <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
           <i class="listing-detail-action-icon fa-solid fa-trash"></i>
           </div>
        </h2>
        <div className='listing-detail-meta-info'>
            <span className='listing-detail-author'>AUTHOR - <strong>JHON DOE</strong></span>
            <span className='llisting-detail-time'>1 Day Ago</span>
            <p className='listing-detail-description'>
            Professionals working in the real estate sector – agents, mortgage originators, appraisers, loan officers, brokers and other financial services parties – must cater to this sentiment in their marketing. Advertising low-interest rates or diverse inventory may draw attention, but there is so much more real estate marketers can do to heighten curiosity, captivate prospective homebuyers and generate new customers.
            </p>
        </div>
     </div>
    </div>
  )
}

export default ListingDetail;