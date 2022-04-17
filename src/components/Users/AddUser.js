import React, { useState } from "react";
import UserForm from "./UserForm";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();

  const addHandler = (user) => {
    if (user.name.trim("").length === 0 || user.age.trim("").length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (Math.floor(user.age) <= 0) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age (> 0).",
      });
      return;
    } else if (
      props.users.find(
        (UserFromList) =>
          UserFromList.name === user.name && UserFromList.age === user.age
      )
    ) {
      setError({
        title: "Invalid name!",
        message: "This name and age is already used.",
      });
      return;
    }

    const newUser = {
      name: user.name,
      age: user.age,
      id: Math.random().toString(),
    };
    props.onAddUser(newUser);
  };

  const cancelHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={cancelHandler}
        />
      )}

      <Card className={classes.control}>
        <UserForm onAdd={addHandler} />
      </Card>
    </div>
  );
};

export default AddUser;
