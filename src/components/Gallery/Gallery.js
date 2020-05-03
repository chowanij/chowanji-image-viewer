import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import ImageDetails from "../ImageDetails";
import "./Gallery.scss";

const Gallery = ({ images }) => {
  const [show, setShow] = useState(false);
  const [imageId, setImageId] = useState(-1);

  const closeDetails = () => setShow(false);
  const showDetails = (imgId) => {
    setShow(true);
    setImageId(imgId);
  };

  return (
    <>
      <div className="tile is-ancestor gallery">
        {images.map((item, index) => (
          <Image
            key={`${item.title}_${item.author}`}
            itemId={index}
            image={item}
            onClick={showDetails}
          />
        ))}
      </div>
      <ImageDetails isShow={show} imageId={imageId} onClose={closeDetails} />
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Gallery;
