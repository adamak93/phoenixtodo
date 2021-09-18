import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';

function App() {
  return (
    <Container maxW = "container.sm">
      <Heading my = "4">Phoenix Todo List: Powered by React and Redux.</Heading>
      <AddTodo/>
    </Container>
  );
}

export default App;