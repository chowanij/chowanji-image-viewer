import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './TitleEdit.scss';

const TitleEdit = ({ title, imageId }) => {
  const [imgTitle, setImgTitle] = useState(title)
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch();

  const onChange = (event) => {
    setImgTitle(event.target.value);
  }

  const onSave = () => {
    setIsEdit(!isEdit)
    dispatch({
      type: 'CHANGE_TITLE',
      idToChange: imageId,
      title: imgTitle
    });
  }

  const toggleEdit = () => {
    setIsEdit(!isEdit)
  }

  if(!isEdit) {
    return (
      <div className="title-edit">
        <p className="subtitle is-6">title: {title}</p>
        <button
          className="button is-info is-small"
          onClick={toggleEdit}
        > 
        rename 
        </button>
      </div>
    )
  }

  return (
    <div className="title-edit">
      <input
        type="text"
        value={imgTitle}
        onChange={onChange}
        className="input is-info is-small"
      />
      <button
        className="button is-info is-small"
        onClick={onSave}
      >
        save
      </button>
    </div>
  );

}

export default TitleEdit;