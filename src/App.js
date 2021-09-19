import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import firebase from "./util/firebase";
import { useEffect, useState } from "react";

  
function App() { 
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val(); 
      const todoList = [];
      for (let id in todos) {
        todoList.push(todos[id]);
      }
      console.log(snapshot.val()); 
      setTodoList(todoList); 
    });
  }, [])
  return (
    <Container maxW="container.sm">
      <Heading my="4">Things To Do:</Heading>
      <AddTodo />
      <VisibilityFilter />
      <TodoList todoList = {todoList} />
    </Container>
  );
}

export default App;
