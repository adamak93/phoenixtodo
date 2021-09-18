import { Box, Checkbox, Text} from '@chakra-ui/react'
import { useState } from 'react';

export const Todo = ({ todo }) => {
    const [checked, isChecked] = useState(false);

    return (
        <Box mb ={1} p ={2}>
            <Checkbox color = "teal" isChecked = {checked}>
                <Text as ={todo.completed && "del"}>{todo.content}</Text>
            </Checkbox>

        </Box>
    )
}
