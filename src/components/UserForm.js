import React, { useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
} from '@mui/material';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    campusId: 'uiuc123',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/v1/users', formData);
      alert('User created successfully!');
      setFormData({
        email: '',
        name: '',
        password: '',
        campusId: '',
      });
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  return (
    <Paper elevation={4} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New User
      </Typography>
      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
      >
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="Campus ID"
          name="campusId"
          value={formData.campusId}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit" size="large">
          Create User
        </Button>
      </Stack>
    </Paper>
  );
};

export default UserForm;
