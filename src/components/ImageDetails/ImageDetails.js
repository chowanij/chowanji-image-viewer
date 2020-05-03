import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import Modal from 'react-overlays/Modal';
import Backdrop from './Backdrop';
import TitleEdit from './TitleEdit';
import DeleteImage from './DeleteImage';
import './ImageDetails.scss';

const ImageDetails = ({ isShow, imageId, onClose }) => {
  const gallery = useSelector(state => state);
  const image = gallery[imageId];

  return (
    <Modal
      show={isShow}
      className="image-details__wrapper"
      onHide={onClose}
      renderBackdrop={Backdrop}
      aria-labelledby="picture details"
    >
      <div className="image-details__body box">
        <div className="image-details__header">
          <button className="button image-details__close-button" onClick={onClose}>close</button>
          { image && <h3 class="subtitle is-3">{image.title}</h3> }
        </div>
        { image && 
          <div className="image-details__image-wrapper">
            <div>
              <p className="subtitle">Details:</p>
              <TitleEdit imageId={imageId} title={image.title} />
              <p className="subtitle is-6">content: {image.content}</p>
              <p className="subtitle is-6">author: {image.author}</p>
              <DeleteImage imageId={imageId} onClose={onClose} />
            </div>
            <img
              className="image-details__image"
              src={image.src}
              alt={image.title}
            />
            
          </div>
        }
      </div>
    </Modal>
  );

}

ImageDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShow: PropTypes.bool,
  imageId: PropTypes.number,
};

export default ImageDetails;