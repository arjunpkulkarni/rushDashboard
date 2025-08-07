import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import ChallengeForm from "./components/ChallengeForm";
import CampusForm from "./components/CampusForm";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CampusForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <UserForm />
          </Grid>
          <Grid item xs={12}>
            <ChallengeForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
