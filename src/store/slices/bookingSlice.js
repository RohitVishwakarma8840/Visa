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

      const token = localStorage.getItem("token");
      const response = await axiosInstance.post(`turfs/${turfId}/book`, bookingData,{
        headers: {
          "x-auth-token": token,
        },
      }); 
      console.log("booking successfull ", response);

      return response; 
    } catch (err) { 
      return rejectWithValue(err.response?.data?.msg || 'Failed to book turf');
    } 
  }
);

export const getAllBooking = createAsyncThunk(
  'users/AllBooking',
async(_, { rejectWithValue }) => {
  try{
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`turfs/users/AllBooking`,{
      headers:{
        "x-auth-token" : token,
      },
    }
    );
    
    console.log(response, "Response is coming ");
    return response;

  }
  catch(err){
    console.log(err);
    return rejectWithValue(err.response?.data.msg || "failed to get All user booking ")
  }
}
)

export const updateBookingStatus = createAsyncThunk(
  'booking/updateStatus',
  async ({ turfId, slotId, bookingStatus }, { rejectWithValue,getState }) => {
    try {
       const state = getState();
      const userType = state.auth?.user?.userType;

      if (userType !== "manager") {
        return rejectWithValue("Only managers can create turfs");
      }
      const token = localStorage.getItem("token");
      const response = await axiosInstance.patch(
        `turfs/${turfId}/slots/${slotId}/status`,
        { bookingStatus },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      return response.slot;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'Something went wrong');
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
      })
      .addCase(getAllBooking.pending,(state,action)=> {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBooking.rejected,(state,action)=>{
        state.loading= false;
        state.error = action.payload;
      })
      .addCase(getAllBooking.fulfilled,(state,action)=>{
        state.loading = false;
        state.bookings= action.payload;
      })
      
      // Update booking status
      .addCase(updateBookingStatus.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateBookingStatus.fulfilled, (state, action) => {
        state.updateLoading = false;
        
        const updatedSlot = action.payload;
        
        // FIXED: Update the slot in the bookings array
        if (state.bookings?.bookings) {
          state.bookings.bookings = state.bookings.bookings.map((turf) => ({
            ...turf,
            bookings: turf.bookings.map((booking) =>
              booking.slotId === updatedSlot._id || booking.slotId === updatedSlot.slotId
                ? { 
                    ...booking, 
                    status: updatedSlot.bookingStatus,
                    bookingStatus: updatedSlot.bookingStatus 
                  }
                : booking
            ),
          }));
        }
      })
      .addCase(updateBookingStatus.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload;
      });
   
  },
});

export default bookingSlice.reducer;
