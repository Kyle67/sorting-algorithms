import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import Home from "./Home";
import BubbleSort from "./SortingPages/BubbleSort";
import QuickSort from "./SortingPages/QuickSort";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box w="100%" bgColor="lightgrey" boxShadow="2px 2px 2px black" p="10px">
        <nav
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          <Link
            style={{
              borderWidth: "1px",
              padding: "5px",
              borderRadius: "15px",
              backgroundColor: "grey",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              borderWidth: "1px",
              padding: "5px",
              borderRadius: "15px",
              backgroundColor: "grey",
            }}
            to="/bubble-sort"
          >
            Bubble Sort
          </Link>
          <Link
            style={{
              borderWidth: "1px",
              padding: "5px",
              borderRadius: "15px",
              backgroundColor: "grey",
            }}
            to="/quick-sort"
          >
            Quick Sort
          </Link>
        </nav>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubble-sort" element={<BubbleSort />} />
        <Route path="/quick-sort" element={<QuickSort />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
