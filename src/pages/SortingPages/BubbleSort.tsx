import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Seperate data generation into a helper file

// TODO: Update the colours on the table without having to hover over the table

const BubbleSort = () => {
  const [colours, setColours] = useState([
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(255, 99, 132, 1)",
  ]);
  const [data, setData] = useState([65, 29, 80]);
  const [key, setKey] = useState(0);
  const [counter, setCounter] = useState(0);

  const labels = ["Jan", "Feb", "Mar"];
  const tableData = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: data,
        backgroundColor: colours,
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <h2>Bubble Sort!!!</h2>
      <Bar key={key} redraw data={tableData} />
      <Button
        onClick={() => {
          // if (counter === 0) {
          let temp = colours;
          temp[counter] = "blue";
          setColours(temp);
          // }
          let tempData = data;
          let tempHolder = tempData[counter + 1];
          tempData[counter + 1] = tempData[counter];
          tempData[counter] = tempHolder;
          setData(tempData);
          setCounter(counter + 1);
          console.log(counter);
          setKey(Math.random());
        }}
      >
        Click me
      </Button>
    </Box>
  );
};

export default BubbleSort;
