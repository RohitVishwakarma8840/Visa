import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, signup } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const { loading, error } = useSelector((state) => state.auth);

//   const {loading,error } = useSelector((state)=>state.auth);
//   console.log(loading,error,"auth state");

  const [form, setForm] = useState({ email: '', password: '', name:'' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('login submitted ');
  //  const resultAction = await dispatch(login(form));
   const resultAction = await dispatch(signup(form))
   if(resultAction){
    navigate('/login');
   }

  };



  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F7FA',

        padding: { xs: '16px', sm: '0' },
      }}
    >
      <Box
        sx={{
          width: { xs: '0', md: '12vw' },
          height: { xs: '0', md: '25vh' },
          backgroundColor: '#E9ECF4',
          position: 'absolute',
          top: { xs: '0', md: '8%' },
          left: { xs: '0', md: '30%' },
          zIndex: 1,
          borderRadius: '12px',
          display: { xs: 'none', md: 'block' },
        }}
      ></Box>

      <Box
        sx={{
          width: { xs: '0', md: '12vw' },
          height: { xs: '0', md: '25vh' },
          backgroundColor: '#F8F7FA',
          border: '0.2vw solid #E9ECF4',
          top: { xs: '0', md: '6%' },
          left: { xs: '0', md: '40%' },
          zIndex: 0,
          borderRadius: '12px',
          position: 'absolute',
          display: { xs: 'none', md: 'block' },
        }}
      ></Box>

      <Box
        sx={{
          width: { xs: '0', md: '12vw' },
          height: { xs: '0', md: '25vh' },
          backgroundColor: '#E9ECF4',
          zIndex: 0,
          bottom: { xs: '0', md: '9%' },
          right: { xs: '0', md: '28%' },
          borderRadius: '12px',
          position: 'absolute',
          display: { xs: 'none', md: 'block' },
        }}
      ></Box>

      {/* Content Div */}
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '80vw',
            md: '50vw',
            lg: '34vw',
          },
          height: {
            xs: 'auto',
            sm: '80vh',
            md: '76vh',
          },
          maxWidth: { xs: '400px', sm: '500px', md: 'none' },
          backgroundColor: '#fff',
          borderRadius: { xs: '16px', md: '12px' },
          padding: {
            xs: 4,
            sm: 6,
            md: 4,
          },
          zIndex: 2,
          position: { xs: 'relative', md: 'absolute' },
          top: { xs: 'auto', md: '50%' },
          left: { xs: 'auto', md: '50%' },
          transform: { xs: 'none', md: 'translate(-50%,-50%)' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 2.5, md: 3, lg: 4, xl: 6 },
          margin: { xs: '0 auto', md: '0' },
          minHeight: { xs: 'calc(100vh - 32px)', sm: 'auto' },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            flexDirection: 'column',
            justifyContent: 'space-around',
            textAlign: 'center',
          }}
        >
          {/* <img
            src="image.jpg"
            alt=""
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '60px',
            }}
          /> */}

          <Box
            sx={{
              mb: 1,
            }}
          >
            <img
              src="NTT Data Payment Services Logo.png"
              alt=""
              style={{
                maxWidth: '80%',
                // height: '30',
                maxHeight: '60px',
                height: 'auto',
                display: 'inline',
              }}
            />
          </Box>

          <Typography
            sx={{
              color: 'black',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: { xs: '18px', sm: '20px', md: '20px' },
              marginTop: { xs: 2, md: 0 },
            }}
          >
            Sign Up to Continue
          </Typography>

          <Typography
            sx={{
              fontWeight: '500',
              textAlign: 'center',
              fontSize: { xs: '14px', sm: '15px', md: '14px' },
              color: { xs: '#666', md: 'inherit' },
            }}
          >
            Enter your details to Sign Up
          </Typography>
        </Box>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1vh',
            width: '100%',
          }}
        >



          {/* Sign Up Address Field */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >

           <Typography
               sx={{
                fontSize: { xs: '13px', md: '15px' },
                color: 'black',
              }}
           >
          Enter Name
           </Typography>
           <TextField
            name="name"
              type="text"
              placeholder="Enter your Name here"
              value={form.name}
              onChange={handleChange}
              fullWidth
              size="small"

           />

         

            <Typography
              sx={{
                fontSize: { xs: '13px', md: '15px' },
                color: 'black',
              }}
            >
              Email Address
            </Typography>
            <TextField
              name="email"
              type="email"
              placeholder="Enter your registered email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              size="small"
              sx={styles.emailStyle}
              //   disabled={loading}
            />
          </Box>

          {/* Password Field */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '13px', md: '15px' },
                color: 'black',
              }}
            >
              Password
            </Typography>
            <TextField
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              //   disabled={loading}
              fullWidth
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#888',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                    borderWidth: '1px',
                  },
                  height: { xs: '44px', md: 'auto' },
                },
                '& .MuiInputBase-input::placeholder': {
                  opacity: 1,
                  color: '#999',

                  fontSize: { xs: '14px', md: '16px' },
                },
              }}
            />
          </Box>

          {/* {error && <Alert severity="error">{error}</Alert>} */}

          <Button
            type="submit"
            sx={{
              width: '100%',
              backgroundColor: '#6484C1',

              textTransform: 'none',
              color: 'white',
              mt: 2,
              height: { xs: '48px', md: '40px' },
              fontWeight: '700',
              fontSize: { xs: '16px', md: '14px' },
              '&:hover': {
                backgroundColor: '#5a7bb8',
              },
            }}
            // disabled={loading}
            // onClick = {handleSubmit}
          >
            {/* {loading ? <CircularProgress size={24} color="inherit" /> :
             'Sign In'
             
             
             } */}
            Sign Up
          </Button>

          {/* <Typography sx={styles.forgetPassword}>
            Forgot Password
          </Typography> */}
        </form>
      </Box>
    </Box>
  );
};

export default Login;

const styles = {
  forgetPassword: {
    color: '#6484C1',

    cursor: 'pointer',
    textAlign: 'center',
    mt: 1,
    fontWeight: '600',
    fontSize: { xs: '14px', md: '16px' },
    padding: { xs: '8px', md: '0' },
  },

  emailStyle: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#888',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1976d2',
        borderWidth: '1px',
      },
      height: { xs: '44px', md: 'auto' },
    },
    '& .MuiInputBase-input::placeholder': {
      opacity: 1,
      color: '#999',
      fontSize: { xs: '14px', md: '16px' },
    },
  },

  contentStyle: {
    width: {
      xs: '100%',
      sm: '80vw',
      md: '50vw',
      lg: '34vw',
    },
    height: {
      xs: 'auto',
      sm: '80vh',
      md: '76vh',
    },
    maxWidth: { xs: '400px', sm: '500px', md: 'none' },
    backgroundColor: '#fff',
    borderRadius: { xs: '16px', md: '12px' },
    padding: {
      xs: 4,
      sm: 6,
      md: 6,
    },
    zIndex: 2,
    position: { xs: 'relative', md: 'absolute' },
    top: { xs: 'auto', md: '50%' },
    left: { xs: 'auto', md: '50%' },
    transform: { xs: 'none', md: 'translate(-50%,-50%)' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 2, sm: 2.5, md: 3, lg: 4, xl: 6 },
    margin: { xs: '0 auto', md: '0' },
    minHeight: { xs: 'calc(100vh - 32px)', sm: 'auto' },
    justifyContent: { xs: 'center', md: 'flex-start' },
  },
};
