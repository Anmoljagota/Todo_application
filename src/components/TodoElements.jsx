import {  Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const TodoElements = ({ handleTodo, handleSubmit, text }) => {
  return (
    <Flex w={"80%"} m={"auto"}>
      <Input
        placeholder="Add Todo"
        _placeholder={{
          color: "white",
          fontStyle: "bold",
        }}
        onChange={handleTodo}
        borderLeftRadius={6}
        borderRightRadius={"none"}
        color={"#FFFFFF"}
        value={text}
        size={"lg"}
        borderColor={"#7154E0"}
        _hover={{ borderColor: "#7154E0" }}
      />

      <Button
        bgColor="#7154E0"
        color={"white"}
        onClick={handleSubmit}
        borderRadius={"none"}
        borderRightRadius={3}
        border={"none"}
        size={"lg"}
        _hover={{ borderColor: "#7154E0" }}
      >
        Add Todo
      </Button>
    </Flex>
  );
};

export default TodoElements;
