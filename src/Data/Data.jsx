import React, { useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import Cards from '../components/Cards';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllTurfs } from '../store/slices/turfSlice';
import PaginationComponent from '../components/pagination/PaginationComponent';

// const data = [
//   {
//     id: 1,
//     image: "/tennis_court.jpg",
//     title: "V Sports Academy",
//     description:
//       "Elevate your athletic journey at V Sports Academy, where excellence meets opportunity.",
//     location: "Port Alsworth, AK",
//     availability: "12 April 2023",
//     rating: 4.0,
//     reviews: 30,
//     price: 350,
//     user: "Vishnu",
//   },
//   {
//     id: 2,
//     image: "/badminton.jpg",
//     title: "Badminton Academy",
//     description:
//       "Unleash your badminton potential at our premier Badminton Academy.",
//     location: "Sacramento, CA",
//     availability: "Today",
//     rating: 4.5,
//     reviews: 45,
//     price: 350,
//     user: "Vimal",
//   },
//   {
//     id: 3,
//     image: "/player.jpg",
//     title: "X Academy",
//     description:
//       "Where dreams meet excellence in sports education and training.",
//     location: "Sacramento, CA",
//     availability: "Today",
//     rating: 2.5,
//     reviews: 10,
//     price: 350,
//     user: "Vikram",
//   },
//   {
//     id: 4,
//     image: "/turf.png",
//     title: "X Academy",
//     description:
//       "Where dreams meet excellence in sports education and training.",
//     location: "Sacramento, CA",
//     availability: "Today",
//     rating: 2.5,
//     reviews: 10,
//     price: 350,
//     user: "Vikram",
//   },
//   {
//     id: 5,
//     image: "/island.jpg",
//     title: "X Academy",
//     description:
//       "Where dreams meet excellence in sports education and training.",
//     location: "Sacramento, CA",
//     availability: "Today",
//     rating: 2.5,
//     reviews: 10,
//     price: 350,
//     user: "Vikram",
//   },
//   {
//     id: 6,
//     image: "/rubber.jpg",
//     title: "X Academy",
//     description:
//       "Where dreams meet excellence in sports education and training.",
//     location: "Sacramento, CA",
//     availability: "Today",
//     rating: 2.5,
//     reviews: 10,
//     price: 350,
//     user: "Vikram",
//   },

// ];

const Data = () => {
  const dispatch = useDispatch();
  const { turfs, loading, error } = useSelector((state) => state.turf);
  // console.log(state.turf.turfs);
  const data = turfs.turfs || [];


  useEffect(() => {
  if (data.length > 0 && currentPage > Math.ceil(data.length / itemPerPage)) {
    setCurrentPage(1); // or totalPages
  }
}, [data.length]);


  // console.log(data,"data in the data component i ma ");

  // console.log(turfs, 'Getting on the data com');
  useEffect(() => {
    dispatch(getAllTurfs());
  }, [dispatch]);

 const [currentPage,setCurrentPage] = useState(1);
 const itemPerPage = 5;

 const totalPages = Math.ceil(data.length/itemPerPage);
 console.log('totalPages', totalPages)

 const Disdata = data.slice(
  (currentPage-1)*itemPerPage,
  currentPage*itemPerPage
 );

 console.log(Disdata,"here i am ")


  const handleChange = (event,value)=>{
      setCurrentPage(value);
      alert('it worked ');
  }




  return (
      <Box
      sx={{
        bgcolor: '#F6F6F6',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        marginTop: {
          sm: '0',
          md: '20px',
          lg: '30px',
        },
      }}
    >
      {/* Cards Container */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          justifyContent: 'center',
          flexWrap: 'wrap',
          flex: 1,
          alignContent: 'flex-start', // Keep cards at top
        }}
      >
        {Disdata.map((academy) => (
          <Cards
            key={academy._id}
            {...academy}
            turfId={academy._id}
          />
        ))}
      </Box>

      {/* Pagination - Always at bottom */}
      <PaginationComponent
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        handleChange={handleChange}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default Data;
