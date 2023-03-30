import { useState } from "react";
import ListTodo from "./ListTodo";
import { useEffect } from "react";

export default function Todo({ accountId }) {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${accountId}/todos`)
      .then((response) => response.json())
      .then((json) => {
        setListTask(json);
      });
  }, []);

  const changeTask = (event) => {
    setTask(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (task != "") {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: task,
          completed: false,
          userId: accountId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setListTask([
            ...[{ ...json, id: Math.random().toString(36).substring(2, 12) }],
            ...listTask,
          ]);
          setTask("");
        });
    }
  };

  const deleteTask = (task) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${task}`, {
      method: "DELETE",
    });
    let tempTask = listTask.filter((t) => t.id != task);
    setListTask(tempTask);
  };
  const setDone = (task, done) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${task}`, {
      method: "PUT",
      body: JSON.stringify({
        completed: done,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((_json) => {
        let index = listTask.findIndex((t) => t.id === task);
        if (index !== -1) {
          let temp = listTask.filter((t) => t.id !== task);
          temp.splice(
            index,
            0,
            Object.assign({}, listTask[index], { completed: done })
          );
          setListTask(temp);
        }
      });
  };

  return (
    <div>
      <h3>Todo</h3>
      <form action="#">
        <input value={task} type="text" onChange={changeTask} />
        <button type="submit" onClick={submit}>
          Add
        </button>
      </form>
      <ListTodo
        listTask={listTask}
        deleteTask={deleteTask}
        setDone={setDone}
      ></ListTodo>
    </div>
  );
}
