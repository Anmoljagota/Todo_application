import { Checkbox, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";

import { FaRegEdit } from "react-icons/fa";

const TodoItems = ({ id, text, status, bg, DeleteTodo, ToggleTodo }) => {
  return (
    <HStack>
      <Checkbox
        w={"5%"}
        defaultChecked={status}
        onChange={() => ToggleTodo(id)}
      ></Checkbox>
      <Flex
        p={3}
        color={"#FFFFFF"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"90%"}
        bg={bg}
        borderRadius={6}
      >
        <Text>{text}</Text>
        <HStack>
          <RxCrossCircled
            style={{ cursor: "pointer", fontSize: "1.3rem" }}
            onClick={() => DeleteTodo(id)}
          />
          
        </HStack>
      </Flex>
    </HStack>
  );
};

export default TodoItems;
