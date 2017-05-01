// src/app/reducers/selectionReducer.js

// Set default state to null to return a value when redux is first run
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
