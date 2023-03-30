import { useState } from "react";
import styles from "../styles/style.module.css";
const css = {
  textAlign: "left",
  paddingTop: "10px",
  paddingBottom: "10px",
};

export default function ListItem({ task, deleteTask, setDone }) {
  return (
    <li style={css}>
      <span className={styles.mr16}>{task.completed ? "a" : "b"}: {task.title}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => setDone(task.id, !task.completed)}
      >
        {task.completed ? "Done" : "Processing..."}
      </button>
      <button
        type="button"
        className={styles.button}
        style={{ backgroundColor: "#f78079" }}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
