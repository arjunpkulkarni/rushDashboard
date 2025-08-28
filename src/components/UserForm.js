import React, { useState } from 'react';
import axios from 'axios';
import { Paper, Stack, TextField, Button, Typography } from '@mui/material';
import { UserPlus, Loader2, Mail, User as UserIcon, Lock, Building } from "lucide-react";

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
      await axios.post('https://exemplary-charm-production.up.railway.app/api/v1/users', formData);
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
    <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: "var(--mui-shadows-2)" }}>
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <UserPlus size={16} /> Create New User
      </Typography>
      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
      >
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={14} /> Email</span>}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><UserIcon size={14} /> Name</span>}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Lock size={14} /> Password</span>}
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextField
          label={<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Building size={14} /> Campus ID</span>}
          name="campusId"
          value={formData.campusId}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit" size="large" startIcon={<UserPlus size={16} />}>Create User</Button>
      </Stack>
    </Paper>
  );
};

export default UserForm;
