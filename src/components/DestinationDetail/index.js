import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';

const DestinationDetail = ({ destinationList }) => {
  const { id } = useParams();
  const destination = destinationList.find(item => item.id === parseInt(id, 10));

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { name, imageUrl, fullDescription, location: placeLocation } = destination;

  return (
    <div className='destination-detail'>
      <Link to="/">Back</Link>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} className='destination-image' />
      <p>{fullDescription}</p>
      <p>Location: {placeLocation}</p>
    </div>
  );
};

export default DestinationDetail;
