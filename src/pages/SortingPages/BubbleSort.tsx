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
import {
  generateColours,
  generateData,
  generateLabels,
} from "../../helper/generateData";
import { graphOptions, sortingDelay } from "../../consts/graphConsts";
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
  const [dataValues, setDataValues] = useState(100);
  const [colours, setColours] = useState(generateColours(dataValues));
  const [data, setData] = useState(generateData(dataValues));
  const [key, setKey] = useState(0);
  const [counter, setCounter] = useState(0);

  const labels = generateLabels(dataValues);
  const tableData = {
    labels: labels,
    datasets: [
      {
        label: "Bubble Sort", // TODO: Hide this title later anyway
        data: data,
        backgroundColor: colours,
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

  // TODO: maybe I should even set the colour 1 furhter forward, you can see it is trailing behind still
  const bubbleSort = async () => {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          swap(data, setData, j, j + 1);
          setKey(Math.random());
          await new Promise((r) => setTimeout(r, sortingDelay));
        }

        // TODO: Fix colours not being correctly set for the last two values
        let temp = colours;
        if (j + 2 < data.length) {
          temp[j + 2] = "green";
        }

        // -1 because we don't want to reset the values colour back
        if (j + 1 < data.length - 1) {
          temp[j + 1] = "red";
        }
        setColours(temp);
      }
    }
  };

  // TODO: anyway to fix the flashing? i.e. a fast refresh that isn't cheesed with updating key

  // TODO: Remove grid, remove axis, remove title at top

  // TODO: Prevent button from being spam clicked
  // TODO: Prevent hitting reset will animating (or stop and fix)

  // TODO: reset button that fetches new data
  return (
    <Box>
      <Heading>Bubble Sort!!!</Heading>
      <Bar key={key} redraw data={tableData} options={graphOptions} />
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
      <Button
        onClick={() => {
          setData(generateData(dataValues));
          setColours(generateColours(dataValues));
          setKey(Math.random());
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default BubbleSort;
