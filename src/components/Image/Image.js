import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ image }) => {
const {src, title, content} = image;
const imageStyle = {
  background: `url(${src})`
}
  return (
    <div className="image-item">
      <div className="image-item__inner" style={imageStyle}/>
      <h4 className="image-item__title">{title}</h4>
    </div>
  )  
}

export default Image;