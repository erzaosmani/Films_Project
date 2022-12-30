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
import { useSignUpFormik } from "../components/SignUp/SignUpForm/useSignUpFormik";

export const SignUp = () => {
  const formik = useSignUpFormik({
    onSubmit(values, formikHelpers) {
      console.log("Formik values", values);
    },
  });
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
          onSubmit={formik.handleSubmit}
        >
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.username && !!formik.errors.username}
            helperText={formik.errors.username}
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.errors.email}
          />

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.errors.password}
          />

          <TextField
            id="confirm"
            label="Confirm password"
            variant="outlined"
            name="confirm"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.confirm && !!formik.errors.confirm}
            helperText={formik.errors.confirm}
          />

          <TextField
            id="age"
            label="Age"
            variant="outlined"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.age && !!formik.errors.age}
            helperText={formik.errors.age}
          />

          <InputLabel id="select-gender">Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.gender && !!formik.errors.gender}
          >
            <MenuItem value={1}>F</MenuItem>
            <MenuItem value={2}>M</MenuItem>
          </Select>

          <InputLabel id="select-preferences">Preferences</InputLabel>
          <Select label="Preferences" sx={{ marginBottom: 2 }}>
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
          
            sx={{ marginBottom: 2 }}
           

          />

          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
