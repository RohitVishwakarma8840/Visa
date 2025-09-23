import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Cards from './components/Cards'
import Data from './Data/Data'
import Footer from './components/Footer'
import { Box } from '@mui/material'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Booking from './components/auth/Booking/Booking'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <Box sx={{width:'100vw'}}>
<Router>
      <Routes>
     {/* <Navbar/>  */}
     {/* <Route path='/' element={<Navbar/>}> */}
     {/* <Header/>  */}
      {/* <Data/>  */}
      {/* <Cards/> */}
     {/* <Footer/> */}

      <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Data/>
              <Footer />
            </>
          }
        />

      <Route path='/login' element={<Login/>}/>
      <Route path='/booking' element={<Booking/>}/>

       </Routes>
    </Router>
     </Box>


    </>
  )
}

export default App
