import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ image, onClick }) => {
const {src, title, content} = image;
const imageStyle = {
  background: `url(${src})`
}

console.log('image: ', image);
  return (
    <div className="image-item">
      <div
        className="image-item__inner"
        style={imageStyle}
        onClick={() => onClick({...image})}
      />
      <h4 className="image-item__title">{title}</h4>
    </div>
  )  
}

export default Image;