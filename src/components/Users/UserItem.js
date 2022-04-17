import React from "react";
import classes from './UserItem.module.css'

const UserItem = props => {

const deleteHandler = () => {
    props.onDelete(props.id);
}
    return(
        <li className={classes["user-item"]} onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default UserItem;