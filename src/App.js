import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <Container maxW = "container.sm">
      <Heading my = "4">Things To Do:</Heading>
      <AddTodo/>
      <VisibilityFilter/>
      <TodoList/>
    </Container>
  );
}

export default App;