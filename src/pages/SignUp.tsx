import {
    Button,
    Checkbox,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  
  export const SignUp = () => {
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
          <h1>Create an account</h1>
  
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
              id="username"
              label="Username"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
  
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
  
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
  
            <TextField
              id="confirm-password"
              label="Confirm password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
  
            <TextField
              id="age"
              label="Age"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
  
            <InputLabel id="select-gender">Gender</InputLabel>
            <Select label="Gender">
              <MenuItem value={1}>F</MenuItem>
              <MenuItem value={2}>M</MenuItem>
            </Select>
  
            <InputLabel id="select-preferences">Preferences</InputLabel>
            <Select label="Preferences">
              <MenuItem value={1}>Action</MenuItem>
              <MenuItem value={2}>Comedy</MenuItem>
              <MenuItem value={3}>Sci-Fi</MenuItem>
              <MenuItem value={4}>Drama</MenuItem>
              <MenuItem value={5}>Thriller</MenuItem>
              <MenuItem value={6}>Other</MenuItem>
            </Select>
  
            <FormControlLabel
              control={<Checkbox />}
              label="Terms and Conditions"
            />
  
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
