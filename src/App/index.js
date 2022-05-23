import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';

// const defaultTodos = [
//   { text: 'Tarea 1', completed: false },
//   { text: 'Tarea 2', completed: false },
//   { text: 'Tarea 3', completed: false },
//   { text: 'Tarea 4', completed: false },
// ];

function App() {
  const storageTodosString = localStorage.getItem("storageTodos");
  let storageParseTodos;

  if(!storageTodosString){
    localStorage.setItem("storageTodos", JSON.stringify([]));
    storageParseTodos = [];
    // alert("NO EXISTE" + storageTodosString);
  }else{
    storageParseTodos = JSON.parse(storageTodosString);
    // alert("SI EXISTE" + storageTodosString);
  }

  const [todos, setTodos] = React.useState(storageParseTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) =>{
    localStorage.setItem("storageTodos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //newTodos[todoIndex].completed = newTodos[todoIndex].completed ? true : false;
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <>
      <TodoButton />
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    </>
  );
}
export default App;