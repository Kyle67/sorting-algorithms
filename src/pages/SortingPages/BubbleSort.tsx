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

  useEffect(() => {
    alert(data);
  }, [data]);

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

  let counter = 0;

  return (
    <Box>
      <h2>Bubble Sort!!!</h2>
      <Bar redraw data={tableData} />
      <Button
        onClick={() => {
          if (counter === 0) {
            let temp = colours;
            temp[counter] = "blue";
            setColours(temp);
          }
          let tempData = data;
          let tempHolder = tempData[counter + 1];
          tempData[counter + 1] = tempData[counter];
          tempData[counter] = tempHolder;
          setData(tempData);
          counter++;
        }}
      >
        Click me
      </Button>
    </Box>
  );
};

export default BubbleSort;
