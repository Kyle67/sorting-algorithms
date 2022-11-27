import "../../styles/styles.css";

import React, { useEffect, useState } from "react";
import { Box, Button, Heading, useBoolean } from "@chakra-ui/react";
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
import CustomTable from "../../components/CustomTable";
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

// TODO: Allow the timer to be set on the front end

const BubbleSort = () => {
  const [dataValues, setDataValues] = useState(100);
  const [colours, setColours] = useState(generateColours(dataValues));
  const [data, setData] = useState(generateData(dataValues));
  const [disabled, setDisabled] = useBoolean();
  const [key, setKey] = useState(0);

  const labels = generateLabels(dataValues);

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
    setDisabled.on();
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          swap(data, setData, j, j + 1);
          setKey(Math.random());
          await new Promise((r) => setTimeout(r, sortingDelay));
        }

        // TODO: Need to colour the next bar otherwise it looks a little odd

        // // TODO: Fix colours not being correctly set for the last two values
        let temp = colours;
        if (j + 1 < data.length) {
          temp[j + 1] = "green";
        }

        // -1 because we don't want to reset the values colour back
        if (j < data.length - 1) {
          temp[j] = "red";
        }
        setColours(temp);
      }
    }
    let temp = colours;
    temp[0] = "green";
    setColours(temp);
    setKey(Math.random());
    setDisabled.off();
  };

  // TODO: anyway to fix the flashing? i.e. a fast refresh that isn't cheesed with updating key

  // TODO: Remove grid, remove axis, remove title at top

  // TODO: Prevent button from being spam clicked
  // TODO: Prevent hitting reset will animating (or stop and fix)

  // TODO: reset button that fetches new data

  // TODO: Reset should stop sorting

  // TODO: Disabled click me button once clicked
  // TODO: Add a pause button? (maybe a play button too?)
  return (
    <Box>
      <Heading>Bubble Sort!!!</Heading>
      <CustomTable data={data} colours={colours} />
      <Button
        disabled={disabled}
        onClick={() => {
          bubbleSort();
        }}
      >
        Click me
      </Button>
      <Button
        disabled={disabled}
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
