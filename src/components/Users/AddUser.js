import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const user = {
      name: username,
      age: +age,
      id: Math.random().toString(),
    };
    props.onAddUser(user);
    setUsername("");
    setAge("");
  };

  const usernameInputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={usernameInputChangeHandler}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageInputChangeHandler}
          />
          <Button type="submit">Add User</Button>
          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
