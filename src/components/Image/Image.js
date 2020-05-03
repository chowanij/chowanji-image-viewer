import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({image, itemId, onClick }) => {
const {src, title, } = image;
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

Image.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
          src: PropTypes.string,  
          title: PropTypes.string,
          content: PropTypes.string,
          author: PropTypes.string,
        }),
  itemId: PropTypes.number
};
export default Image;