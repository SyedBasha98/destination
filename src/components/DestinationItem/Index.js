import React from 'react';
import './index.css';

const DestinationItem = ({ destinationDetails }) => {
  const { name, description, imageUrl, location } = destinationDetails;

  return (
    <div className='destination-item'>
      <img src={imageUrl} alt={name} className='destination-image' />
      <div className='destination-info'>
        <h2 className='destination-name'>{name}</h2>
        <p className='destination-description'>{description}</p>
        <p className='destination-location'>{location}</p>
      </div>
    </div>
  );
};

export default DestinationItem;
