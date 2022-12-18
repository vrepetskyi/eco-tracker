import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const DAYS_NAMES = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const index = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

export default function ActivityChart() {
  const { completed } = useSelector((state) => state.todos);
  const [data, setData] = useState([]);

  const completedDates = completed.map((task) => new Date(task.date));

  useEffect(() => {
    const dataInit = [];

    dataInit[6] = { name: "Today", tasks: 0 };

    for (let i = index - 1, k = 5; k >= 0; i--, k--) {
      if (i < 0) i = 6;

      dataInit[k] = { name: DAYS_NAMES[i], tasks: 0 };
    }

    setData(dataInit);
  }, []);

  useEffect(() => {
    const dataInit = [];

    dataInit[6] = { name: "Today", tasks: 0 };

    for (let i = index - 1, k = 5; k >= 0; i--, k--) {
      if (i < 0) i = 6;

      dataInit[k] = { name: DAYS_NAMES[i], tasks: 0 };
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

      for (const date of completedDates) {
        if (date > dayBegin && date < dayEnd) {
          dataInit[i].tasks += 1;
        }
      }
    }

    setData(dataInit);
  }, [completed]);

  return (
    <ResponsiveContainer height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="5 10" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} width={32} />
        <Tooltip />
        <Bar dataKey="tasks" fill="#EFA16C" name="Tasks completed" />
      </BarChart>
    </ResponsiveContainer>
  );
}
