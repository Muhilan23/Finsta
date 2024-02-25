import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #f2f2f2, #e0e0e0)",
  }}
>
  <Typography
    variant="h1"
    sx={{
      fontSize: "64px",
      fontWeight: "bold",
      color: "#333",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      mb: 4,
    }}
  >
    Finsta
  </Typography>
  <Box
    sx={{
      width: "50%",
      padding: "4rem",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      background: "#fff",
    }}
  >
    <Typography variant="h5" sx={{ mb: 3, fontWeight: "500" }}>
      Welcome to Finsta, the Fake Insta
    </Typography>
    <Form />
  </Box>
</Box>
  );
};

export default LoginPage;
