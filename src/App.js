import React from "react";
import { CssBaseline, Typography, Container, Grid, Box, Stack, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Settings, Users, Trophy } from "lucide-react";
import ChallengeForm from "./components/ChallengeForm";
import CampusForm from "./components/CampusForm";
import UserForm from "./components/UserForm";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#0f172a0d",
      paper: "#ffffff",
    },
    primary: { main: "#4f46e5" },
    secondary: { main: "#0ea5e9" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* Header */}
        <Box sx={{ bgcolor: "background.paper", borderBottom: 1, borderColor: "divider" }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ py: 2.5 }}>
              <Paper elevation={0} sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Settings size={16} color="#fff" />
              </Paper>
              <Typography variant="h5" fontWeight={700}>Admin Dashboard</Typography>
            </Stack>
          </Container>
        </Box>

        {/* Main */}
        <Container component="main" maxWidth={false} disableGutters sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={4} alignItems="stretch">
            {/* Campus Management */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2} sx={{ height: "100%" }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 0.5 }}>
                  <Settings size={18} color={theme.palette.primary.main} />
                  <Typography variant="subtitle1" fontWeight={600}>Campus Management</Typography>
                </Stack>
                <CampusForm />
              </Stack>
            </Grid>

            {/* User Management */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2} sx={{ height: "100%" }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 0.5 }}>
                  <Users size={18} color={theme.palette.primary.main} />
                  <Typography variant="subtitle1" fontWeight={600}>User Management</Typography>
                </Stack>
                <UserForm />
              </Stack>
            </Grid>

            {/* Challenge Management */}
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 0.5 }}>
                  <Trophy size={18} color={theme.palette.primary.main} />
                  <Typography variant="subtitle1" fontWeight={600}>Challenge Management</Typography>
                </Stack>
                <ChallengeForm />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
