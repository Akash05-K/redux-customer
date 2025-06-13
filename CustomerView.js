import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCustomer } from "./slices/CustomerSlices";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

export default function CustomerView() {
  const customers = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  };

  return (
    <div>
      <h3>Customer List</h3>
      <ul className="CustomerList">
        {customers.map((name, index) => (
          <li key={index}>
            {name}
            <IconButton
              edge="end"
              aria-label="delete"
              color="error"
              size="small"
              onClick={() => deleteHandler(index)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
