import { Flex, Text } from "@chakra-ui/react";

interface CustomTableProps {
  data: number[];
  colours: string[];
}

function CustomTable({ data, colours }: CustomTableProps) {
  const maxHeight = 500;

  // Normalise the data to 0-1 then multiply by max height
  const maxValue = Math.max(...data);
  const normalisedData = data.map((data: number) => {
    return (data / maxValue) * maxHeight;
  });

  // Values for table styling
  const { innerWidth: windowWidth } = window;
  const dataWidth = (0.9 * windowWidth) / normalisedData.length;

  return (
    <Flex alignItems="flex-end">
      {normalisedData.map((data: number, index) => {
        return <Flex h={data} bgColor={colours[index]} w={dataWidth}></Flex>;
      })}
    </Flex>
  );
}

export default CustomTable;
