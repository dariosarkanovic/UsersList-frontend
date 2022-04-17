import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUser = {
      name: enteredName,
      age: enteredAge,
    };

    props.onAdd(enteredUser);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["form-items"]}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={enteredName} onChange={changeNameHandler} />
        <label htmlFor="age">Age:</label>
        <input id="age" type="number" value={enteredAge} onChange={changeAgeHandler} />
      </div>
      <div className={classes["form-actions"]}>
        <Button type="submit">Add User</Button>
      </div>
    </form>
  );
};

export default UserForm;
