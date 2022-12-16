import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { GlobalStyles } from "@mui/material";
import Header from "./components/Header";


const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 430, pv: 2410, amt: 600}, {name: 'Page C', uv: 410, pv: 100, amt: 3400}];


export default function App() {

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            backgroundColor: "#E5F7D1",
          },
        }}
      />
      <Header />
      <button onClick={() => setTree(1)}>dshfksdfksdjfh</button>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}
