import { Box, Grid, TextField, Button } from '@mui/material';
import React from 'react';

type Props = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>
};

export const Form = ({handleSubmit}: Props) => {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField required fullWidth id="name" label="Campaign name" name="name" />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Monday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField type="number" required fullWidth id="monday" label="Monday" name="monday" />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Tuesday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField type="number" required fullWidth id="tuesday" label="Tuesday" name="tuesday" />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Wednesday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            fullWidth
            id="wednesday"
            label="Wednesday"
            name="wednesday"
          />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Thursday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            fullWidth
            id="thursday"
            label="Thursday"
            name="thursday"
          />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Friday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField type="number" required fullWidth id="friday" label="Friday" name="friday" />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Saturday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            fullWidth
            id="saturday"
            label="Saturday"
            name="saturday"
          />
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <label>Sunday</label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField type="number" required fullWidth id="sunday" label="Sunday" name="sunday" />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Create
      </Button>
    </Box>
  );
};
