import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({image, itemId, onClick }) => {
const {src, title, content} = image;
const imageStyle = {
  background: `url(${src})`
}
  return (
    <div className="tile is-parent is-3 image-item">
      <article className="tile is-child box">
        <p className="sub-title">{title}</p>
        <div
          className="image-item__inner"
          style={imageStyle}
          onClick={() => onClick(itemId)}
        />
      </article>
    </div>
  )  
}

export default Image;