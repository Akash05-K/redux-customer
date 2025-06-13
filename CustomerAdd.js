import React, { useState } from "react";
import { addCustomer } from "./slices/CustomerSlices";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button"; // or regular <button>
import './App.css';

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function nameChange() {
    if (input.trim()) {
      dispatch(addCustomer(input));
      setInput("");
    }
  }

  return (
    <div className="CustomerAdd">
      <h3 className="CustomerHeading">Add New Customer</h3>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={nameChange} sx={{ ml: 1 }}>
        Add
      </Button>
    </div>
  );
}
