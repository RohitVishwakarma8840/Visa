import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";


//  Async thunk to fetch all turfs
export const getAllTurfs = createAsyncThunk(
  "turfs/all-turfs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("turfs/all-turfs"); 
      // console.log('response', response)
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to fetch turfs"
      );
    }
  }
);


// Updated createTurf thunk
export const createTurf = createAsyncThunk(
  "turfs/create",
  async (turfData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const userType = state.auth?.user?.userType;

      if (userType !== "manager") {
        return rejectWithValue("Only managers can create turfs");
      }

      const token = localStorage.getItem("token");
      const response = await axiosInstance.post("/turfs/create", turfData, {
        headers: {
          "x-auth-token": token,
           "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to create turf"
      );
    }
  }
);

export const getTurfById = createAsyncThunk(  
  "turfs/getById",
  async (turfId, { rejectWithValue }) => {
    try { 
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get(`/turfs/${turfId}`,{
        headers: {
          "x-auth-token": token,

        }}
      );
      // console.log('respones is 12134u4', response);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to fetch turf details"
      );
    } 
  }
);  

const initialState = {
  turfs: [],
  loading: false,
  error: null,
};





// ✅ Create slice
const turfSlice = createSlice({
  name: "turfs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //  Pending

      .addCase(getAllTurfs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      //  Fulfilled
      .addCase(getAllTurfs.fulfilled, (state, action) => {
        state.loading = false;
        state.turfs = action.payload;
      })

      //  Rejected

      .addCase(getAllTurfs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createTurf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      //  Fulfilled
      .addCase(createTurf.fulfilled, (state, action) => {
        state.loading = false;
        state.turfs.push(action.payload); 
      })

      //  Rejected

      .addCase(createTurf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       .addCase(getTurfById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTurfById.fulfilled, (state, action) => {
        state.loading = false;
        state.turfs= action.payload;

      })
      .addCase(getTurfById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;  // The error message
      });

  },
});

export default turfSlice.reducer;
