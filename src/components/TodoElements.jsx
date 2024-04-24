import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";

const TodoElements = ({handleTodo,handleSubmit}) => {
  return (
    <Box>
      <Input placeholder="Enter todo" onChange={handleTodo}/>
      <Button colorScheme='blue' onClick={handleSubmit}>Add</Button>
    </Box>
  );
};

export default TodoElements;
