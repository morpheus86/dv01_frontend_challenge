import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useSelector } from "react-redux";

/**
 *
 * BONUS POINTS(optional):
  Build a Bar graph (reference `./wireframe/Bar Chart.png`) using a library of your choosing, where the x-axis is the loan grouped by grade and the y-axis is the total current balance for each grade.
    - If you don't know a charting library, we recommend `recharts` which is already included in the package.json

  The filter dropdowns should update both the table and bar graph
 */

// recharts package is putting a warning message regarding ComponentWillReceiveProps, I wanted to point this out

const TableChart = () => {
  const { chartData } = useSelector((state) => state.data);
  return (
    <BarChart
      width={800}
      height={400}
      data={chartData}
      margin={{
        top: 10,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="grade" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="totalByGrade" fill="#333" />
    </BarChart>
  );
};

export default TableChart;
