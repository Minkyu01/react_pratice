import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Box = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
`;

const Button = styled.button`
  border: 0;
  border-radius: 15px;
  padding: 15px;
  width: 130px;
  height: 50px;
  margin: 0 20px;
  background-color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: beige;
  }
  &:active {
    background-color: #777777;
    border: 1px solid teal;
  }
`;

const BtnBox = styled.div`
  display: flex;
  margin: 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Box>
      <Title>To do</Title>
      <BtnBox>
        <Button onClick={onInput} value={Categories.TO_DO}>
          TO_DO
        </Button>
        <Button onClick={onInput} value={Categories.DOING}>
          DOING
        </Button>
        <Button onClick={onInput} value={Categories.DONE}>
          DONE
        </Button>
      </BtnBox>
      <CreateToDo />
      <ol>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ol>
    </Box>
  );
}

// <select value={category} onInput={onInput}>
//   <option value={Categories.TO_DO}>To Do</option>
//   <option value={Categories.DOING}>Doing</option>
//   <option value={Categories.DONE}>Done</option>
//   <option value={Categories.DELETE}>Delete</option>
// </select>
export default ToDoList;
