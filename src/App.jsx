import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import { Audio } from "react-loader-spinner";
import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, like fetching data or any initialization
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simulate a 2-second loading delay
    };

    fakeAsyncOperation();
  }, []); // Run the effect only once on mount

  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
          }}
        >
          <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </Box>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
