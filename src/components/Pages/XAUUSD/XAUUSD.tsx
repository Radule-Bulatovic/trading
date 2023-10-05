import { Box, Card, Grid, Typography } from '@mui/material';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Cell,
  Pie,
  PieChart
} from 'recharts';

import { DATA } from '../../../constants';
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const XAUUSD = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={8}>
      <Typography textAlign={'center'} variant="h1">
        XAU/USD
      </Typography>

      <Graph data={DATA.VOLATILITY.BY_HOUR.SUMMER} title="Volatility by hour summer" />
      <Graph data={DATA.VOLATILITY.BY_HOUR.WINTER} title="Volatility by hour winter" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography textAlign={'center'} variant="h3">
            Success rate
          </Typography>
        </Grid>
        {DATA.SUCCESS.map((result, i) => (
          <Grid item xs={6} key={i}>
            <PieGraph result={result} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

type Props = {
  result: {
    config: {
      START_TIME: number;
      END_TIME: number;
      TRADING_HOURS: number[];
      STOP_LOSS: number;
      TAKE_PROFIT: number;
      SAMPLE: string;
    };
    data: {
      label: string;
      value: number;
    }[];
  };
};
const Graph = ({
  data,
  title
}: {
  data: {
    label: string;
    value: number;
  }[];
  title: string;
}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={4}
      justifyContent={'center'}
      alignItems={'center'}>
      <Typography textAlign={'center'} variant="h4">
        {title}
      </Typography>
      <LineChart width={1600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </Box>
  );
};

const PieGraph = ({ result: { data, config } }: Props) => {
  return (
    <Box
      component={Card}
      display={'flex'}
      flexDirection={'column'}
      gap={4}
      justifyContent={'center'}
      alignItems={'center'}>
      <Typography  variant="h6">
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </Typography>
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label={renderCustomizedLabel}
          dataKey="value">
          {data.map((entry, index) => {
            return (
              <Cell key={`cell-${index}`} fill={entry.label === 'fail' ? '#FF0D0D' : '#1FAC13'} />
            );
          })}
        </Pie>
      </PieChart>
    </Box>
  );
};
