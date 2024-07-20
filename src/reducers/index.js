// src/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Import your cart reducer

const rootReducer = combineReducers({
  cart: cartReducer, // Add your cart reducer here
});

export default rootReducer;
