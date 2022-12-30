import { Box, Button, TextField } from "@mui/material";
import React from "react";

export const ForgotPassword = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: 2,
          borderColor: "secondary.main",
          borderRadius: 1,
          padding: "10px",
          minWidth: 360,
        }}
      >
        <h3>Forgot your password?</h3>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 4,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
