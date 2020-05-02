import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import ImageDetails from '../ImageDetails';
import './Gallery.scss';


const Gallery  = ({ images }) => {
  const [show, setShow] = useState(false);
  const [imageDetails, setImageDetails] = useState({})

  const closeDetails = () => setShow(false);
  const showDetails = (imgDetails) => {
    setShow(true)
    setImageDetails(imgDetails)
  };

  console.log('image details: ', imageDetails)
  console.log('show: ', show)

  return (
    <>
      <div className="gallery">
        {images.map( item => <Image image={item} onClick={showDetails} />)}
      </div>
      <ImageDetails
        isShow={show}
        item={imageDetails}
        imageDetails={imageDetails}
        onClose={closeDetails}
      />
    </>
  )
};

export default Gallery;
