import TodoList from "./Components/TodoList";

const initialList = [
  { id: 1, name: "Дело 1", completed: false },
  { id: 2, name: "Дело 2", completed: false },
];

function App() {
  return <TodoList initialList={initialList} />;
}

export default App;
