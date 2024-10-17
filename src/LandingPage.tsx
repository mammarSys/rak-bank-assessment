import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setName } from "./store";

export const LandingPage: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setName(input));
  };

  return (
    <>
      <div
        style={{
          height: "50vh",
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid white",
          borderRadius: "4px",
          boxShadow: "10px 10px 75px #1976d2",
        }}
      >
        <h1>Welcome to Vertical Carousel</h1>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
          label="Enter Your Name"
        />
        <Button
          style={{ marginTop: "2%" }}
          variant="contained"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
