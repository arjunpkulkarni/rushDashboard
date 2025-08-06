import React, { useState } from "react";
import axios from "axios";
import {
  Paper,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";

const initialState = {
  campusId: "",
  title: "",
  description: "",
  hint: "",
  mediaUrl: "",
  scheduledAt: "",
  expiresAt: "",
  isBonus: false,
};

const ChallengeForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/challenges", formData);
      alert("Challenge created successfully!");
      setFormData(initialState);
    } catch (err) {
      console.error(err);
      alert("Failed to create challenge");
    }
  };

  return (
    <Paper elevation={4} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Challenge
      </Typography>

      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
      >
        <TextField
          label="Campus ID"
          name="campusId"
          value={formData.campusId}
          onChange={handleChange}
          required
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          required
        />
        <TextField
          label="Hint (optional)"
          name="hint"
          value={formData.hint}
          onChange={handleChange}
        />
        <TextField
          label="Media URL (optional)"
          name="mediaUrl"
          value={formData.mediaUrl}
          onChange={handleChange}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            label="Scheduled At"
            name="scheduledAt"
            type="datetime-local"
            value={formData.scheduledAt}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
          <TextField
            label="Expires At"
            name="expiresAt"
            type="datetime-local"
            value={formData.expiresAt}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
        </Stack>
        <FormControlLabel
          control={
            <Checkbox
              name="isBonus"
              checked={formData.isBonus}
              onChange={handleChange}
            />
          }
          label="Bonus Challenge"
        />
        <Button variant="contained" type="submit" size="large">
          Create Challenge
        </Button>
      </Stack>
    </Paper>
  );
};

export default ChallengeForm;
