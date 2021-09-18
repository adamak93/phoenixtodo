import { Button, Flex, FormControl, Input} from '@chakra-ui/react';
import { useState } from 'react';

export const AddTodo = () => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setValue('');
    }
    //If Input is in the textfield, then button is clickable, else it's not. Also prevents reload.
    const handleInput = e => {
        e.preventDefault();
        setValue(e.target.value);
    }
    return (
        <form onSubmit = {handleSubmit}>
            <Flex>
            <FormControl>
                <Input
                type="text"
                value= {value}
                onChange={handleInput}
                borderTopRightRadius = {0}
                borderBottomRightRadius = {0}
                />
            </FormControl>
            <Button
                colorScheme = "teal"
                type ="submit"
                disabled= {!value}
                borderTopLeftRadius = {0}
                borderBottomLeftRadius = {0}
            >+</Button>
            </Flex>
         
        </form>
    )
}
