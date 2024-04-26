import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const AdoptionCard = ({ adoption }) => {
  const { firstName, lastName, email, address, createdAt } = adoption;
  const { pet } = adoption;

  const {
    name,
    breed,
    age,
    color,
    description,
    image,
    adoptionStatus,
    additionalImages,
    updatedAt,
  } = pet;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {/* User Details */}
          <Grid item xs={6}>
            <Typography variant="h6">User Details:</Typography>
            <Typography>
              Name: {firstName} {lastName}
            </Typography>
            <Typography>Email: {email}</Typography>
            <Typography>Address: {address}</Typography>
            <Typography>Created At: {new Date(createdAt).toLocaleString()}</Typography>
          </Grid>

          {/* Pet Details */}
          <Grid item xs={6}>
            <Typography variant="h6">Pet Details:</Typography>
            <Typography style={{ color: 'green' }}>Name: {name}</Typography>
            <Typography>Breed: {breed}</Typography>
            <Typography>Age: {age}</Typography>
            <Typography>Color: {color}</Typography>
            <Typography>Description: {description}</Typography>
            <Typography style={{ color: 'red' }}>Adoption Status: {adoptionStatus}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AdoptionCard;
