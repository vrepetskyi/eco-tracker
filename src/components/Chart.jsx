// import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Container} from '@mui/material';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3500, pv: 1350, amt: 2250 },
    { name: 'Page C', uv: 2200, pv: 9600, amt: 2220 },
    { name: 'Page D', uv: 2900, pv: 3700, amt: 2100 },
    { name: 'Page E', uv: 2000, pv: 5000, amt: 2200 },
    { name: 'Page F', uv: 2500, pv: 3600, amt: 2450 },
    { name: 'Page G', uv: 3300, pv: 4200, amt: 2200 },
    { name: 'Page H', uv: 3200, pv: 4100, amt: 2000 },
    { name: 'Page I', uv: 3000, pv: 3900, amt: 2200 },
    { name: 'Page J', uv: 3200, pv: 4000, amt: 2300 },
    { name: 'Page K', uv: 3400, pv: 4200, amt: 2350 },
    { name: 'Page L', uv: 3100, pv: 3800, amt: 2000 },
    { name: 'Page M', uv: 3300, pv: 4100, amt: 2150 },
    { name: 'Page N', uv: 2900, pv: 3700, amt: 2000 },
    { name: 'Page O', uv: 3100, pv: 3900, amt: 2100 },
    { name: 'Page P', uv: 3300, pv: 4100, amt: 2150 },
    { name: 'Page Q', uv: 2900, pv: 3700, amt: 2000 },
    { name: 'Page R', uv: 3100, pv: 3900, amt: 2100 },
    { name: 'Page S', uv: 3300, pv: 4100, amt: 2150 },
    { name: 'Page T', uv: 2900, pv: 3700, amt: 2000 },
    { name: 'Page U', uv: 3100, pv: 3900, amt: 2100 },
    { name: 'Page V', uv: 3300, pv: 4100, amt: 2150 },
    { name: 'Page W', uv: 2900, pv: 3700, amt: 2000 },
    { name: 'Page X', uv: 3100, pv: 3900, amt: 2100 },
    { name: 'Page Y', uv: 3300, pv: 4100, amt: 2150 },
    { name: 'Page Z', uv: 2900, pv: 3700, amt: 2000 },
    { name: 'Page AA', uv: 3100, pv: 3900, amt: 2100 },
    { name: 'Page AB', uv: 3300, pv: 4100, amt: 2150 }
];  
  

export default function AFuckingChart({datal}) {

    return (
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="uv" barSize={20} fill="#413ea0" />
          <Line yAxisId="right" dataKey="pv" stroke="#ff7300" />
        </ComposedChart>
    );
}