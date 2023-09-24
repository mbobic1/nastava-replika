'use client'
import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Paper, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const Register = () => {
    const [selectedRole, setSelectedRole] = useState('student');

    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
    };
  return (
    <div className='flex h-screen items-center justify-center' >
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register as a {selectedRole === 'student' ? 'Student' : 'Professor'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <RadioGroup value={selectedRole} onChange={handleRoleChange} row>
            <FormControlLabel value="student" control={<Radio />} label="Student" />
            <FormControlLabel value="professor" control={<Radio />} label="Professor" />
          </RadioGroup>
          {/* Add registration fields (name, email, password, etc.) here */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
    </div>
  );
}

export default Register;