import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./DeleteImage.scss";

const DeleteImage = ({ imageId, onClose }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const onDelete = () => {
    onClose();
    dispatch({
      type: "REMOVE_ITEM",
      idToRemove: imageId,
    });
  };

  if (!isDeleting) {
    return (
      <div className="title-edit">
        <button
          type="button"
          className="button is-danger is-small"
          onClick={() => {
            setIsDeleting(true);
          }}
        >
          Delete Image
        </button>
      </div>
    );
  }

  return (
    <div className="title-edit">
      <p className="subtitle is-6">Delete ? </p>
      <button
        type="button"
        className="button is-danger is-small"
        onClick={onDelete}
      >
        YES
      </button>
      <button
        type="button"
        className="button is-info is-small"
        onClick={() => {
          setIsDeleting(false);
        }}
      >
        NO
      </button>
    </div>
  );
};

DeleteImage.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageId: PropTypes.number,
};

export default DeleteImage;
