import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
    let content = (
      <p style={{ textAlign: "center" }}>No records found.</p>
    );

    if (props.users.length > 0) {
      content = (
        <ul>
          {props.users &&
            props.users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age})
              </li>
            ))}
        </ul>
      );
    }
  return (
    <Card className={styles.users}>
        {content}
      {/* <ul>
        {props.users && props.users.map((user) => (
          <li key={user.id}>{user.name} ({user.age})</li>
        ))}
      </ul> */}
    </Card>
  );
};

export default UsersList;
