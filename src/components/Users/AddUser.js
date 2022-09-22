import { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const username = usernameRef.current.value;
    const age = ageRef.current.value;
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
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
    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            type="text"
            id="username"
            ref={usernameRef}
          />
          <label htmlFor="username">Age (Years)</label>
          <input type="number" id="age" ref={ageRef} />
          <Button type="submit">Add User</Button>
          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
