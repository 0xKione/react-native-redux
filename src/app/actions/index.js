// src/app/actions/index.js

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
