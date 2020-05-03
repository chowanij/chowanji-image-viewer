import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-overlays/Modal';
import Backdrop from './Backdrop';
import './ImageDetails.scss';

const ImageDetails = ({ isShow, item, itemId, onClose }) => {
  
  return (
    <Modal
      show={isShow}
      className="image-details__wrapper"
      onHide={onClose}
      renderBackdrop={Backdrop}
      aria-labelledby="picture details"
    >
      <div className="image-details__body">
        <div className="image-details__image-wrapper">
        <img
          className="image-details__image"
          src={item.src}
          alt={item.title}
        />
        <h4>{item.title}</h4>



        </div>
      </div>
    </Modal>
  );

}

export default ImageDetails;