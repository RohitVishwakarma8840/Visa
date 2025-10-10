import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Switch,
  FormControlLabel,
  IconButton,
  Alert,
 // For image/slots error text
} from "@mui/material";
import { Upload, Plus, Trash2, Clock } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createTurf } from "../store/slices/turfSlice";

const CreateTurf = () => {
  // const [errors, setErrors] = useState({});
  // const [generalError, setGeneralError] = useState('');
  const dispatch = useDispatch();
  const {turf,error} = useSelector((state) => state.turf);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    image: null,
    available: true,
    availableSlots: [{ time: "" }],
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error on change
    // if (errors[field]) {
    //   setErrors((prev) => ({ ...prev, [field]: '' }));
    // }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
      // Clear image error
      // if (errors.image) {
      //   setErrors((prev) => ({ ...prev, image: '' }));
      // }
    }
  };

  const handleSlotChange = (index, value) => {
    const updatedSlots = [...formData.availableSlots];
    updatedSlots[index].time = value;
    setFormData((prev) => ({ ...prev, availableSlots: updatedSlots }));
    // Clear slots error if present
    // if (errors.availableSlots) {
    //   setErrors((prev) => ({ ...prev, availableSlots: '' }));
    // }
  };

  const addSlot = () => {
    setFormData((prev) => ({
      ...prev,
      availableSlots: [...prev.availableSlots, { time: "" }],
    }));
  };

  const removeSlot = (index) => {
    const updatedSlots = formData.availableSlots.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, availableSlots: updatedSlots }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side image check (clears on upload)
    if (!formData.image) {
      // setErrors({ image: "Please upload a turf image!" });
      // setGeneralError('');
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("location", formData.location);
    data.append("price", Number(formData.price));
    data.append("available", String(formData.available));
    data.append("image", formData.image);
    data.append("availableSlots", JSON.stringify(formData.availableSlots));

    try {
      const res = await dispatch(createTurf(data)).unwrap();
      console.log("Turf created:", res);

      // Clear form and errors on success
      setFormData({
        name: "",
        description: "",
        location: "",
        price: "",
        image: null,
        available: true,
        availableSlots: [{ time: "" }],
      });
      setImagePreview(null);
      // setErrors({});
      // setGeneralError('');
      // alert("Turf created successfully!");
    } 
   catch (err) {
  console.error("Error creating turf:", err);

  // When using unwrap(), err contains backend response data
  // if (err && err.errors) {
  //   setErrors(err.errors); // { name: "...", description: "...", etc. }
  //   setGeneralError('');
  // } 
  // else if (err && err.message) {
  //   // If backend sent { message: "...something..." }
  //   setGeneralError(err.message);
  //   alert(err.message)
  // } 
  // else {
  //   // Fallback for unexpected cases
  //   setGeneralError('Something went wrong. Please try again.');
  // }
}

  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create a New Turf
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* Turf Name - Error shows under this field if backend sends errors.name */}
          <TextField
            label="Turf Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            fullWidth
            margin="normal"
            error={!!error?.name}
            helperText={error?.name}
          />

          {/* {  <Typography color="error" variant="body2" sx={{ mt: 1 }}>
    {error?.name}
  </Typography>
} */}

          {/* Image Upload - Error shows below button if errors.image */}
          <Box sx={{ my: 2 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<Upload size={20} />}
              fullWidth
            >
              Upload Turf Image
              <input type="file" hidden accept="image/*" onChange={handleImageChange} />
            </Button>
            {/* {errors.image && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.image}
              </Typography>
            )} */}
            {imagePreview && (
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxHeight: 200, borderRadius: 8 }}
                />
              </Box>
            )}
          </Box>

          {/* Description - Error under this field if errors.description */}
          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!error?.description}
            helperText={error?.description}
          />

          {/* Location & Price - Errors under each if errors.location or errors.price */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                required
                fullWidth
                margin="normal"
                error={!!error?.location}
                helperText={error?.location}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Price per Hour (₹)"
                type="number"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                required
                fullWidth
                margin="normal"
                error={!!error?.price}
                helperText={error?.price}
              />
            </Grid>
          </Grid>

          {/* General Error Alert - For non-field errors like server issues */}
          {/* {generalError && (
            <Alert severity="error" sx={{ mt: 2 }} onClose={() => setGeneralError('')}>
              {generalError}
            </Alert>
          )} */}

          {/* Availability */}
          <FormControlLabel
            control={
              <Switch
                checked={formData.available}
                onChange={(e) => handleChange("available", e.target.checked)}
              />
            }
            label={formData.available ? "Available" : "Unavailable"}
            sx={{ mt: 2 }}
          />

          {/* Available Slots - Error under slots if errors.availableSlots */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Clock size={20} /> Available Time Slots
            </Typography>

            {formData.availableSlots.map((slot, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                <TextField
                  type="time"
                  value={slot.time}
                  onChange={(e) => handleSlotChange(index, e.target.value)}
                  required
                  fullWidth
                  error={!!error?.availableSlots}
                  helperText={error?.availableSlots} // Shows under each slot field
                />
                {formData.availableSlots.length > 1 && (
                  <IconButton color="error" onClick={() => removeSlot(index)}>
                    <Trash2 size={20} />
                  </IconButton>
                )}
              </Box>
            ))}

            {/* Extra display if no slots selected */}
            {/* {errors.availableSlots && !formData.availableSlots.some(slot => slot.time) && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.availableSlots}
              </Typography>
            )} */}

            <Button
              variant="outlined"
              startIcon={<Plus size={20} />}
              onClick={addSlot}
              sx={{ mt: 2 }}
              fullWidth
            >
              Add Time Slot
            </Button>
          </Box>

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 4, py: 1.5 }}
          >
            Create Turf
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateTurf;