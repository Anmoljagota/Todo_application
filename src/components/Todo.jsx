import React, { useState } from "react";
import TodoElements from "./TodoElements";
import { useDispatch, useSelector } from "react-redux";
import { Delete_Todo, Task_Success, Toggle_Todo } from "../redux/action";
import TodoItems from "./TodoItems";
import { Box, Flex, Heading, useToast } from "@chakra-ui/react";

const Todo = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const Todos = useSelector((todos) => todos.todos);

  //function to store the input data
  const handleTodo = (e) => {
    setText(e.target.value);
  };

  //function to add a todo inside redux
  const handleSubmit = () => {
    if (!text) {
      toast({
        title: `Todo input should not be empty`,
        status: "error",
        isClosable: true,
        position: "top-right",
        duration: 3000,
      });
    } else {
      const todo = {
        id: Math.random() * 10 + 0 * 432 - 21,
        text,
        status: false,
        bg: getRandomColor(),
      };

      dispatch(Task_Success(todo));
      setText("");
    }
  };

  //function to add a filter todo inside redux
  const DeleteTodo = (Todoid) => {
    const newtodos = Todos.filter((item) => {
      return Todoid !== item.id;
    });
    dispatch(Delete_Todo(newtodos));
  };

  //function to add a updated todo inside redux
  const ToggleTodo = (id) => {
    const newtodos = Todos.map((item) => {
      return id == item.id ? { ...item, status: !item.status } : item;
    });
    dispatch(Toggle_Todo(newtodos));
  };

  //function to get the radom colour
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      var index = Math.floor(Math.random() * 10);
      color += letters[index];
    }
    return color;
  }
  return (
    <Box
      bg={"#1a202c"}
      p={6}
      w={{ lg: "40vw", md: "60vw", sm: "90vw", base: "95vw" }}
      borderRadius={10}
    >
      <Heading
        as="h2"
        pb={10}
        fontSize={"1.6rem"}
        color={"white"}
        textAlign={"center"}
      >
        What's the Plan for Today?
      </Heading>
      <TodoElements
        handleTodo={handleTodo}
        handleSubmit={handleSubmit}
        text={text}
      />
      <Flex flexDir={"column"} gap={"0.5rem"} mt={5}>
        {Todos.length > 0 &&
          Todos.map((ele) => (
            <TodoItems
              key={ele.id}
              {...ele}
              DeleteTodo={DeleteTodo}
              ToggleTodo={ToggleTodo}
            />
          ))}
      </Flex>
    </Box>
  );
};

export default Todo;
