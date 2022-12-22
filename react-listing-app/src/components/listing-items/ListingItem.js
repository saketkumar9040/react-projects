import React from "react";
import "./ListingItem.css";

const ListingItem = () => {
  return (
    <div className="listing-item">
      <img className="listing-image" src="https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="building" />
      <div className="listing-details">
        <div className="listing-categories">
              <span className="listing-category">Buy</span>
              <span className="listing-category">Sell</span>
        </div>
        <span className="listing-title">awsome property</span>
        <hr/>
        <span className="listing-time">2 days ago</span> 
      </div>
      <p className="listing-description">
      The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
      </p>
    </div>  
  );
};

export default ListingItem;
