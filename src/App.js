import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container, Grid, Paper, TextField, MenuItem } from '@mui/material';

const steps = ['Personal Information', 'Medical Condition', 'Contact Information'];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    country: '',
    department: '',
    disease: '',
    report: '',
    email: '',
    phone: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Submit form data to backend or perform other actions
    console.log(formData);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="age"
                label="Age"
                value={formData.age}
                onChange={handleChange}
                select
                fullWidth
                required
              >
                {[...Array(100)].map((_, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="gender"
                label="Gender"
                value={formData.gender}
                onChange={handleChange}
                select
                fullWidth
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="country"
                label="Country"
                value={formData.country}
                onChange={handleChange}
                select
                fullWidth
                required
              >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                {/* Add more countries as needed */}
              </TextField>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="department"
                label="Department"
                value={formData.department}
                onChange={handleChange}
                select
                fullWidth
                required
              >
                <MenuItem value="cardiology">Cardiology</MenuItem>
                <MenuItem value="neurology">Neurology</MenuItem>
                <MenuItem value="orthopedics">Orthopedics</MenuItem>
                {/* Add more departments as needed */}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="disease"
                label="Disease"
                value={formData.disease}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="report"
                label="Upload Reports"
                type="file"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email Address"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
  };

  const isLastStep = step === steps.length - 1;

  return (
    <Container>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        {step === steps.length ? (
          <div>
            <Typography variant="h5" gutterBottom>
              Summary
            </Typography>
            <Typography variant="body1" gutterBottom>
              Name: {formData.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Age: {formData.age}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Gender: {formData.gender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Country: {formData.country}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Department: {formData.department}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Disease: {formData.disease}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {formData.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: {formData.phone}
            </Typography>
            <Button onClick={handleBack}>Back</Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(step)}
            <div style={{ marginTop: '20px' }}>
              <Button disabled={step === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {isLastStep ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default MultiStepForm;
