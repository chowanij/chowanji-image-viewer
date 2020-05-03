const galleryReducer = (state = [], action) => {
  switch(action.type){
    case 'LOAD_GALLERY':
      return [...state, ...action.payload];
    case 'REMOVE_ITEM':
      const newGallery = [...state];
      newGallery.splice(action.idToRemove, 1);
      return [...newGallery];
    case 'CHANGE_TITLE':
      const galleryToChange = [...state];
      const item = galleryToChange.splice(action.idToChange, 1);
      console.log('item: ', item[0]);
      const newItem = {...item[0], title: action.title};
      console.log('newItem ', newItem);
      galleryToChange.splice(action.idToChange, 0, newItem);
      return [...galleryToChange];
    default:
        return state;
  }
}

export default galleryReducer;