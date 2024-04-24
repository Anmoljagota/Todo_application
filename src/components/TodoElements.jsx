import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const TodoElements = ({ handleTodo, handleSubmit, text }) => {
  return (
    <Flex>
      <Input
        placeholder="Enter todo"
        onChange={handleTodo}
        borderLeftRadius={6}
        borderRightRadius={"none"}
        color={"#FFFFFF"}
        value={text}
      />
      <Button
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        color={"white"}
        onClick={handleSubmit}
        borderRadius={"none"}
      >
        Add Todo
      </Button>
    </Flex>
  );
};

export default TodoElements;
