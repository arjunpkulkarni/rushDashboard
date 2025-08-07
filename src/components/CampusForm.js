import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const CampusForm = () => {
  const [name, setName] = useState("");
  const [campuses, setCampuses] = useState([]);

  const fetchCampuses = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/campus");
      setCampuses(response.data);
    } catch (err) {
      console.error("Error fetching campuses:", err);
    }
  };

  useEffect(() => {
    fetchCampuses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/campus", { name });
      alert("Campus created successfully!");
      setName("");
      fetchCampuses(); // Refresh the list
    } catch (err) {
      console.error(err);
      alert("Failed to create campus");
    }
  };

  return (
    <Stack spacing={4}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create New Campus
        </Typography>
        <Stack
          component="form"
          spacing={3}
          onSubmit={handleSubmit}
          sx={{ mt: 2 }}
        >
          <TextField
            label="Campus Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button variant="contained" type="submit" size="large">
            Create Campus
          </Button>
        </Stack>
      </Paper>

      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Existing Campuses
        </Typography>
        <List>
          {campuses.map((campus, index) => (
            <React.Fragment key={campus.id}>
              <ListItem>
                <ListItemText
                  primary={campus.name}
                  secondary={`ID: ${campus.id}`}
                />
              </ListItem>
              {index < campuses.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Stack>
  );
};

export default CampusForm;
