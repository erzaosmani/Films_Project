import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useSignUpFormik } from "../components/SignUp/SignUpForm/useSignUpFormik";

export const ForgotPassword = () => {
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
          onSubmit={formik.handleSubmit}
        >
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.errors.email}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
