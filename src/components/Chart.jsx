import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';


const DAYS_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const index = (new Date()).getDay() === 0 ? 6 : (new Date()).getDay() - 1;



export default function AFuckingChart({completed}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataInit = [];

    dataInit[6] = {name: 'Today', tasks: 0};

    for (let i = index - 1, k = 5; k >= 0; i--, k--) {
      if (i < 0) i = 6;

      dataInit[k] = {name: DAYS_NAMES[i], tasks: 0};
    }

    setData(dataInit);
  }, [])

  useEffect(() => {
    const dataInit = [];

    dataInit[6] = {name: 'Today', tasks: 0};

    for (let i = index - 1, k = 5; k >= 0; i--, k--) {
      if (i < 0) i = 6;

      dataInit[k] = {name: DAYS_NAMES[i], tasks: 0};
    }

    let dayBegin = new Date();
    let dayEnd = new Date();
  
    dayBegin.setHours(0, 0, 0, 0);
    dayEnd.setHours(23, 59, 59, 99);
    dayBegin.setDate(dayBegin.getDate() + 1);
    dayEnd.setDate(dayEnd.getDate() + 1);
  
  
    for (let i = 6; i >= 0; i--) {
      dayBegin.setDate(dayBegin.getDate() - 1);
      dayEnd.setDate(dayEnd.getDate() - 1);
      
      for (const date of completed) {
        if (date > dayBegin && date < dayEnd) {
          dataInit[i].tasks += 1;
        }
      }
    }

    setData(dataInit);
  }, [completed])

  return (
    <BarChart width={400} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="tasks" fill="#F9AD57" name="Tasks completed" />
  </BarChart>
  );
}