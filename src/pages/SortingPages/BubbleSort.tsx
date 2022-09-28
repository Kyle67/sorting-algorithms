import React, { useEffect, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
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
import { generateColours, generateData } from "../../helper/generateData";
import { sortingDelay } from "../../consts/graphConsts";
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

// TODO: Show % sorted somewhere?

const BubbleSort = () => {
  const [dataValues, setDataValues] = useState(3);
  const [colours, setColours] = useState(generateColours(dataValues));
  const [data, setData] = useState(generateData(dataValues));
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

  const swap = (
    data: number[],
    setData: any, //TODO: type this
    index1: number,
    index2: number
  ) => {
    let tempData = data;
    let tempValue = tempData[index1];
    tempData[index1] = tempData[index2];
    tempData[index2] = tempValue;
  };

  // TODO: Highlight columns being compared. Also change colour of finalised sorting (i.e. values that don't need to be moved again)
  const bubbleSort = async () => {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - j; j++) {
        if (data[j] > data[j + 1]) {
          swap(data, setData, j, j + 1);
          setKey(Math.random());
          await new Promise((r) => setTimeout(r, sortingDelay));
          console.log("Sorting");
        }
      }
    }
  };

  return (
    <Box>
      <Heading>Bubble Sort!!!</Heading>
      <Bar key={key} redraw data={tableData} />
      <Button
        onClick={() => {
          // // if (counter === 0) {
          // let temp = colours;
          // temp[counter] = "blue";
          // setColours(temp);
          // // }
          // let tempData = data;
          // let tempHolder = tempData[counter + 1];
          // tempData[counter + 1] = tempData[counter];
          // tempData[counter] = tempHolder;
          // setData(tempData);
          // setCounter(counter + 1);
          // console.log(counter);
          // setKey(Math.random());
          bubbleSort();
        }}
      >
        Click me
      </Button>
    </Box>
  );
};

export default BubbleSort;
