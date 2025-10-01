// src/redux/slices/bookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchUserBookings = createAsyncThunk(
  'booking/fetchUserBookings',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`auth/${userId}/bookings`);
      console.log("booking in1 1 112w ", response);

      return response.bookings; // return only the bookings array
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'Failed to fetch bookings');
    }
  }
);

export const BookTurf = createAsyncThunk(
  'booking/bookTurf', 
  async ({ turfId, bookingData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`turfs/${turfId}/book`, bookingData); 
      console.log("booking successfull ", response);

      return response; 
    } catch (err) { 
      return rejectWithValue(err.response?.data?.msg || 'Failed to book turf');
    } 
  }
);



const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        console.log('action', action)
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
