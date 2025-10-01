import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Cards from '../components/Cards';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllTurfs } from '../store/slices/turfSlice';

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

  // console.log(turfs, 'Getting on the data com');
  useEffect(() => {
    dispatch(getAllTurfs());
  }, [dispatch]);
  return (
    <Box
      sx={{
        bgcolor: '#F6F6F',
        bgcolor: '#F2F2F2',
        // bgcolor:'#000',
        display: 'flex',
        gap: 3,
        justifyContent: 'center',
        flexWrap: 'wrap',
        p: 4,
        height: 'auto',
        overflow: 'hidden',
        marginTop: {
          sm: '0',
          md: '20px',
          lg: '30px',
        },
      }}
    >
      {data.map((academy, i) => (
        // <Cards key={i} {...academy} />
        <Cards 
        key={i} 
        //  key={academy._id}
          {...academy}
          turfId={academy._id}  // Pass turfId as a prop
        
        />
        
      ))}

      {/* <h1>Hello</h1> */}
    </Box>
  );
};

export default Data;
