import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-overlays/Modal';
import Backdrop from './Backdrop';
import TitleEdit from './TitleEdit'
import './ImageDetails.scss';

const ImageDetails = ({ isShow, imageId, onClose }) => {
  const gallery = useSelector(state => state);
  const dispatch = useDispatch();
  const image = gallery[imageId];
  
  const onDelete = () => {
    onClose();
    dispatch({
      type: 'REMOVE_ITEM',
      idToRemove: imageId
    });
  };


  return (
    <Modal
      show={isShow}
      className="image-details__wrapper"
      onHide={onClose}
      renderBackdrop={Backdrop}
      aria-labelledby="picture details"
    >
      <div className="image-details__body">
        <div className="image-details__header">
        <button className="button image-details__close-button" onClick={onClose}>close</button>
        </div>
        { image && 
          <div className="image-details__image-wrapper">
            <img
              className="image-details__image"
              src={image.src}
              alt={image.title}
            />
            <h4>{image.title}</h4>
            <button className="button is-danger" onClick={onDelete}>delete</button>
            <TitleEdit imageId={imageId} title={image.title} />
          </div>
        }
      </div>
    </Modal>
  );

}

export default ImageDetails;