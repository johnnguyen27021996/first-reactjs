import ListItem from "./ItemTodo";

export default function ListTodo({ listTask, deleteTask, setDone }) {
  return (
    <ul style={{ display: "inline-block" }}>
      {listTask.map((task, key) => (
        <ListItem key={key} task={task} deleteTask={deleteTask} setDone={setDone}></ListItem>
      ))}
    </ul>
  );
}
