import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }])

  function handleTodoClick(todo) {
    //Option 1:
    // const index = todoList.findIndex(x => x.id === todo.id)
    // if (index < 0)
    //   return;
    // const newTodoList = [...todoList];
    // newTodoList.splice(index, 1);

    //Option 2:
    const newTodoList = todoList.filter(item => item.id !== todo.id)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: Math.ceil(Math.random() * 1000),
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
    localStorage.setItem('todoList', newTodoList)
  }
  return (
    <div className="App">
      <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
