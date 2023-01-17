import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const List = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  margin: 20px 0;
  border-radius: 20px;
  width: 400px;
  height: 70px;
  padding-left: 20px;
  padding-top: 10px;
`;

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

const BtnBox = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Button = styled.button`
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
  border: 0;
  width: 70px;
  height: 30px;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      if (category === "DELETE") {
        return [
          ...oldToDos.slice(0, targetIndex),
          ...oldToDos.slice(targetIndex + 1),
        ];
      } else {
        return [
          ...oldToDos.slice(0, targetIndex),
          newToDo,
          ...oldToDos.slice(targetIndex + 1),
        ];
      }
    });
  };
  return (
    <List>
      <Text>{text}</Text>
      <BtnBox>
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.TO_DO && (
          <Button name={Categories.TO_DO} onClick={onClick}>
            To Do
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
        {category !== Categories.DELETE && (
          <Button name={Categories.DELETE} onClick={onClick}>
            DELETE
          </Button>
        )}
      </BtnBox>
    </List>
  );
}

export default ToDo;
