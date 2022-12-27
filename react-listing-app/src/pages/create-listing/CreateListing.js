import React from 'react';
import './CreateListing.css';

const CreateListing = () => {
  return (
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
            <input autoFocus={true}
            type='text' placeholder='Property title'
            className='create-listing-text'/>
            <label htmlFor='listingImage' className='create-listing-image-upload '>
                <i class="upload-icon fa-solid fa-cloud-arrow-up"></i>
            </label>
            <input type='file' id='listingImage' style={{display:"none"}} />
            </div>
            <div className='create-listing-form-group'>
                <textarea 
                 className='create-listing-text create-listing-description'
                 placeholder='Property description'></textarea>
            </div>
        </form> 
        <button className='create-listing-button'>SUBMIT</button> 
    </div>
  )
}

export default CreateListing;