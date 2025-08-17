import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import ChallengeForm from "./components/ChallengeForm";
import CampusForm from "./components/CampusForm";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: "grey.50", minHeight: "100vh" }}>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Typography variant="h6" component="h1">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          component="main"
          maxWidth={false}
          disableGutters
          sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}
        >
          <Grid container spacing={4} alignItems="stretch">
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
      </Box>
    </>
  );
}

export default App;
