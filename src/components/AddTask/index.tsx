import { FormEvent } from "react";
import { PlusCircle } from "phosphor-react";

import { useTasks } from "../../hooks/useTasks";

import * as S from "./styles";

export const AddTask = () => {
  const { addTask } = useTasks();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    addTask(name);

    event.currentTarget.reset();
  };

  return (
    <S.AddTaskForm onSubmit={handleSubmit}>
      <S.Input name="name" placeholder="Adicione uma nova tarefa" />
      <S.AddButton type="submit">
        Criar
        <PlusCircle size={16} />
      </S.AddButton>
    </S.AddTaskForm>
  );
};
