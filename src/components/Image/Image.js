import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Image.scss";

const Image = ({ image, itemId, onClick }) => {
  const [isFoccused, setFoccused] = useState(false);
  const { src, title } = image;
  const imageStyle = {
    background: `url(${src})`,
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && isFoccused) {
      onClick(itemId);
    }
  };

  return (
    <div className="tile is-parent is-3 image-item">
      <article className="tile is-child box">
        <p className="sub-title">{title}</p>
        <div
          role="button"
          tabIndex={0}
          onFocus={() => {
            setFoccused(true);
          }}
          onBlur={() => {
            setFoccused(false);
          }}
          className="image-item__inner"
          style={imageStyle}
          onClick={() => onClick(itemId)}
          onKeyDown={handleKeyDown}
        />
      </article>
    </div>
  );
};

Image.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
  }),
  itemId: PropTypes.number,
};
export default Image;
