import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Data from './Data/Data';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Booking from './components/auth/Booking/Booking';
import './index.css';
import UserBooking from './components/UserBooking';
import CreateTurf from './components/CreateTurf';
import GetBookings from './components/AdminPages/GetBookings';
// import { Dashboard } from '@mui/icons-material';
import DashboardLayout from './components/layout/Dashboardlayout';

function App() {
  const { isAuthenticated,isManager } = useSelector((state) => state.auth);
  console.log('isManager 11111', isManager)

  console.log('Authentication Status:', isAuthenticated);
  return (
    <Box sx={{ width: '100vw' }}>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route
                path="/"
                element={

                 
                  <>
                    <Navbar />
                    <Header />
                    <Data />
                    <Footer />
                  </>
                }
              />
              <Route path="/booking/:turfId" element={<Booking />} />
              <Route path="/user-booking" element={<UserBooking/>} />

                     <Route
                path="/create-turf"
                element={isManager ? <DashboardLayout><CreateTurf /></DashboardLayout> : <Navigate to="/" replace />}
              />

              <Route
              path="/get-booking"
              element = {isManager ? <DashboardLayout><GetBookings/></DashboardLayout> : <Navigate to="/" replace />}   />
             
              
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;