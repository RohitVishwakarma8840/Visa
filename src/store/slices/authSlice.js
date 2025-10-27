import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
import { SignpostOutlined } from '@mui/icons-material';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      localStorage.setItem('token', '');

      const response = await axiosInstance.post('auth/login', credentials);

      const userData = response; // already the backend JSON
      console.log('Token:', userData.token);

      if (userData.token) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify(userData));
      }

      return userData;
    } catch (err) {
      console.log('Login error: ', err);
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post(LOGOUT_API);

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return true;
    } catch (err) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('Logout error: ', err);
      return rejectWithValue(err.response?.data || 'Logout failed');
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
   async (credentials, { rejectWithValue }) => {
    try{

      const response  = await axiosInstance.post('auth/register', credentials);
       return response;

    }
    catch(error){
      console.log(error);
      return rejectWithValue(err.response?.data || 'SignUp Failed')
    }
   }

)


const getInitialUser = () => {
  const userJson = localStorage.getItem('user');
  if (userJson) {
    try {
      return JSON.parse(userJson);
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  }
  return null;
};


// ✅ Initialize state with data from localStorage
const initialUser = getInitialUser();

const initialState = {
  user: initialUser,
  loading: false,
  error: null,
  isAuthenticated: Boolean(localStorage.getItem('token')),
  isManager: initialUser?.user?.userType === 'manager' || initialUser?.userType === 'manager',
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        const payload = action.payload;

        state.user = payload;
        state.isAuthenticated = true;
        state.error = null;
       state.isManager = payload.user?.userType === 'manager'; // ✅ correct check



        // state.isAdmin = payload.isAdmin || payload.role === 'admin' || false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isManager  = false;
      })
      .addCase(signup.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled,(state,action)=>{
        state.loading = false;
        const payload = action.payload;
      })
       .addCase(signup.rejected, (state) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.isAdmin = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.isAdmin = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
