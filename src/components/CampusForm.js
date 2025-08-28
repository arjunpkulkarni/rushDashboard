import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Stack, TextField, Button, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Building2, Plus, Loader2 } from "lucide-react";

const CampusForm = () => {
  const [name, setName] = useState("");
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCampuses, setLoadingCampuses] = useState(true);

  const fetchCampuses = async () => {
    try {
      setLoadingCampuses(true);
      const response = await axios.get("https://exemplary-charm-production.up.railway.app/api/v1/campus");
      setCampuses(response.data);
    } catch (err) {
      console.error("Error fetching campuses:", err);
    }
    finally { setLoadingCampuses(false); }
  };

  useEffect(() => {
    fetchCampuses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://exemplary-charm-production.up.railway.app/api/v1/campus", { name });
      alert("Campus created successfully!");
      setName("");
      fetchCampuses(); // Refresh the list
    } catch (err) {
      console.error(err);
      alert("Failed to create campus");
    } finally { setLoading(false); }
  };

  return (
    <Stack spacing={4}>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: "var(--mui-shadows-2)" }}>
        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Plus size={16} /> Create New Campus
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
          <Button variant="contained" type="submit" size="large" disabled={loading || !name.trim()}
            startIcon={loading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
          >
            {loading ? 'Creating...' : 'Create Campus'}
          </Button>
        </Stack>
      </Paper>

      <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: "var(--mui-shadows-2)" }}>
        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Building2 size={16} /> Existing Campuses
        </Typography>
        <List>
          {loadingCampuses ? (
            <Typography variant="body2" color="text.secondary" sx={{ py: 3 }}>Loading...</Typography>
          ) : campuses.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ py: 3 }}>No campuses found</Typography>
          ) : campuses.map((campus, index) => (
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
