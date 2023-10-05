import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts';

import { KEYS } from '../../../constants';
import { useFetchCampaigns } from '../../../hooks';

export const Campaigns = () => {
  const { data } = useFetchCampaigns();
  const [select, setSelect] = useState<string>(
    () => localStorage.getItem(KEYS.SELECTED_CAMPAIGN) || ''
  );

  const handleSelect = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    localStorage.setItem(KEYS.SELECTED_CAMPAIGN, value);
    setSelect(value);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={10} pt={10}>
      {data ? (
        <Box width={'20%'}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select campaign</InputLabel>
            <Select
              id="demo-simple-select"
              labelId="demo-simple-select-label"
              label="Select campaign"
              value={select}
              onChange={handleSelect}>
              {data?.data.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ) : null}
      <Box>
        <Typography pl={10} variant="h5">
          Installs
        </Typography>
        <LineChart
          margin={{ top: 40 }}
          width={800}
          height={300}
          data={data?.data.find((e) => e.id === select)?.installs}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </Box>
    </Box>
  );
};
