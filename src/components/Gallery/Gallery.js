import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import ImageDetails from '../ImageDetails';
import './Gallery.scss';


const Gallery  = ({ images }) => {
  const [show, setShow] = useState(false);
  const [imageId, setImageId] = useState(-1)

  const closeDetails = () => setShow(false);
  const showDetails = (imgId) => {
    setShow(true)
    setImageId(imgId)
  };

  console.log('image id: ', imageId)
  console.log('show: ', show)

  return (
    <>
      <div className="gallery">
        {images.map( (item, index) => <Image itemId={index} image={item} onClick={showDetails} />)}
      </div>
      <ImageDetails
        isShow={show}
        imageId={imageId}
        onClose={closeDetails}
      />
    </>
  )
};

export default Gallery;
