import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { FormEvent } from 'react';

import { useCreateCampaign } from '../../../hooks';
import { Form } from '../../UI/Molecules/Form';

export const CampaignCreate = () => {
  const createCampaign = useCreateCampaign();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formDataObject: any = { installs: [] };
    data.forEach((value, key) => {
      if (key === 'name') {
        formDataObject.name = value;
      } else {
        formDataObject.installs.push({ day: key, value: +value });
      }
    });
    createCampaign(formDataObject);
    event.currentTarget.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography component="h1" variant="h5">
          Create Campaign
        </Typography>
        <Form handleSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};
