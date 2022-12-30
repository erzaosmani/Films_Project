import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import { useLoginFormik } from './useLoginFormik';

export const LoginForm = () => {

    const formik=useLoginFormik({
        onSubmit(values, formikHelpers) {
            console.log("Formik values", values);
        },
      });
    
  return (
    <Box 
       component="form"
       sx={{
        display:"flex",
        flexDirection:"column",
        marginTop:4,
      }}

      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
       
       >
        <TextField
        id="username"
        label="username"
        variant="outlined"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        sx={{marginBottom:2}}
        error={formik.touched.username && !!formik.errors.username}
        helperText={formik.errors.username}
        />

        
       <TextField

      id="password"
      label="password"
      type="password"
      variant="outlined"
      value={formik.values.password}
      onChange={formik.handleChange}
      sx={{marginBottom:2}}
      error={formik.touched.password && !!formik.errors.password}
        helperText={formik.errors.password}

/>

<Button type="submit" variant="contained">
      Login
</Button>
       </Box>

  )
}
