import React from "react";
import { Bar } from "react-chartjs-2";

export default () => (
  <div>
    <h1>Using ChartJS</h1>
    <Bar
      data={{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Responses",
            data: [120, 190, 30, 50, 20, 30],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderWidth: 1
          }
        ]
      }}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false
      }}
    />
  </div>
);
