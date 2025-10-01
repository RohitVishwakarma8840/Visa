import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import turfReducer from './slices/turfSlice';
import bookingReducer from './slices/bookingSlice';



const store = configureStore({
  reducer: {
    auth:authReducer,
    turf: turfReducer,
    booking:bookingReducer,

  },
});



export default store; 