import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { Todo } from './Todo'

export const TodoList = () => {
    const { todos } = useSelector(state => state);
    console.log(todos);

    return (
        <Box my = {3}>
            {todos.length ? todos.map(todo => (
                <Todo key = {`todo-${todo.id}`} todo={todo}/>
            )): <Box textAlign = "center" my="4">No tasks left, hooray!</Box>}
            
        </Box>
    )
}
