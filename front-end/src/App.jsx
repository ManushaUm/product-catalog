import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
//import './App.css'
import NavBar from "./components/NavBar";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddProduct />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
