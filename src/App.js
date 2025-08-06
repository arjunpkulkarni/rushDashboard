import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import ChallengeForm from "./components/ChallengeForm";

function App() {
  return (
    <>
      {/* Consistent baseline & fonts */}
      <CssBaseline />

      {/* Top bar */}
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Challenge Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <ChallengeForm />
      </Container>
    </>
  );
}

export default App;
