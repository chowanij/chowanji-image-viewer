import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import './Gallery.scss';

const Gallery  = ({ images }) => {
  return (
    <div className="gallery">
      {images.map( item => <Image image={item} />)}
    </div>
  )
};

export default Gallery;
