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
} from "@mui/material";
import { Upload, Plus, Trash2, Clock } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createTurf } from "../store/slices/turfSlice";

const CreateTurf = () => {


const dispatch = useDispatch();

const turf = useSelector((state)=>state.turf);


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
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSlotChange = (index, value) => {
    const updatedSlots = [...formData.availableSlots];
    updatedSlots[index].time = value;
    setFormData((prev) => ({ ...prev, availableSlots: updatedSlots }));
  };

  const addSlot = () => {
    setFormData((prev) => ({
      ...prev,
      availableSlots: [...prev.availableSlots, { time: "" }],
    }));
  };

  // we are filtering the slots which are not equal to the index 
  const removeSlot = (index) => {
    const updatedSlots = formData.availableSlots.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, availableSlots: updatedSlots }));
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.image) {
    alert("Please upload a turf image!");
    return;
  }

  const data = new FormData();
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("location", formData.location);
  data.append("price", Number(formData.price));
  data.append("available", String(formData.available));
  data.append("image", formData.image); // only once
  data.append("availableSlots", JSON.stringify(formData.availableSlots)); 

  dispatch(createTurf(data))
    .unwrap()
    .then((res) => {
      console.log("Turf created:", res);
      alert("Turf created successfully!");
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
    })
    .catch((err) => {
      console.error("Error creating turf:", err);
      alert(err || "Error creating turf. Please try again.");
    });
};


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create a New Turf
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* Turf Name */}
          <TextField
            label="Turf Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            fullWidth
            margin="normal"
          />

          {/* Image Upload */}
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

          {/* Description */}
          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />

          {/* Location & Price */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                required
                fullWidth
                margin="normal"
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
              />
            </Grid>
          </Grid>

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

          {/* Available Slots */}
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
                />
                {formData.availableSlots.length > 1 && (
                  <IconButton color="error" onClick={() => removeSlot(index)}>
                    <Trash2 size={20} />
                  </IconButton>
                )}
              </Box>
            ))}

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
