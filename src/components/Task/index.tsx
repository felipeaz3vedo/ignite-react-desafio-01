import { CheckCircle, Circle, Trash as TrashIcon } from "phosphor-react";

import { useTasks } from "../../hooks/useTasks";

import * as S from "./styles";

interface TaskProps {
  id: string;
  name: string;
  isCompleted: boolean;
}

export const Task = ({ id, name, isCompleted }: TaskProps) => {
  const { toggleStatus, removeTask } = useTasks();

  return (
    <S.Container isCompleted={isCompleted}>
      {isCompleted ? (
        <CheckCircle weight="fill" onClick={() => toggleStatus(id)} />
      ) : (
        <Circle weight="bold" onClick={() => toggleStatus(id)} />
      )}

      <p>{name}</p>

      <S.IconWrapper onClick={() => removeTask(id)}>
        <TrashIcon />
      </S.IconWrapper>
    </S.Container>
  );
};
