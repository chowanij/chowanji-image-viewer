import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

const TitleEdit = ({ title, imageId }) => {
  const [imgTitle, setImgTitle] = useState(title)
  const dispatch = useDispatch();

  const onChange = (event) => {
    setImgTitle(event.target.value);
  }

  const onSave = () => {
    dispatch({
      type: 'CHANGE_TITLE',
      idToChange: imageId,
      title: imgTitle
    });
  }

  return (
    <div>
      <input
        type="text"
        value={imgTitle}
        onChange={onChange}
      />
      <button onClick={onSave}>save</button>
    </div>
  );

}

export default TitleEdit;