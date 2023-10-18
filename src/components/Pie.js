import React from "react";
import { PieChart, Pie } from "recharts";

const App = () => {
  // Sample data
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <div style={{ paddingLeft: "40px", paddingTop: "50px" }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          dataKey="students"
          outerRadius={70}
          innerRadius={30}
          fill="#0093AF"
        />
      </PieChart>
    </div>
  );
};

export default App;
