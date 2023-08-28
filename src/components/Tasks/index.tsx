import { useTasks } from "../../hooks/useTasks";
import { NoTasksWarning } from "../NoTasksWarning";
import { Task } from "../Task";

import * as S from "./styles";

export const Tasks = () => {
  const { tasks } = useTasks();

  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <S.Container>
      <S.Wrapper>
        <S.TasksInfo>
          <S.AvailableTasks>
            <p>Tarefas criadas</p>
            <S.Counter>{taskQuantity}</S.Counter>
          </S.AvailableTasks>

          <S.CompletedTasks>
            <p>Concluídas</p>
            <S.Counter>
              {completedTasks} de {taskQuantity}
            </S.Counter>
          </S.CompletedTasks>
        </S.TasksInfo>

        <S.TasksContainer>
          {tasks.length > 0 ? (
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                isCompleted={task.isCompleted}
              />
            ))
          ) : (
            <NoTasksWarning />
          )}
        </S.TasksContainer>
      </S.Wrapper>
    </S.Container>
  );
};
