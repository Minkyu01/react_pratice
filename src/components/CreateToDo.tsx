import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const Search = styled.input`
  border-radius: 30px;
  width: 470px;
  height: 40px;
  &:hover {
    background-color: beige;
  }
  &::placeholder {
    padding: 10px;
  }
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Search
        {...register("toDo", {
          required: "Please write a To Do ",
        })}
        placeholder="현재 리스트에 할 일을 추가하세요."
      ></Search>
    </form>
  );
}

export default CreateToDo;
