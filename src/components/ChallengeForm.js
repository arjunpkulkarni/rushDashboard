import React, { useState } from "react";
import axios from "axios";
import { Paper, Stack, TextField, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";
import { Trophy, Plus, Loader2, Calendar, Clock, Image as ImageIcon, Lightbulb, FileText, Building } from "lucide-react";

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
      // Convert local datetime inputs to UTC ISO for consistent backend storage
      const payload = {
        ...formData,
        scheduledAt: formData.scheduledAt ? new Date(formData.scheduledAt).toISOString() : null,
        expiresAt: formData.expiresAt ? new Date(formData.expiresAt).toISOString() : null,
      };

      await axios.post("https://exemplary-charm-production.up.railway.app/api/v1/challenges", payload);
      alert("Challenge created successfully!");
      setFormData(initialState);
    } catch (err) {
      console.error(err);
      alert("Failed to create challenge");
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: "var(--mui-shadows-2)" }}>
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Trophy size={16} /> Create New Challenge
      </Typography>

      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
      >
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Building size={14} /> Campus ID</span>}
          name="campusId"
          value={formData.campusId}
          onChange={handleChange}
          required
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FileText size={14} /> Title</span>}
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FileText size={14} /> Description</span>}
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          required
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Lightbulb size={14} /> Hint (optional)</span>}
          name="hint"
          value={formData.hint}
          onChange={handleChange}
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><ImageIcon size={14} /> Media URL (optional)</span>}
          name="mediaUrl"
          value={formData.mediaUrl}
          onChange={handleChange}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={14} /> Scheduled At</span>}
            name="scheduledAt"
            type="datetime-local"
            value={formData.scheduledAt}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />
          <TextField
            label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={14} /> Expires At</span>}
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
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Trophy size={14} /> Bonus Challenge</span>}
        />
        <Button variant="contained" type="submit" size="large" startIcon={<Plus size={16} />}>Create Challenge</Button>
      </Stack>
    </Paper>
  );
};

export default ChallengeForm;
