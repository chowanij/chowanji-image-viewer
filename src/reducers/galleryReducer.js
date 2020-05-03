const galleryReducer = (state = [], action) => {
  switch(action.type){
    case "LOAD_GALLERY":
      return [...state, ...action.payload];
    case "REMOVE_ITEM":
      const newGallery = [...state];
      newGallery.splice(action.idToRemove, 1)
      return [...newGallery]
    default:
        return state
  }
}

export default galleryReducer;