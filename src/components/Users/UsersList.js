import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  
  return (
    <Card className={`${classes.list} ${props.items.length === 0 ? classes.empty : ""}`}>
      <ul>
        {props.items.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteUser}>
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
      </Card>
  );
};

export default UserList;
